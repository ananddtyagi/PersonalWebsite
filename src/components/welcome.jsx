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
import Link from '@material-ui/core/Link';


import { makeStyles } from '@material-ui/core/styles';


import github from ".././images/github.png";
import linkedin from ".././images/icons8-linkedin-50.png";
import medium from ".././images/icons8-medium-50.png";
import resume from ".././images/icons8-resume-50.png";
import profilepic from ".././images/prof_pic.png";




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
  profilepic: {
    width: '100%',
  },
  welcometext: {
    paddingLeft: theme.spacing(10),
    paddingTop: theme.spacing(10),

  },
  textblock: {
    paddingBottom: theme.spacing(3),
  },
  icons: {
    paddingTop: theme.spacing(5)
  },
  icon: {
    paddingRight: theme.spacing(2)
  }
}));

function Main () {
  const classes = useStyles();

  return(
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Box>
             <img src={profilepic} className={classes.profilepic  }/>
          </Box>
          </Grid>
          <Grid item xs={6} className={classes.welcometext}>
            <Typography variant='h2' className={classes.textblock}>
              Hello
            </Typography>

            <Typography variant='body1' className={classes.textblock}>
              My name is Anand. I am a Computer Science and Data Science undergraduate student at NYU.
            </Typography>
            <Typography variant='body1' className={classes.textblock}>
              I enjoy reading, playing the piano and guitar, learning languages, performing magic, and of course, learning anything and everything related to CS.
            </Typography>
            <Typography variant='body1' className={classes.textblock}>
              This is my personal website where you can learn more about me and the projects I have worked on so far.
            </Typography>


            <Box className={classes.icons}>
            <a href="/files/resume.pdf" download className={classes.icon}>
                <img className="icon" src={resume}/>
              </a>
              <a target="_blank" href="https://github.com/ananddtyagi" className={classes.icon}>
                <img className="icon" src={github}/>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/ananddtyagi/"  className={classes.icon}>
                <img className="icon" src={linkedin}/>
              </a>
              <a target="_blank" href="https://medium.com/@anandtyagi"  className={classes.icon}>
                <img className="icon" src={medium}/>
              </a>

            </Box>

          </Grid>
      </Grid>
    </div>

  )

}

export default function Welcome () {


  const classes = useStyles();
    return (
      <div>
        <Grid container spacing={3}>

          <Grid item>
            <Main></Main>
          </Grid>

        </Grid>
      </div>
    )
}