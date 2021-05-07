import React, {Component} from 'react';
import '../assets/css/Skills.css';
import rails from '../assets/images/rails.png'
class Skills extends Component {
    render() {
        return (
          <div class="skills_Container" id="skills_Container" name="skills_Container">
            <h1 class="skills">Skills</h1>
            <hr class="hr_skills"></hr>
            <ul>
              <li><i class="fa fa-html5 fa-3x" ></i><p>HTML5</p></li>
              <li><i class="fab fa-css3-alt fa-3x" ></i><p>CSS3</p></li>
              <li><i class="fab fa-js fa-3x" ></i><p>JS</p></li>
              <br></br>
              <li><i class="fab fa-react fa-3x" ></i><p>REACTJS</p></li>
              <li><i class="fab fa-node fa-3x" ></i><p>NODEJS</p></li>
              <li><i class="fab fa-java fa-3x" ></i><p>JAVA</p></li>
              <li>
                <div class="img_crop">
                  <img src={rails} alt=""></img><p>RUBY ON RAILS</p>
                </div>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        );
    }
}

export default Skills;
