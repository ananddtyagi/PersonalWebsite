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
  subsection: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2)
  },
  main: {
    display:"inline",
  },
  subtext: {
    paddingBottom: theme.spacing(2)
  },
  subtitle: {
    paddingBottom: theme.spacing(2)
  },
  body: {
    paddingBottom: theme.spacing(2)
  },

  company: {
    display:'inline',
  },

  description: {
    display:'inline',
    marginLeft: '1em'
  }

}));


export default function Work(props) {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.airtable.com/v0/appQxfMvhEQXCZ2QO/Work?api_key='+  process.env.REACT_APP_BLOG_API_KEY,
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
      <Box className={classes.section}>
        <Typography variant='h3' >
          Work
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
          <Typography variant='h4' className={classes.company}>{fields.Company},</Typography>
          <Typography varient='h6' className={classes.description}>{fields.Description}</Typography>
        </Box>
        <Box className={classes.subtitle}>
        </Box>

        <Box className={classes.subtext}>
          <Typography varient='h6'>
            {fields.Location}, {fields.Time}
          </Typography>
        </Box>
        <Box className={classes.subtext}>
          <Typography varient='h6'>
            {fields.Position}
          </Typography>
        </Box>
        <Box className={classes.body}>
          <Typography variant='body1'>
              {fields.Info}
          </Typography>
        </Box>
      </div>
    </div>
  );
}