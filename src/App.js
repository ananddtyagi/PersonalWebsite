import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Main from './components/main.jsx';
// import Admin from './components/admin.jsx';
import Login from './components/login.jsx';

function App(props) {

  return (
    <div>
      <Router>
            <div>
              <Switch>
                <Route path='/login' render={() =><Login/>} />
                <Route path='/' render={() =><Main/>} />
              </Switch>
            </div>
      </Router>
    </div>
  );
}

export default App;
