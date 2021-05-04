import React, {Component} from 'react';
import '../assets/aboutme.css';

class Aboutme extends Component {
    render() {
        return (
          <div class="about_me_container" id="about_me_container">
            <div class="about_me">
            <h1 class="name">이 현호</h1>
              <p id="content">
                열정적으로 배우고 진지하게 코딩하는 사람.
              </p>
              <p id="content">
                보다 나은 풀스택 개발자를 향해 열심히 배우고 노력합니다.
              </p>
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
