import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Material and Tailwind
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Place all Tailwind CSS pages under ./pages/tw/*'} <br/>
          {'Place all Tailwind CSS pages under ./components/tw/*'} <br/>
          {'Configure paths that use tailwind in'} <b>{'tailwind.config.json'} </b><br/>
        </Typography>
        <Typography variant="body1">
            content: [./pages/tw/**/*.]      
        </Typography>

      </Container>
      <Box
        component="footer"
        sx={{
          position: 'fixed',
          bottom: 1,
          width: '100%',
          
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth={false}>
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}