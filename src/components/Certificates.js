import React from 'react';
import Carousel from './Carousel';
import { CERT_BREAKPOINTS } from './breakpoints';
import '../assets/css/Certificates.css';
import { CERTIFICATES } from '../data/certificates';

function Certificates() {
  return (
    <section className="container Certificates_Container" id="Certificates_Container">
      <h2 className="Certificates">Certificates</h2>
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
            <img src={image} alt={title} loading="lazy"></img>
          </React.Fragment>
        ))}
      </Carousel>
    </section>
  );
}

export default Certificates;
