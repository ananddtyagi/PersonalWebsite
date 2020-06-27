import React, { Component , useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Education from './education.jsx';
import Hobbies from './hobbies.jsx';
import Work from './work.jsx';
import Sidebar from './sidebar.jsx';

import github from ".././images/github.png";
import linkedin from ".././images/linkedin.png";
import wordpress from ".././images/wordpress.png";
import medium from ".././images/medium.png";

function Main () {

    return (
      <div>
        <h1>About Me</h1>
        <Education/>
        <Work/>
        <Hobbies/>
      </div>
    )
}

export default function AboutMe () {

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs>
            <Sidebar/>
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