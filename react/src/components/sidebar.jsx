import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Prof from ".././images/profilepic.jpg";

export default class Sidebar extends Component {
  render() {

    return (
      <Router>
        <div>
            <div className="sidecontent">

            <NavLink to="/"><img className="profilepic" src={Prof}/></NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skillsandhobbies">Skills and Hobbies</NavLink>


          </div>

        </div>
      </Router>
    )

  }
}
