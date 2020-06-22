
import React, { Component , useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          projects: [],
          api: 'https://api.airtable.com/v0/appQxfMvhEQXCZ2QO/Projects?api_key='+  process.env.REACT_APP_BLOG_API_KEY,
        };
      }

    componentDidMount() {
      console.log(this.state.api)
      fetch(this.state.api)
      .then((resp) => resp.json())
      .then(data => {
         this.setState({ projects: data.records });
      }).catch(err => {
        // Error :(
      });
    }

  render() {

    return (
      <div>
      <h1>Projects</h1>
      {this.state.projects.map(project => <ProjectCard {...project.fields} />)}
      </div>
    )
  }
}

export default class Project extends Component {


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


const ProjectCard = (props) => (
  <div className="card">
    <div className="card-body">
      <h2 className="card-title">{props.Title}</h2>
      <h4 className="card-text">{props.Date}</h4>
      <p className="card-text">
        <small className="text-muted">{props.Description}</small>
      </p>
    </div>
  </div>
);