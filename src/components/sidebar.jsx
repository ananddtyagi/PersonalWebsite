import React, { Component, useState, useEffect }from 'react'
import github from ".././images/github.png";
import linkedin from ".././images/linkedin.png";
import wordpress from ".././images/wordpress.png";
import medium from ".././images/medium.png";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    position: 'sticky',
  }

}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <ul>
      <a target="_blank" href="https://github.com/ananddtyagi">
        <img className="icon" src={github}/>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/ananddtyagi/">
        <img className="icon" src={linkedin}/>
      </a>
      <a target="_blank" href="https://adtyagi.wordpress.com/">
        <img className="icon" src={wordpress}/>
      </a>
      <a target="_blank" href="https://medium.com/@anandtyagi">
        <img className="icon" src={medium}/>
      </a>
    </ul>
    </div>
  )
}

