import React from 'react';
import '../assets/css/Project.css';

function Project() {
  return (
    <div className="container project_Container" id="project_Container">
      <div className="container_top">
        <h1 className="project_title">Personal Project</h1>
        <hr className="hr_project_experiences"></hr>
      </div>
      <div className="inner_container">
        <button id="project_prev">PREV</button>
        <ul className="project_list">
          <li className="project_card">
            <div className="project_card_top">
              <div className="project_title">포트폴리오 공유 사이트 Pofo</div>
              <div className="project_url"><a href="https://github.com/leehyeonho/kr.ac.jbnu.se.awp.gitplay4" target="_blank" rel="noopener noreferrer">github link</a></div>
              <hr></hr>
            </div>
            <div className="project_card_middle">
              <div className="used">#nodejs</div>
              <div className="used">#mysql</div>
              <div className="content">
                <span>포트폴리오 공유를 위한 커뮤니티 목적</span>
                <span>CRUD, 회원 관리 등</span>
                <span></span>
              </div>
            </div>
            <div className="project_card_bottom">
              <hr></hr>
              <div className="project_company"></div>
              <div className="date">2018.03.01~2018.6.20</div>
            </div>
          </li>
          <li className="project_card">
            <div className="project_card_top">
              <div className="project_title">강의 도움 웹 애플리케이션 Qplz</div>
              <div className="project_url"><a href="https://github.com/leehyeonho/Qplz-2019capstone" target="_blank" rel="noopener noreferrer">github link</a></div>
              <hr></hr>
            </div>
            <div className="project_card_middle">
              <div className="used">#rubyonrails</div>
              <div className="used">#mysql</div>
              <div className="content">
                <span>강사와 청중 간 커뮤니케이션 활성화</span>
                <span>실시간 채팅</span>
                <span>강사별 private room 개설</span>
                <span></span>
              </div>
            </div>
            <div className="project_card_bottom">
            <hr></hr>
              <div className="date">2018.09.10~2018.12.15</div>
            </div>
          </li>
          <li className="project_card">
            <div className="project_card_top">
              <div className="project_title">쇼핑몰 구현</div>
              <div className="project_url"><a href="https://github.com/leehyeonho/jsp_shop" target="_blank" rel="noopener noreferrer">github link</a></div>
              <hr></hr>
            </div>
            <div className="project_card_middle">
              <div className="used">#javajsp</div>
              <div className="used">#oracle</div>
              <div className="content">
                <span>CRUD, 회원 관리, 장바구니</span>
                <span>카카오톡 결제API(test)</span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="project_card_bottom">
            <hr></hr>
              <div className="date">2019.04.15~2020.06.10</div>
            </div>
          </li>
        </ul>
        <button id="project_next">NEXT</button>
      </div>
    </div>
  );}

export default Project;
