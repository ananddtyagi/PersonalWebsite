import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

class Main extends Component {
  render() {

    return (
      <div>
          <p>Hi there! I'm still building this part of the site. Please check back soon!</p>
      </div>
    )
  }
}

export default class Construction extends Component {
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