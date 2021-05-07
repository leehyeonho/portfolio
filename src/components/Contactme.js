import React, {Component} from 'react';
import '../assets/css/contactme.css';

class Contactme extends Component {
    render() {
        return (
          <div class="contactme_container" id="contactme_container">
            <div class="contact_me">
            <h1 class="title">
              CONTACT ME
              </h1>
              <div id="content">
              <p>
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

export default Contactme;
