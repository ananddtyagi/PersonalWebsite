import React from 'react';
import logo from './logo.svg';
import './App.css';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';


import Sidebar from './components/sidebar';
import Main from './components/main';

function App(props) {
  const { container } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };


  return (
    <div className="App">
      <div className="Sidebar">
      <nav>
        <Hidden smUp implementation="css">
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

              <Sidebar></Sidebar>

          )}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
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
      <main>
        <div className = "Main">
          <Main></Main>
        </div>
      </main>

    </div>
  );
}

export default App;
