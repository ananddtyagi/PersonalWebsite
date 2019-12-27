import React, { Component } from 'react'

export default class Projects extends Component {
  render() {

    return (
      <div>
        <h1>Projects</h1>
        <h2 className="head">New York University</h2>
        <h4 className="year">Nov 2018 - Now</h4>
        <div className="content">
          <ul>
            <li>This application translates non-English phrases into English idioms. I compiled a database of idioms by crawling through any idiom databases I could find and created a way to perform a backwards lookup in order to find idioms based on their definitions. The project aimed to help people learn idioms in other languages in order to help them speak more naturally in that language. I used React, Express.js, and Python to code this website.</li>
          </ul>
        </div>

        <h2 className="head">Heart2Heart</h2>
        <h4 className="year">​Oct 2017 (72 hours)</h4>
        <div className="content">
          <p>NYU Healthcare Makerthon, Finalist Winner</p>
          <ul>
            <li>My team of five people created a product that is able to detect two heart diseases by analyzing raw data from a 12-lead ECG. With the help of the two health professionals on the team, I was tasked with creating the product using MATLAB. I was also one of two presenters during our pitch. In the end, we advanced to the next round as one of the finalists.</li>
          </ul>
        </div>

        <h2 className="head">Atomic Tango</h2>
        <h4 className="year">Aug - Dec 2017</h4>
        <div className="content">
          <ul>
            <li>Working under Professor Dennis Shasha, I wrote an application in Java which takes a dancer’s current tango position and
provides suggestions on which positions to pursue next. After being taught a little bit about the Tango, I learned that dancers often resort to usual patterns when creating dance routines and so this project aimed to help dancers discover new, potentially unperformed, dance routines.</li>
          </ul>
        </div>
      </div>
    )
  }
}
