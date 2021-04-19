import React, { Component , useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBottom: theme.spacing(5),

  },
  subsection: {
    paddingTop: theme.spacing(2)
  },
  main: {
    paddingBottom: theme.spacing(2)
  },
  subtext: {
    paddingBottom: theme.spacing(2)
  },
  body: {
    paddingBottom: theme.spacing(2)
  },

}));


export default function Projects(fields) {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.airtable.com/v0/appQxfMvhEQXCZ2QO/Projects?api_key=' +  process.env.REACT_APP_AIRTABLE_KEY,
      );

      setData(result.data.records);
    };

    fetchData();
  }, []);

  data.sort(function(a, b){
    // Compare the 2 dates
    if (a.fields.ID < b.fields.ID) return -1;
    if (a.fields.ID > b.fields.ID) return 1;
    return 0;
  })


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={8}>
          <Box className={classes.section}>
            {data.map(info => <InfoCard fields={info.fields} />)}
          </Box>
        </Grid>

        <Grid item xs>
        </Grid>
      </Grid>
    </div>
  )
}

function InfoCard ({fields}) {
  const classes = useStyles();
  console.log(fields.URL)
  return (
    <div>
      <div className={classes.subsection}>
        <Box className={classes.main}>
         
            {typeof fields.URL === 'undefined' ?  
              <Typography variant='h4'>
                {fields.Title}
              </Typography>
              :
                <Typography variant='h4'>
                  <Link href={fields.URL} target="_blank" >
                    {fields.Title}
                  </Link>
                </Typography>

            }
        </Box>
        <Box className={classes.subtext}>
          <Typography varient='h6'>
            {fields.Date}
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