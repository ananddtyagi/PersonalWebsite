import React, { Component , useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';


export default function Edu(props) {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.airtable.com/v0/appQxfMvhEQXCZ2QO/Education?api_key='+  process.env.REACT_APP_BLOG_API_KEY,
      );

      setData(result.data.records);
    };

    fetchData();
  }, []);


  return (
    <div>
      {data.map(info => <InfoCard {...info.fields} />)}
    </div>
  )
}

const InfoCard = (props) => (
  <div className="card">
    <div className="card-body">
    <Grid
      container
      justify= "space-between"
      spacing= {24}
    >
      <Grid item>
        <Typography type="title" color="inherit">
          <h2 className="card-title">{props.School}</h2>
        </Typography>
      </Grid>

      <Grid item>
      <Typography type="title" color="inherit">
        <h4 className="card-text">{props.Date}</h4>
      </Typography>
      </Grid>
    </Grid>

      <h4 className="card-text">{props.Location}</h4>
      <h3 className="card-text">{props.Degree}</h3>
      <p className="card-text">
        <small className="text-muted">{props.Info}</small>
      </p>
    </div>
  </div>
);