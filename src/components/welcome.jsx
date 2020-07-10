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

function Main (props) {
  const classes = useStyles();
  let value = props.value
  const [section, setSection] = useState();

  switch(value){
    case 0:
      return (
        <div classes={classes.root}>
        <Education/>
        </div>
      )

    case 1:
      return (
        <div classes={classes.root}>
        <Work/>
        </div>
      )

    case 2:
      return (
        <div classes={classes.root}>
        <Hobbies/>
        </div>
      )

    default:
      return (
        <div classes={classes.root}>
        <Education/>
        </div>
      )

  }


}



export default function Welcome () {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(value)
    setValue(newValue);
  };
  const classes = useStyles();
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs>

            <Tabs
            orientation="vertical"
            variant="scrollable"
            indicatorColor="secondary"
            textColor="secondary"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Education" {...a11yProps(0)}/>
            <Tab label="Work" {...a11yProps(1)}/>
            <Tab label="Hobbies" {...a11yProps(2)} />

          </Tabs>
          <Sidebar/>
          </Grid>
          <Grid item xs={8}>
            <Main value={value}></Main>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
      </div>
    )
}