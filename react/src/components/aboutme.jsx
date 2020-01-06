import React, { Component } from 'react';
import github from ".././images/github.png";
import linkedin from ".././images/linkedin.png";
import wordpress from ".././images/wordpress.png";
import medium from ".././images/medium.png";


export default class AboutMe extends Component {
  render() {

    return (
      <div>
        <h1 className="name">ANAND TYAGI</h1>
        <p className="bio"> Hi! I'm Anand. I'm a Junior at NYU studying Computer Science and Math. I have a passion for CS and Entrepreneurship and enjoy working on tough and interesting problems. </p>
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


      </div>
    )
  }
}
