import React from 'react';
import Carousel from './Carousel';
import { CERT_BREAKPOINTS } from './breakpoints';
import '../assets/css/Certificates.css';
import java_spring from '../assets/images/Certificates/java-spring-1.jpg';
import css_layout from '../assets/images/Certificates/css-layout.jpg';
import python from '../assets/images/Certificates/python.jpg';
import vanillaJS from '../assets/images/Certificates/vanillaJS.jpg';

const CERTIFICATES = [
  { title: '디지털컨버전스 자바기반 응용SW엔지니어링 양성훈련과정', image: java_spring },
  { title: 'CSS Layout(flex, grid) / Nomad Coders', image: css_layout },
  { title: '파이썬(python, flask, beautifulSoup) / Nomad Coders', image: python },
  { title: '바닐라JS(vanillaJS) / Nomad Coders', image: vanillaJS },
];

function Certificates() {
  return (
    <div className="container Certificates_Container" id="Certificates_Container">
      <h1 className="Certificates">Certificates</h1>
      <hr className="hr_Certificates"></hr>
      <Carousel
        className="cert_inner_container"
        listClassName="cert_list"
        itemClassName="cert_card"
        breakpoints={CERT_BREAKPOINTS}
        step="page"
        controls="pages"
      >
        {CERTIFICATES.map(({ title, image }) => (
          <React.Fragment key={title}>
            <div className="blur">{title}</div>
            <img src={image} alt={title}></img>
          </React.Fragment>
        ))}
      </Carousel>
    </div>
  );
}

export default Certificates;
