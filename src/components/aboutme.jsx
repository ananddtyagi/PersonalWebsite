import React, { Component } from 'react';
import github from ".././images/github.png";
import linkedin from ".././images/linkedin.png";
import wordpress from ".././images/wordpress.png";
import medium from ".././images/medium.png";

import Grid from '@material-ui/core/Grid';


class Main extends Component {
  render() {

    return (
      <div>
        <div>
          <p className="bio"> Hi! I'm Anand. I'm a Junior at NYU studying Computer Science and Data Science. I have a passion for CS and Entrepreneurship and enjoy working on tough and interesting problems. </p>
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
        <div>
        <h1>Work Experience</h1>
          <div className="header">
            <h2 className="head">Gulaq</h2>
            <h4 className="year">May 2019 - Aug 2019</h4>
          </div>

          <div className="content">
          <div className="desc">
            <h5> Robo-advisory fintech startup focused on India</h5>
          </div>

            <p className="position"> Web Development Intern, Algorithm Research Intern </p>
            <p className="location">Millburn, New Jersey</p>
            <ul>
              <li>Worked alongside the product team in India to create the Survey page using React and Node.js. The survey took financial data from users that would eventually be used to provide personalized investment recommendations.</li>
              <li>Developed an investment algorithm that provided a solution for optimizing the investment of a lump sum of money over multiple funds. I was tasked with choosing which heuristic would be the best to follow as well as what parameters we would be considering. In the end, I wrote a completely new algorithm over the one the company was using previously and was able to provide a better or equal result in 100% of the test cases. As a result, my algorithm is the one currently being used by the company.</li>
            </ul>
          </div>

          <h2 className="head">SK Holdings</h2>

          <h4 className="year">​May 2018 - Aug 2018</h4>
          <div className="content">
          <div className="desc">
            <h5> 3rd largest Korean conglomerate with​ ​$200B+ revenue</h5>
          </div>
            <p className="position"> Research Assistant, Technology Consultant, Internship </p>
            <p className="location">Seoul, South Korea</p>
            <ul>
              <li>Worked alongside the Global Business Development team to research companies for potential investment. This was the first time SK Holdings was investing in foreign companies and as the first foreign hire, my main functions included researching foreign startups for potential investment, helping decide which companies would be worth investing in, and at times, communicating and interviewing companies directly. I also provided assistance in understanding the technological or scientific aspects of the products we reviewed.</li>
            </ul>
          </div>
        </div>
        <div>
          <h1>Skills and Hobbies</h1>
          <ul>
            <li><b>Music​</b>: Performed piano at Lincoln Center and Carnegie Hall. Currently learning the electric guitar and have learned acoustic guitar, violin, most percussive instruments, and harmonica.</li>
            <li><b>Travel​</b>: Traveled to 25 countries both with my family and alone. Awarded the ​prestigious​ ​NSLI-Y government scholarship to study abroad for 6 weeks in Korea to learn Korean.</li>
            <li><b>Languages​</b>: Fluent in English and Hindi. Proficient in Korean. Knowledge of Spanish and Mandarin.</li>
            <li><b>Magic</b>​: Performed magic tricks for 10 years and invited to perform in professional settings numerous times.</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default class AboutMe extends Component {
  render() {

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs>

          </Grid>
          <Grid item xs={8}>
            <Main></Main>
          </Grid>

          <Grid item xs>
          </Grid>
        </Grid>
      </div>
    )
  }
}