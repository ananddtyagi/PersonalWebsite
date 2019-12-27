import React, { Component } from 'react'
import Prof from ".././images/profilepic.jpg";

export default class Sidebar extends Component {
  render() {

    return (
        <div>
            <div className="sidecontent">

            <img className="profilepic" src={Prof}/>
            <a href="#aboutme" hello>About Me</a>
            <a href="#education" hello>Education</a>
            <a href="#work" hello>Work</a>
            <a href="#projects" hello>Projects</a>
            <a href="#skillsandhobbies" hello>Skills and Hobbies</a>
            <a href="#blog" hello>Blog</a>

          </div>

        </div>
    )

  }
}
