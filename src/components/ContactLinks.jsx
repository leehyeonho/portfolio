import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import { PROFILE } from '../data/profile';
import '../assets/css/ContactLinks.css';

/** 이메일, GitHub, (설정된 경우) 이력서 링크 */
function ContactLinks({ className = '' }) {
  return (
    <div className={`contact_links ${className}`.trim()}>
      <a className="contact_link primary" href={`mailto:${PROFILE.email}`}>
        <Icon icon={faEnvelope} />
        이메일
      </a>
      <a className="contact_link" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
        <Icon icon={faGithub} />
        GitHub
        <span className="sr-only"> (새 창)</span>
      </a>
      {PROFILE.resume && (
        <a
          className="contact_link"
          href={`${import.meta.env.BASE_URL}${PROFILE.resume}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faFileLines} />
          이력서
          <span className="sr-only"> (새 창)</span>
        </a>
      )}
    </div>
  );
}

export default ContactLinks;
