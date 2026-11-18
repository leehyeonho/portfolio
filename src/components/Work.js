import React from 'react';
import Carousel from './Carousel';
import { CARD_BREAKPOINTS } from './breakpoints';
import { WORKS } from '../data/work';
import '../assets/css/Work.css';

function Work() {
  return (
    <section className="container work_Container" id="work_Container">
      <div className="container_top">
        <h2 className="work_experiences">Work Experiences</h2>
        <hr className="hr_work_experiences"></hr>
      </div>
      <Carousel className="inner_container" listClassName="work_list" itemClassName="work_card"
        breakpoints={CARD_BREAKPOINTS} gap={30}>
        {WORKS.map((work) => (
          <React.Fragment key={work.title}>
            <div className="work_card_top">
              <div className="work_title">{work.title}</div>
              <div className="work_url">
                <a href={work.url} target="_blank" rel="noopener noreferrer">{work.urlLabel}</a>
              </div>
              <hr></hr>
            </div>
            <div className="work_card_middle">
              {work.tags.map((tag) => <div className="used" key={tag}>#{tag}</div>)}
              <div className="content">
                {work.details.map((detail) => <span key={detail}>{detail}</span>)}
              </div>
            </div>
            <div className="work_card_bottom">
              <hr></hr>
              <div className="work_company">{work.company}</div>
              <div className="date">{work.period}</div>
            </div>
          </React.Fragment>
        ))}
      </Carousel>
    </section>
  );
}

export default Work;
