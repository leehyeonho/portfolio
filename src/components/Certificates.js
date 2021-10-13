import React, {Component} from 'react';
import '../assets/css/Certificates.css';
import java_spring_1 from '../assets/images/Certificates/java-spring-1.jpg';
import java_spring_2 from '../assets/images/Certificates/java-spring-2.jpg';
import java_spring_3 from '../assets/images/Certificates/java-spring-3.jpg';
import css_layout from '../assets/images/Certificates/css-layout.jpg';
import python from '../assets/images/Certificates/python.jpg';
import vanillaJS from '../assets/images/Certificates/vanillaJS.jpg';

class Certificates extends Component {
    render() {
        return (
          <div className="container Certificates_Container" id="Certificates_Container" name="skills_Container">
            <h1 className="Certificates">Certificates</h1>
            <hr className="hr_Certificates"></hr>
            <div className="cert_inner_container">
              <ul className="cert_list">
                <li className="cert_card">
                  <div className="blur">
                  디지털컨버전스 자바기반 응용SW엔지니어링 양성훈련과정
                  </div>
                  <img src={java_spring_1} alt=""></img>
                </li>
                <li className="cert_card">
                  <div className="blur">
                    CSS Layout(flex, grid) / Nomad Coders
                  </div>
                  <img src={css_layout} alt=""></img>
                </li>
                <li className="cert_card">
                  <div className="blur">
                    파이썬(python, flask, beautifulSoup) / Nomad Coders
                  </div>
                  <img src={python} alt=""></img>
                </li>
                <li className="cert_card">
                  <div className="blur">
                    바닐라JS(vanillaJS) / Nomad Coders
                  </div>
                  <img src={vanillaJS} alt=""></img>
                </li>
              </ul>
              
            </div>
            <div className="cert_pagenation">
              <div className="cert_pages">

              </div>
            </div>
          </div>
        );
    }
}

export default Certificates;
