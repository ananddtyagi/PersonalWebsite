import React, { Component } from 'react'
import Prof from ".././images/profilepic.jpg";

export default class Sidebar extends Component {
  render() {

    return (
        <div>
          <div class="sidebar">
            <div className="sidecontent">

            <img className="profilepic" src={Prof}/>
            
              <a href="#">Education</a>
              <a href="#">Work Experience</a>
              <a href="#">Projects</a>
              <a href="#">Skills</a>
              <a href="#">Hobbies and Interests</a>

            </div>
          </div>

        </div>
    )

  }
}
