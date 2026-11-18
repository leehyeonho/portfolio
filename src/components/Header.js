import React from 'react';
import { Link } from 'react-scroll';
import { NAV_ITEMS } from '../data/profile';
import '../assets/css/header.css';

function NavList({ className, renderLabel }) {
  return (
    <ul className={className}>
      {NAV_ITEMS.map((item) => (
        <li key={item.to}>
          <Link activeClass="active" to={item.to} spy={true} smooth={true} duration={600}>
            {renderLabel(item)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Header() {
  return (
    <header>
      <nav className="menu">
        <NavList className="big-size-menu" renderLabel={(item) => item.label} />
        <NavList
          className="small-size-menu"
          renderLabel={(item) => <i className={item.icon} aria-label={item.label}></i>}
        />
      </nav>
    </header>
  );
}

export default Header;
