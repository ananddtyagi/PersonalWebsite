import React, { Component } from 'react'
import Prof from ".././images/profilepic.jpg";

export default class Sidebar extends Component {
  render() {

    return (
        <div>
            <div className="sidecontent">

            <img className="profilepic" src={Prof}/>
            <a href="#aboutme">About Me</a>
            <a href="#education">Education</a>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#skillsandhobbies">Skills and Hobbies</a>


          </div>

        </div>
    )

  }
}
