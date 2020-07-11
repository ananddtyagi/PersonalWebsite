import React, { Component , useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Education from './education.jsx';
import Hobbies from './hobbies.jsx';
import Work from './work.jsx';
import Sidebar from './sidebar.jsx';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';


import github from ".././images/github.png";
import linkedin from ".././images/linkedin.png";
import wordpress from ".././images/wordpress.png";
import medium from ".././images/medium.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    width: '100vw',
  },
  header: {
    textAlign: 'center',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  home: {
    color: 'black',
    textDecoration:'none',
  },
  tabs: {
    textAlign: 'center',
    paddingBottom: theme.spacing(1),
  },
  tablabel: {
    paddingRight: theme.spacing(10),
    paddingLeft: theme.spacing(10),
  }
}));

function Main () {
  const classes = useStyles();

  return(
    <div>
      <h1>Welcome!</h1>
    </div>

  )

}


export default function Welcome () {


  const classes = useStyles();
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs>


          </Grid>
          <Grid item xs={8}>
            <Main></Main>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
      </div>
    )
}