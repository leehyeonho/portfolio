import React from 'react';
import Carousel from './Carousel';
import { CARD_BREAKPOINTS } from './breakpoints';
import { PROJECTS } from '../data/projects';
import '../assets/css/Project.css';

function Project() {
  return (
    <div className="container project_Container" id="project_Container">
      <div className="container_top">
        <h1 className="project_title">Personal Project</h1>
        <hr className="hr_project_experiences"></hr>
      </div>
      <Carousel className="inner_container" listClassName="project_list" itemClassName="project_card"
        breakpoints={CARD_BREAKPOINTS} gap={30}>
        {PROJECTS.map((project) => (
          <React.Fragment key={project.title}>
            <div className="project_card_top">
              <div className="project_title">{project.title}</div>
              <div className="project_url">
                <a href={project.url} target="_blank" rel="noopener noreferrer">github link</a>
              </div>
              <hr></hr>
            </div>
            <div className="project_card_middle">
              {project.tags.map((tag) => <div className="used" key={tag}>#{tag}</div>)}
              <div className="content">
                {project.details.map((detail) => <span key={detail}>{detail}</span>)}
              </div>
            </div>
            <div className="project_card_bottom">
              <hr></hr>
              <div className="date">{project.period}</div>
            </div>
          </React.Fragment>
        ))}
      </Carousel>
    </div>
  );
}

export default Project;
