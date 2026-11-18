import React from 'react';
import '../assets/css/aboutme.css';
import AboutmeContent from './AboutmeContent';
import ContactLinks from './ContactLinks';
import { PROFILE } from '../data/profile';

function Aboutme() {
  return (
    <section className="container about_me_container" id="about_me_container">
      <h2 className="about_me">About Me</h2>
      <hr></hr>
      <div className="about_inner">
        <div className="about_me_img" role="img" aria-label={`${PROFILE.name} 프로필 사진`}></div>
        <div className="about_text">
          <p className="about_name">{PROFILE.name}</p>
          <div className="about_intro">
            <AboutmeContent />
          </div>
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
