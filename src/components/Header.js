import React, {Component} from 'react';
import { Link } from 'react-scroll'
import '../assets/css/header.css';

class Header extends Component {
    render() {
        return (
          <header>
            <nav className="menu">
              <ul className="big-size-menu">
                <li>
                  <Link activeClass="active" to="about_me_container" 
                  spy={true} smooth={true} duration={600}>About Me</Link>
                </li>
                <li>
                  <Link activeClass="active" to="skills_Container" 
                  spy={true} smooth={true} duration={600}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="work_Container"
                  spy={true} smooth={true} duration={600}>
                    Work Experiences
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="project_Container"
                  spy={true} smooth={true} duration={600}>
                    Project
                  </Link>
                </li>
              </ul>
              <ul className="small-size-menu">
                <li>
                  <Link activeClass="active" to="about_me_container" 
                  spy={true} smooth={true} duration={600}>
                    <i className="fas fa-id-card"></i>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="skills_Container"
                  spy={true} smooth={true} duration={600}>
                    <i className="fas fa-code"></i>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="work_Container"
                  spy={true} smooth={true} duration={600}>
                    <i className="fas fa-laptop-code"></i>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="project_Container"
                  spy={true} smooth={true} duration={600}>
                    <i className="fas fa-chalkboard-teacher"></i>
                  </Link>
                </li>
              </ul>

            </nav>

          </header>
        );
    }
}

export default Header;
