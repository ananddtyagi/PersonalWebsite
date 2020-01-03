import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AboutMe from './aboutme.jsx';
import Education from './education.jsx';
import Work from './work.jsx';
import Projects from './projects.jsx';
import SkillsandHobbies from './skillsandhobbies.jsx';

export default class Main extends Component {

  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route path='/#aboutme'>
              <div className="section" id="aboutme">
                <AboutMe></AboutMe>
              </div>
            </Route>
            <Route path='/education'>
              <div className="section" id="education">
                <Education></Education>
              </div>
            </Route>
            <Route path='/work'>
              <div className="section" id="work">
                <Work></Work>
              </div>
            </Route>
            <Route path='/project'>
              <div className="section" id="projects">
                <Projects></Projects>
              </div>
            </Route>
            <Route path='/skillsandhobbies'>
              <div className="section" id="skillsandhobbies">
                <SkillsandHobbies></SkillsandHobbies>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
