import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';


import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { blue, red, teal, cyan, grey, deepOrange } from '@mui/material/colors';
import AppLayout from '../components/layout';

import '../styles/globals.css';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
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

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
