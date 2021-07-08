import React, {Component} from 'react';
import { Link , animateScroll as scroll} from 'react-scroll'
import '../assets/css/header.css';

class Header extends Component {
    render() {
        return (
          <header>
            <nav class="menu">
              <ul class="big-size-menu">
                <li><a onClick={() => scroll.scrollToTop()}>About Me</a></li>
                <li><Link activeClass="active" to="skills_Container" spy={true} smooth={true} duration={600} >Skills</Link></li>
                <li><Link activeClass="active" to="work_Container" spy={true} smooth={true} duration={600} >Work Experiences</Link></li>
                <li><Link activeClass="active" to="project_Container" spy={true} smooth={true} duration={600} >Project</Link></li>
              </ul>
              <ul class="small-size-menu">
                <li>
                  <a onClick={() => scroll.scrollToTop()}>
                    <i class="fas fa-id-card"></i>
                  </a>
                </li>
                <li>
                  <Link activeClass="active" to="skills_Container"
                  spy={true} smooth={true} duration={600}>
                    <i class="fas fa-code"></i>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="work_Container"
                  spy={true} smooth={true} duration={600}>
                    <i class="fas fa-laptop-code"></i>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="project_Container"
                  spy={true} smooth={true} duration={600}>
                    <i class="fas fa-chalkboard-teacher"></i>
                  </Link>
                </li>
              </ul>

            </nav>

          </header>
        );
    }
}

export default Header;
