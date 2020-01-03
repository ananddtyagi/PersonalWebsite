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

            <Link to="/"><img className="profilepic" src={Prof}/></Link>
            <Link to="#aboutme">About Me</Link>
            <Link to="#education">Education</Link>
            <Link to="#work">Work</Link>
            <Link to="#projects">Projects</Link>
            <Link to="#skillsandhobbies">Skills and Hobbies</Link>


          </div>

        </div>
      </Router>
    )

  }
}
