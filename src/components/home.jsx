import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import profilepic from ".././images/prof_pic.png";

const useStyles = makeStyles((theme) => ({
  intro: {
    textAlign: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  introContent: {
    textAlign: "left",
    marginRight: "5%",
  },
  profilepic: {
    width: "30vw",
    float: "right",
    height: "auto",
    borderRadius: "25px",
    marginTop: "5%",
    marginRight: "10%",
  },
  text: {
    paddingBottom: "10%",
  },
  mainDescription: {
    fontWeight: "200",
    fontSize: "30px",
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <Grid>
      <Grid container className={classes.intro}>
        <Grid item sm={6}>
          <div className={classes.introContent}>
            <Typography variant="h1" className={classes.text}>
              Hi!
            </Typography>
            <Typography
              className={`${classes.text} ${classes.mainDescription}`}
            >
              I'm Anand. I'm currently software engineer at Flexport. I
              graudated from NYU in 2021 where I studied Computer Science and
              Data Science.
            </Typography>
            <Typography className={classes.mainDescription}>
              You can learn more about me <Link to="aboutme">here</Link>
            </Typography>
            <Typography className={classes.mainDescription}>
              Check out my projects <Link to="projects">here</Link>
            </Typography>
            <Typography className={classes.mainDescription}>
              I also write a <Link to="blog"> blog</Link>!
            </Typography>
          </div>
        </Grid>
        <Grid item sm={6}>
          <img src={profilepic} className={classes.profilepic} />
        </Grid>
      </Grid>
    </Grid>
  );
}
