import React from 'react';
import '../assets/css/aboutme.css';
import AboutmeContent from './AboutmeContent';
import Icon from './Icon';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { PROFILE } from '../data/profile';

function Aboutme() {
  return (
    <section className="container about_me_container" id="about_me_container">
      <div className="container_top">
        <h2 className="about_me">About Me</h2>
        <hr className="hr_about_me"></hr>
      </div>
      <div className="inner_container">
        <div className="about_me_img" role="img" aria-label="이현호 프로필 사진">
        </div>
        <div className="about_me">
          <span className="name">
            {PROFILE.name}
          </span>
          <div id="content">
            <AboutmeContent />
          </div>
          <div className="contact_me">
            <div className="sns_tag">
              <a className="github" href={PROFILE.github} aria-label="GitHub"><Icon icon={faGithub} /></a>
              <a className="google" href={`mailto:${PROFILE.email}`} aria-label="Email"><Icon icon={faGoogle} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
