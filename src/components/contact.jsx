import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';


class Main extends Component {
  render() {

    return (
      <div>
          <p>Email: anand dot deep dot tyagi at gmail dot com</p>

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