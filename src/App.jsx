import { makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutme";
import Blog from "./components/blog";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";

const useStyles = makeStyles((theme) => ({
  website: {
    padding: "5%",
  },
}));

export default function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.website}>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}
