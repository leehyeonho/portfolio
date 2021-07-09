import React, {Component} from 'react';
import '../assets/css/aboutme.css';
import AboutmeContent from '../components/AboutmeContent'

class Aboutme extends Component {
    render() {
        return (
          <div className="container about_me_container" id="about_me_container">
            <div className="container_top">
              <h1 className="about_me">About Me</h1>
              <hr className="hr_about_me"></hr>
            </div>
            <div className="inner_container">
              <div className="about_me_img">
              </div>
              <div className="about_me">
              <span className="name">
                이 현호
                </span>
                <div id="content">
                  <AboutmeContent />
                </div>
                <div className="contact_me">
                  <div className="sns_tag">
                  <a className="github" href="https://github.com/leehyeonho"><i className="fa fa-github fa-5x" ></i></a>
                  <a className="google" href="mailto:dlgusgh0812@gmail.com"><i className="fa fa-google fa-3x" ></i></a>
                </div>
                </div>
              </div>
            </div>
          </div>

        );
    }
}

export default Aboutme;
