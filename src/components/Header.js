import React, {Component} from 'react';
import { Link , animateScroll as scroll} from 'react-scroll'

import '../assets/css/header.css';

class Header extends Component {
    render() {
        return (
          <header>
            <nav class="menu">
              <ul>
                <li><a onClick={() => scroll.scrollToTop()}>About Me</a></li>
                <li><Link activeClass="active" to="skills_Container" spy={true} smooth={true} duration={600} >Skills</Link></li>
                <li><Link activeClass="active" to="work_Container" spy={true} smooth={true} duration={600} >Work Experiences</Link></li>
                <li><Link activeClass="active" to="project_Container" spy={true} smooth={true} duration={600} >Project</Link></li>
                <li><Link activeClass="active" to="blog_container" spy={true} smooth={true} duration={600} >Blog</Link></li>
                <li><Link activeClass="active" to="contactme_container" spy={true} smooth={true} duration={600} >Contact Me</Link></li>
              </ul>
            </nav>

          </header>
        );
    }
}

export default Header;
