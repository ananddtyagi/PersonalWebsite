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

import AboutMe from './aboutme.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import Blog from './blog.jsx';
import Construction from './construction.jsx';

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



function Main(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [section, setSection] = useState('About Me');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <div>
            <Grid className={classes.header} item xs={12}>
              <Typography className={classes.home} variant="h2" component="h2" gutterBottom value ="/about" component={Link} to={'/'}>
                Anand Tyagi
              </Typography>
            </Grid>
            <Grid container spacing={3} className={classes.tabs}>
              <Grid item xs>
              </Grid>
              <Grid item xs={8}>
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="tabs"
                  centered
                  variant="fullWidth"
                >

                  <Tab fullWidth label="About Me" value ="/about" component={Link} to={'/about'}/>
                  <Tab fullWidth label="Projects" value ="/projects" component={Link} to={'/projects'}/>
                  <Tab fullWidth label="Contact" value ="/contact" component={Link} to={'/contact'}/>
                  <Tab fullWidth label="Blog" value ="/blog" component={Link} to={'/blog'}/>

                </Tabs>
              </Grid>
              <Grid item xs>
              </Grid>
            </Grid>
            <Grid>
            <Switch>

              <Route exact path='/' render={() => <AboutMe/>} />
              <Route path='/about' render={() => <AboutMe/>} />
              <Route path='/projects' render={() => <Projects/>} />
              <Route path='/contact' render={() => <Contact/>} />
              <Route path='/blog' render={() => <Construction/>} />

            </Switch>

            </Grid>
          </div>
        </Container>

      </div>
    </Router>
  );
}

export default Main;
