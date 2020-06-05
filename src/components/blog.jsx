
import React, { Component , useState, useEffect } from 'react';
import github from ".././images/github.png";
import linkedin from ".././images/linkedin.png";
import wordpress from ".././images/wordpress.png";
import medium from ".././images/medium.png";

import Grid from '@material-ui/core/Grid';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          posts: [],
        };
      }

    componentDidMount() {
      fetch('https://api.airtable.com/v0/appQxfMvhEQXCZ2QO/Blog?api_key=keyjbqyQO6qR7xz1P')
      .then((resp) => resp.json())
      .then(data => {
         this.setState({ posts: data.records });
      }).catch(err => {
        // Error :(
      });
    }

  render() {

    return (
      <div>
      {this.state.posts.map(post => <BlogPost {...post.fields} />)}
      </div>
    )
  }
}

export default class Blog extends Component {


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


const BlogPost = ({ Title, Date, Post }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{Title}</h5>
      <p className="card-text">{Date}</p>
      <p className="card-text">
        <small className="text-muted">{Post}</small>
      </p>
    </div>
  </div>
);