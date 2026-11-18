import React, { useState } from 'react';
import Carousel from './Carousel';
import Lightbox from './Lightbox';
import { CERT_BREAKPOINTS } from './breakpoints';
import { CERTIFICATES } from '../data/certificates';
import '../assets/css/Certificates.css';

function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="container Certificates_Container" id="Certificates_Container">
      <h2 className="Certificates">Certificates</h2>
      <hr></hr>
      <Carousel
        className="cert_inner_container"
        listClassName="cert_list"
        itemClassName="cert_card"
        breakpoints={CERT_BREAKPOINTS}
        step="page"
        controls="pages"
      >
        {CERTIFICATES.map((cert) => (
          <figure className="cert_figure" key={cert.title}>
            <button
              type="button"
              className="cert_open"
              aria-label={`${cert.title} 크게 보기`}
              onClick={() => setSelected(cert)}
            >
              <img src={cert.image} alt={cert.title} loading="lazy"></img>
            </button>
            <figcaption>{cert.title}</figcaption>
          </figure>
        ))}
      </Carousel>
      {selected && <Lightbox image={selected.image} title={selected.title} onClose={() => setSelected(null)} />}
    </section>
  );
}

export default Certificates;
