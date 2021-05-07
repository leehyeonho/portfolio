import React, {Component} from 'react';
import '../assets/css/Project.css';
class Project extends Component {
    render() {
        return (
          <div class="project_Container" id="project_Container">
            <h1 class="project">Project</h1>
            <hr class="hr_project"></hr>
            <div class="project_card_container">
              <div class="project_card">
                <div class="project_banner">
                  <div class="project_blurred">
                  </div>
                  <div class="project_title">
                  <p class="title">쇼핑몰 구현</p>
                  </div>
                </div>
                <div class="project_text">

                  <p class="content">로그인/장바구니/결제 등 쇼핑몰 구현</p>
                  <p class="used">#jsp</p>
                  <p class="date">2018.03.01~2018.6.20</p>
                </div>
              </div>
              <div class="project_card">
                <div class="project_banner">
                  <div class="project_blurred">
                  </div>
                  <div class="project_title">
                  <p class="title">포트폴리오 공유 사이트</p>
                  </div>
                </div>
                <div class="project_text">
                  <p class="content">사용자들이 작성한 포트폴리오를 공유하고, 서로 평가하여 보완할 수 있는 사이트</p>
                  <p class="used">#jsp</p>
                  <p class="date">2018.09.10~2018.12.15</p>
                </div>
              </div>
              <div class="project_card">
                <div class="project_banner">
                  <div class="project_blurred">
                  </div>
                  <div class="project_title">
                  <p class="title">강의 도움 웹 애플리케이션</p>
                  </div>
                </div>
                <div class="project_text">
                  <p class="content">전북대학교 캡스톤프로젝트</p>
                  <p class="used">#rubyonrails</p>
                  <p class="date">2019.04.15~2020.06.10</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Project;
