import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Prof from ".././images/profilepic.jpg";

export default class Sidebar extends Component {

  render() {

    return (
      <Router>
        <div>
            <div className="sidecontent">
              <a href="/"><img className="profilepic" src={Prof}/></a>
              <a href="/#aboutme">About Me</a>
              <a href="/#education">Education</a>
              <a href="/#work">Work</a>
              <a href="/#projects">Projects</a>
              <a href="/#skillsandhobbies">Skills and Hobbies</a>
            </div>

        </div>
      </Router>
    )

  }
}
