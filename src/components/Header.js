import React, {Component} from 'react';
import '../assets/header.css';
class Header extends Component {
    render() {
        return (
          <header>
            <nav class="menu">
              <ul>
                <li><a href="#about_me_container">About Me</a></li>
                <li><a href="#skills_Container">Skills</a></li>
                <li><a href="#work_Container">Work Experiences</a></li>
                <li><a href="#project_Container">Project</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Contact_Me">Contact Me</a></li>
              </ul>
            </nav>
          </header>
        );
    }
}

export default Header;
