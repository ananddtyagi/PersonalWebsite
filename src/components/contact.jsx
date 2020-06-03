import React, { Component } from 'react';
import github from ".././images/github.png";
import linkedin from ".././images/linkedin.png";
import wordpress from ".././images/wordpress.png";
import medium from ".././images/medium.png";

import Grid from '@material-ui/core/Grid';


class Main extends Component {
  render() {

    return (
      <div>
          <p>Contact me at anand.tyagi@nyu.edu</p>
      </div>
    )
  }
}

export default class Contact extends Component {
  render() {

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
}