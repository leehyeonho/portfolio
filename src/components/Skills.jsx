import React from 'react';
import '../assets/css/Skills.css';
import Icon from './Icon';
import { SKILLS } from '../data/skills';

function Skills() {
  return (
    <section className="container skills_Container" id="skills_Container">
      <h2 className="skills">Skills</h2>
      <hr></hr>
      <ul className="skills_list">
        {SKILLS.map(({ name, icon, image }) => (
          <li className="skill" key={name}>
            <div className="skill_icon">
              {icon ? <Icon icon={icon} /> : <img src={image} alt="" loading="lazy"></img>}
            </div>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
