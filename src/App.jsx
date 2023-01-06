import { makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";

const useStyles = makeStyles((theme) => ({
  website: {
    top: "5%",
    bottom: 0,
    left: "5%",
    right: "5%",
  },
}));

export default function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.website}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog" element={<Home />} />
      </Routes>
    </div>
  );
}
