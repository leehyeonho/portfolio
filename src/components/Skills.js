import React from 'react';
import '../assets/css/Skills.css';
import Icon from './Icon';
import { SKILLS } from '../data/skills';

function Skills() {
  return (
    <div className="container skills_Container" id="skills_Container">
      <h1 className="skills">Skills</h1>
      <hr className="hr_skills"></hr>
      <ul>
        {SKILLS.map(({ name, icon, image }) => (
          <li key={name}>
            {icon ? (
              <>
                <Icon icon={icon} className="icon-3x" />
                <p>{name}</p>
              </>
            ) : (
              <div className="img_crop">
                <img src={image} alt=""></img>
                <p>{name}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
