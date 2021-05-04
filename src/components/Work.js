import React, {Component} from 'react';
import '../assets/Work.css';
class Work extends Component {
    render() {
        return (
          <div class="work_Container" id="work_Container">
            <h1 class="work">Work Experiences</h1>
            <hr class="hr_work"></hr>
            <div class="work_card_container">
              <div class="work_card">
                <div class="work_banner">
                  <div class="work_blurred">
                  </div>
                  <div class="work_title">
                  <p class="title">연구실 홈페이지 제작 및 유지보수</p>
                  </div>
                </div>
                <div class="work_text">

                  <p class="company">충북대학교 그린엔진 및 에너지 시스템 연구실</p>
                  <p class="used">#nodejs</p>
                  <p class="date">2020.04.08~</p>
                </div>
              </div>
              <div class="work_card">
                <div class="work_banner">
                  <div class="work_blurred">
                  </div>
                  <div class="work_title">
                  <p class="title">customlab 회사 홈페이지 제작 및 유지보수</p>
                  </div>
                </div>
                <div class="work_text">
                  <p class="company">커스텀랩(customlab)</p>
                  <p class="used">#nodejs</p>
                  <p class="date">2020.08.25~</p>
                </div>
              </div>
              <div class="work_card">
                <div class="work_banner">
                  <div class="work_blurred">
                  </div>
                  <div class="work_title">
                  <p class="title">강의 도움 웹 애플리케이션</p>
                  </div>
                </div>
                <div class="work_text">
                  <p class="company">전북대학교 캡스톤프로젝트</p>
                  <p class="used">#rubyonrails</p>
                  <p class="date">2019.04.15~2020.06.10</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Work;
