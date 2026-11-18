import React from 'react';
import Carousel from './Carousel';
import Card from './Card';
import { CARD_BREAKPOINTS } from './breakpoints';
import { WORKS } from '../data/work';

function Work() {
  return (
    <section className="container work_Container" id="work_Container">
      <h2 className="work_experiences">Work Experiences</h2>
      <hr></hr>
      <Carousel className="card_carousel" listClassName="card_list" itemClassName="card"
        breakpoints={CARD_BREAKPOINTS} gap={30}>
        {WORKS.map((work) => (
          <Card key={work.title} {...work} />
        ))}
      </Carousel>
    </section>
  );
}

export default Work;
