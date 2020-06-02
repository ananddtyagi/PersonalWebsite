import React, { Component } from 'react';

export default class Education extends Component {
  render() {

    return (
      <div>
        <h1>Education</h1>
        <h2 className="head">New York University</h2>
        <h4 className="year">2017-2021</h4>
        <div className="content">
          <p className="degree">B.A. Computer Science and Mathematics</p>
          <p className="location">New York, NY, USA</p>
          <ul>
            <li>Introduction to Machine Learning, Computer Graphics, Algorithms, Data Structures, Operating Systems, Bio-Inspired Robotics, Linear Algebra, Probability and Statistics, Honors Multivariable Calculus</li>
          </ul>
        </div>
      </div>
    )
  }
}
