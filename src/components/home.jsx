import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import React from "react";

import profilepic from ".././images/prof_pic.png";
import github from ".././images/github.png";
import linkedin from ".././images/icons8-linkedin-50.png";
import medium from ".././images/icons8-medium-50.png";
import resume from ".././images/icons8-resume-50.png";

const useStyles = makeStyles((theme) => ({
  intro: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
      justifyContent: "center",
      textAlign: "center",
      paddingLeft: "5%",
      paddingRight: "5%",
      widht: "max-context",
    },
  },
  introContent: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "left",
      margin: "10%",
    },
  },
  profilepic: {
    [theme.breakpoints.up("xs")]: {
      float: "right",
      width: "30vw",
      height: "auto",
      borderRadius: "25px",
      margin: "10%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  text: {
    [theme.breakpoints.up("xs")]: {
      paddingBottom: "10%",
      fontSize: "70px",
      fontWeight: "200",
    },
  },
  mainDescription: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "25px",
      fontWeight: "200",
    },
  },
  icons: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "left",
      marginLeft: "9%",
    },
  },
  icon: {
    [theme.breakpoints.up("xs")]: {
      paddingRight: "5%",
    },
  },
}));

export default function Home(props) {
  const styles = useStyles();

  return (
    <Grid>
      <Grid container className={styles.intro}>
        <Grid item xs={12} sm={6}>
          <div className={styles.introContent}>
            <Typography className={styles.text}>Hi! I'm Anand.</Typography>
            <Typography
              className={`${styles.text} ${styles.mainDescription}`}
            >
              I'm currently a Software Engineer II at Flexport. I graudated from NYU
              in 2021 where I studied Computer Science and Data Science.
            </Typography>
          </div>

          <Box className={styles.icons}>
            <a
              href="content/AnandTyagiResume.pdf"
              download
              className={styles.icon}
            >
              <img className="icon" src={resume} />
            </a>
            <a
              target="_blank"
              href="https://github.com/ananddtyagi"
              className={styles.icon}
            >
              <img className="icon" src={github} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ananddtyagi/"
              className={styles.icon}
            >
              <img className="icon" src={linkedin} />
            </a>
            <a
              target="_blank"
              href="https://medium.com/@anandtyagi"
              className={styles.icon}
            >
              <img className="icon" src={medium} />
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={profilepic} className={styles.profilepic} />
        </Grid>
      </Grid>
    </Grid>
  );
}
