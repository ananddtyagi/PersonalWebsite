import React, { Component } from 'react'
import Prof from ".././images/profilepic.jpg";

export default class Sidebar extends Component {
  render() {

    return (
        <div>
            <div className="sidecontent">

            <img className="profilepic" src={Prof}/>
            <div className="bio">
              <h3 className="name"> HI! I'M ANAND. </h3>
              <p> I'm a Junior at NYU studying Computer Science and Math. I have a passion for CS and Entrepreneurship and enjoy working on tough and interesting problems. </p>
            </div>
            <div className="currently">
              <p className="title"> Currently I am... </p>
              <ul>
                <li>Listening to...</li>
                <li>Reading...</li>
                <li>Watching...</li>
                <li></li>

              </ul>
            </div>

          </div>

        </div>
    )

  }
}
