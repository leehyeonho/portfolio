import React from 'react';
import ContactLinks from './ContactLinks';
import { PROFILE } from '../data/profile';
import '../assets/css/Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <h2 className="footer_title">Contact</h2>
      <p className="footer_message">함께 일하고 싶으시다면 편하게 연락 주세요.</p>
      <ContactLinks className="footer_links" />
      <small className="footer_copy">© {new Date().getFullYear()} {PROFILE.name}</small>
    </footer>
  );
}

export default Footer;
