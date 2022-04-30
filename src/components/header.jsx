import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "static",
    color: "black",
    backgroundColor: "white",
    verticalAlign: "middle",
    display: "flex",
  },
  toolbar: {
    padding: 0,
  },
  name: {
    marginRight: "auto",
  },
  pages: {
    marginLeft: "auto",
  },
  pageLinks: {
    direction: "row",
    alignItems: "center",
    color: "black",
    textDecoration: "none",
  },
  pageLink: {
    textDecoration: "none",
    fontWeight: "100",
    fontSize: "20px",
    color: "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  homeLink: {
    textDecoration: "none",
    fontWeight: "100",
    fontSize: "30px",
    color: "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.header} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.name}>
            <Typography className={classes.homeLink} component={Link} to="/">
              Anand Tyagi
            </Typography>
          </div>
          <div className={classes.pages}>
            <Grid className={classes.pageLinks} container spacing={6}>
              <Grid item>
                <Typography
                  className={classes.pageLink}
                  component={Link}
                  to="aboutme"
                >
                  About me
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.pageLink}
                  component={Link}
                  to="projects"
                >
                  Projects
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.pageLink}
                  component={Link}
                  to="blog"
                >
                  Blog
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
