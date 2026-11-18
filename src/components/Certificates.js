import React from 'react';
import Carousel from './Carousel';
import { CERT_BREAKPOINTS } from './breakpoints';
import '../assets/css/Certificates.css';
import { CERTIFICATES } from '../data/certificates';

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
