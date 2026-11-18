import React from 'react';
import Carousel from './Carousel';
import Card from './Card';
import { CARD_BREAKPOINTS } from './breakpoints';
import { PROJECTS } from '../data/projects';

function Project() {
  return (
    <section className="container project_Container" id="project_Container">
      <h2 className="project_title">Personal Project</h2>
      <hr></hr>
      <Carousel className="card_carousel" listClassName="card_list" itemClassName="card"
        breakpoints={CARD_BREAKPOINTS} gap={30}>
        {PROJECTS.map((project) => (
          <Card key={project.title} urlLabel="GitHub에서 보기" {...project} />
        ))}
      </Carousel>
    </section>
  );
}

export default Project;
