import React, {Component} from 'react';
import '../assets/css/Certificates.css';

class Certificates extends Component {
    render() {
        return (
          <div className="container Certificates_Container" id="Certificates_Container" name="skills_Container">
            <h1 className="Certificates">Skills</h1>
            <hr className="hr_Certificates"></hr>
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
            <div className="nomad_container">
              <div className="ring">
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
              </div>
            </div>
          </div>
        );
    }
}

export default Certificates;
