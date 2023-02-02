import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ThemeSwitch(props) {
  const theme = useTheme();
  const [state, setState] = React.useState({
    
    checkedB: !props.defaultVal,
    
  });

  const handleChange = (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    props.handleThemeChange(event.target.checked)
  };

  return (

    <IconButton sx={{ ml: 1 }} onClick={handleChange} color="inherit">
    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  </IconButton>

  );
}