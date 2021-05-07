import React, {Component} from 'react';
import '../assets/css/aboutme.css';
import AboutmeContent from '../components/AboutmeContent'

class Aboutme extends Component {
    render() {
        return (
          <div class="about_me_container" id="about_me_container">
            <div class="about_me">
            <h1 class="name">
              이 현호
              </h1>
              <div id="content">
              <p>
                <AboutmeContent />
              </p>
              </div>
              <div class="sns_tag">
                <a class="github" href="https://github.com/leehyeonho"><i class="fa fa-github fa-3x" ></i></a>
                <a class="google" href="mailto:dlgusgh0812@gmail.com"><i class="fa fa-google fa-3x" ></i></a>

              </div>
            </div>
          </div>

        );
    }
}

export default Aboutme;
