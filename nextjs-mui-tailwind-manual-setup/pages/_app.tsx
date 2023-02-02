import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../config/createEmotionCache';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { blue, red, teal, cyan, grey, deepOrange } from '@mui/material/colors';
import AppLayout from '@/components/AppLayout';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  const [darkState, setDarkState] = React.useState(false);

  
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: '#4674c3',
            
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
          },
          warning: {
            // Purple and green play nicely together.
            main: red[300],            
          },
          dark: {
            // Purple and green play nicely together.
            main: grey[700],            
          },
          
          default: {
            // Purple and green play nicely together.
            main: grey[50]          
          },

          mode: darkState? 'dark' : 'light',
          // mode: 'dark' ,
        },

        // breakpoints: {
        //   values: {
        //     xs: 0,
        //     sm: 600,
        //     md: 900,
        //     lg: 1700,
        //     xl: 1720,
        //   },
        // },
    }), [darkState]);

  const handleThemeChange = () => {
    setDarkState(!darkState);        
  
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
                        
        <AppLayout handleThemeChange={handleThemeChange} darkState={darkState}  mainPage={
        <>         
          <Component {...pageProps} /> 
        </>}/>                                
        
      </ThemeProvider>
    </CacheProvider>
  );
}
