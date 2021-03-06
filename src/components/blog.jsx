
import React, { Component , useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Construction from './construction.jsx';
import Link from '@material-ui/core/Link';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          api: 'https://api.airtable.com/v0/appQxfMvhEQXCZ2QO/Blog?api_key='+  process.env.REACT_APP_AIRTABLE_KEY,
        };
      }

    componentDidMount() {
      fetch(this.state.api)
      .then((resp) => resp.json())
      .then(data => {
         this.setState({ posts: data.records });
      }).catch(err => {
        console.log('error')
      });
    }

  render() {

    return (
      <div>
      {/* {this.state.posts.map(post => <BlogPost {...post.fields} />)} */}
      <p>In the mean time, please check out my official blog 
        <Link href="https://anandtyagi.medium.com/" target="_blank">
          {" "} here!
        </Link>
      </p>

      </div>
    )
  }
}

export default class Blog extends Component {


  render() {

    return (
      <div>
        <Construction/>
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