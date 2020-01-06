import React from 'react';
import logo from './logo.svg';
import './App.css';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Sidebar from './components/sidebar';
import Main from './components/main';

const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    height: '100vh',
    backgroundColor: '#fcfcfc',


  },

  menuButton: {
    marginLeft: '1px',
    marginRight: '0px',
  },
  toolbar: theme.mixins.toolbar,

  content: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '6%'

    },
    flexGrow: 1,
    paddingLeft: '0px'

  },
}));


function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

  return (
    <div className="App">

      <div >
      <nav className={classes.drawer}>
      <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
        </IconButton>
        <Hidden smUp implementation="css" >

          <Drawer
             anchor={'left'}
             container={container}
             variant="temporary"
             open={mobileOpen}
             onClose={handleDrawerToggle}
             ModalProps={{
               keepMounted: true, // Better open performance on mobile.
             }}
          >
          {(
            <div className="Sidebar">
              <Sidebar></Sidebar>
            </div>

          )}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css" >

           <Drawer
             variant="permanent"
             open
           >
           {(
             <div className="Sidebar">
               <Sidebar></Sidebar>
             </div>
           )}
           </Drawer>
         </Hidden>
      </nav>
      </div>
        <div className = {classes.content}>
        <main>
        <div className = "Main">
            <Main></Main>
          </div>
        </main>
      </div>

    </div>
  );
}

export default App;
