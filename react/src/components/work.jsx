import React, { Component } from 'react'

export default class Work extends Component {
  render() {

    return (
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
    )
  }
}
