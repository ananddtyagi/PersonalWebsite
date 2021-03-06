import React, { Component , useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBottom: theme.spacing(5),

  },
  header: {
    paddingBottom: theme.spacing(2)
  },
  subsection: {

  },
  main: {
    paddingBottom: theme.spacing(2)
  },
  body: {
    paddingBottom: theme.spacing(2)
  },

}));


export default function Hobbies(props) {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.airtable.com/v0/appQxfMvhEQXCZ2QO/Hobbies?api_key='+  process.env.REACT_APP_AIRTABLE_KEY,
      );

      setData(result.data.records);
    };

    fetchData();
  }, []);


  return (
    <div>
      <Box className={classes.section}>
        <Typography variant='h3' className={classes.header}>
          Hobbies and Other Interests
        </Typography>
        {data.map(info => <InfoCard fields={info.fields} />)}
      </Box>

    </div>
  )
}

function InfoCard ({fields}) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.subsection}>
        <Box className={classes.main}>
          <Typography variant='h5'>
            {fields.Name}
          </Typography>
        </Box>
        <Box className={classes.body}>
          <Typography variant='body1'>
            {fields.Description}
          </Typography>
        </Box>
      </div>
    </div>
  );
}