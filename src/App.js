import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import AboutMe from './components/aboutme.jsx';
import Education from './components/education.jsx';
import Work from './components/work.jsx';
import Projects from './components/projects.jsx';
import SkillsandHobbies from './components/skillsandhobbies.jsx';


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
  },
  header: {
    textAlign: 'center',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  tabs: {
    textAlign: 'center',
    paddingBottom: theme.spacing(5),
  },

  tablabel: {
    paddingRight: theme.spacing(10),
    paddingLeft: theme.spacing(10)
  }
}));


function App(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [section, setSection] = useState('About Me');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid className={classes.header} item xs={12}>
            <Typography  variant="h2" component="h2" gutterBottom>
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
                <Tab fullWidth label="About Me" onClick={() => setSection("About Me")}/>
                <Tab fullWidth label="Projects" onClick={() => setSection("Projects")}/>
                <Tab fullWidth label="Contact" onClick={() => setSection("Contact")}/>
              </Tabs>
            </Grid>
            <Grid item xs>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>

            </Grid>
            <Grid item xs={8}>
              {section == 'About Me' &&
              <div>
                <AboutMe></AboutMe>
                <Education></Education>
                <Work></Work>
                <SkillsandHobbies></SkillsandHobbies>
              </div>
              }
              {section == 'Projects' &&
                <Projects></Projects>
              }

            </Grid>
            <Grid item xs>

            </Grid>
          </Grid>
        </div>
      </Container>

    </div>
  );
}

export default App;
