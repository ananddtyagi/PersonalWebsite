
import React, { Component , useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

export default class Education extends Component {


  constructor(props) {
      super(props);
      this.state = {
        information: [],
        api: 'https://api.airtable.com/v0/appQxfMvhEQXCZ2QO/Education?api_key='+  process.env.REACT_APP_BLOG_API_KEY,
      };
    }

  componentDidMount() {
    console.log(this.state.api)
    fetch(this.state.api)
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ information: data.records });
    }).catch(err => {
      // Error :(
    });
  }

  render() {

    return (
      <div>
        <h1>Education</h1>
        {this.state.information.map(info => <InfoCard {...info.fields} />)}
      </div>
    )
  }
}


const InfoCard = (props) => (
  <div className="card">
    <div className="card-body">
      <h2 className="card-title">{props.School}</h2>
      <h4 className="card-text">{props.Location}</h4>
      <h4 className="card-text">{props.Date}</h4>
      <h3 className="card-text">{props.Degree}</h3>

      <p className="card-text">
        <small className="text-muted">{props.Info}</small>
      </p>
    </div>
  </div>
);