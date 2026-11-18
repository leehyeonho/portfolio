import React from 'react';
import { Link } from 'react-scroll';
import { NAV_ITEMS } from '../data/profile';
import Icon from './Icon';
import '../assets/css/header.css';

function NavList({ className, iconOnly }) {
  return (
    <ul className={className}>
      {NAV_ITEMS.map((item) => (
        <li key={item.to}>
          <Link activeClass="active" to={item.to} spy={true} smooth={true} duration={600}
            aria-label={iconOnly ? item.label : undefined}>
            {iconOnly ? <Icon icon={item.icon} /> : item.label}
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
        <NavList className="big-size-menu" />
        <NavList className="small-size-menu" iconOnly />
      </nav>
    </header>
  );
}

export default Header;
