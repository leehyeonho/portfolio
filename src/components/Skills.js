import React, {Component} from 'react';
import '../assets/css/Skills.css';
import rails from '../assets/images/rails.png'
import jquery_icon from '../assets/images/jquery.gif'
import python_icon from '../assets/images/python.png'
import mysql_icon from '../assets/images/mysql.png'

class Skills extends Component {
    render() {
        return (
          <div className="container skills_Container" id="skills_Container" name="skills_Container">
            <h1 className="skills">Skills</h1>
            <hr className="hr_skills"></hr>
            <ul>
              <li><i className="fa fa-html5 fa-3x" ></i><p>HTML5</p></li>
              <li><i className="fab fa-css3-alt fa-3x" ></i><p>CSS3</p></li>
              <li><i className="fab fa-js fa-3x" ></i><p>JS</p></li>
              <li><i className="fab fa-react fa-3x" ></i><p>REACTJS</p></li>
              <li><i className="fab fa-node fa-3x" ></i><p>NODEJS</p></li>
              <li><i className="fab fa-java fa-3x" ></i><p>JAVA</p></li>
              <li>
                <div className="img_crop">
                  <img src={rails} alt=""></img><p>RUBY ON RAILS</p>
                </div>
              </li>
              <li>
                <div className="img_crop">
                  <img src={jquery_icon} alt=""></img><p>jquery</p>
                </div>
              </li>
              <li>
                <div className="img_crop">
                  <img src={python_icon} alt=""></img><p>python</p>
                </div>
              </li>
              <li>
                <div className="img_crop">
                  <img src={mysql_icon} alt=""></img><p>python</p>
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
