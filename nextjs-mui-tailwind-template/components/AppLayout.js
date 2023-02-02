import { useState, useEffect, useContext, createContext } from 'react';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import Container from '@mui/material/Container';
import ThemeSwitch from './ThemeSwitch';
import Link from '../config/link';
import Drawer from '@mui/material/Drawer';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import LoginIcon from '@mui/icons-material/Login';
import AppBarMenu from './AppBarMenu';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    //marginLeft: `-${drawerWidth}px`,
    marginLeft: `10px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 250,
    }),
  }));  


const MUIAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  }),
  opacity: 0.9,
//  filter: 'blur(6px)',
  zIndex: 99,

}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const StyledToolbar = styled(AppBar)(({ theme }) => ({
  background: '#5c6e96',
  
  color: '#FFF',
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 38,
  },
  
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {    
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const navigation = [
  { name: 'Home - MUI', href: '/', icon: <HomeIcon/>, current: true },  
  { name: 'Home - TW', href: '/tw/landing', icon: <HomeIcon/>, current: true },  
  { name: 'Sign In - TW', href: '/tw/signin', icon: <LoginIcon/>, current: false },
  { name: 'Sign Up - MUI', href: '/signup-mui', icon: <AppRegistrationIcon/>, current: false },  
  { name: 'Form - TW', href: '/tw/form', icon: <DynamicFormIcon/>, current: false },  
]

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function AppLayout(props) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  
  
  const [open, setOpen] = useState(isMdUp? true : false);
  const colorMode = useContext(ColorModeContext);


  const loading =  "loading"
  
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [openSearchDialog, setOpenSearchDialog] = useState(false);

  useEffect(() => {
    setOpen(isMdUp? true : false);
  }, [isMdUp])
  
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
     
        <MUIAppBar
          position="fixed"
          open={open}            
        >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
            
            <Tooltip
                arrow
                title={
                  <>
                    <Typography color="inherit"><b>Messages</b></Typography>
                    {'Check messages'}
                  </>
                }>
                <IconButton color="inherit" component={Link} href="/auth/comments" sx={{ml: 2}}>                
                  <Badge badgeContent={4} color="warning">
                    <MailIcon color="" />
                  </Badge>
              </IconButton>                  
            </Tooltip>                                   
         
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
              <ThemeSwitch handleThemeChange={props.handleThemeChange} defaultVal={!props.darkState}/>                  
            </Box>                
         
            <AppBarMenu handleDrawerOpen={handleDrawerOpen} session={''}/>

          </Toolbar>
        </MUIAppBar>

        <Main open={open}>
          <DrawerHeader />
     
          <Container maxWidth="false" sx={{marginTop: '10px'}}>          
            {props.mainPage}            
          </Container>

        </Main>
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
          <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          </DrawerHeader>

          <Divider />
       
          <List>
          {navigation.map((item, index) => (
              <ListItem key={index} component={Link} href={item.href} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  {item.icon} 
                  </ListItemIcon>
                  <ListItemText primary={item.name} style={{color: 'black'}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      
    </>
  );
}

