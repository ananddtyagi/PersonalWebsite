import React, { Component } from 'react';

import AboutMe from './aboutme.jsx';
import Education from './education.jsx';
import Work from './work.jsx';
import Projects from './projects.jsx';
import SkillsandHobbies from './skillsandhobbies.jsx';

export default class Main extends Component {
  render() {

    return (
      <div>
        <section className="section" id="aboutme">
          <AboutMe></AboutMe>
        </section >
        <section className="section" id="education">
          <Education></Education>
        </section>
        <section className="section" id="work">
          <Work></Work>
        </section>
        <div className="section" id="projects">
          <Projects></Projects>
        </div>
        <div className="section" id="skillsandhobbies">
          <SkillsandHobbies></SkillsandHobbies>
        </div>
      </div>
    )
  }
}
