import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import profilepic from ".././images/prof_pic.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    width: '100vw',
  },
  header: {
    margin: theme.spacing(5),
    textAlign: 'center',
    width: '100vw',
  },
  intro: {
    textAlign: 'center',
    marginTop: '5%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  introContent: {
    margin: '10%',
    width: '80%',

  },
  profilepic: {
    width: '80%',
    borderRadius: '25px',
  }
}));

export default function Home(props) {
  const classes = useStyles();

  return (    
    <Grid  container>
      <Grid item sm={12} className={classes.header}>
        <Typography variant="h2" align="center">Anand Tyagi</Typography>
      </Grid>
      <Grid container className={classes.intro}>
        <Grid item sm={6}>
          <img src={profilepic} className={classes.profilepic} />
        </Grid>
        <Grid item sm={6}>
          <div  className={classes.introContent}>
            hisdofjsdlkfjldskjflskdjflksdjflksdjlfks flks zdfla sdlkf a;sjkfh ;akjw f;jsd f;ljkasel;fkj asl;kzfh 
            ofjsdlkfjldskjflskdjflksdjflksdjlfks flks zdfla sdlkf a;sjkfh ;akjw f;jsd f;ljkasel;fkj asl;kzfh 
            hisdofjsdlkfjldskjflskdjflksdjflksdjlfks flks zdfla sdlkf a;sjkfh ;akjw f;jsd f;ljkasel;fkj asl;kzfh 
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}