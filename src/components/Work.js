import React from 'react';
import '../assets/css/Work.css';

function Work() {
  return (
    <div className="container work_Container" id="work_Container">
      <div className="container_top">
        <h1 className="work_experiences">Work Experiences</h1>
        <hr className="hr_work_experiences"></hr>
      </div>
      <div className="inner_container">
        <button id="work_prev">PREV</button>
        <ul className="work_list">
          <li className="work_card">
            <div className="work_card_top">
              <div className="work_title">연구실 홈페이지 제작 및 유지보수</div>
              <div className="work_url"><a href="http://genesys.chungbuk.ac.kr">http://genesys.chungbuk.ac.kr</a></div>
              <hr></hr>
            </div>
            <div className="work_card_middle">
              <div className="used">#nodejs</div>
              <div className="used">#centos7</div>
              <div className="used">#mariadb</div>
              <div className="content">
                <span>학교 측 서버 호스트 이용</span>
                <span>학교 측 관리자 전용 페이지 개발</span>
                <span></span>
              </div>
            </div>
            <div className="work_card_bottom">
              <hr></hr>
              <div className="work_company">충북대학교 그린엔진 및 에너지 시스템 연구실</div>
              <div className="date">2020.04.08~2021.02.01</div>
            </div>
          </li>
          <li className="work_card">
            <div className="work_card_top">
              <div className="work_title">회사 홈페이지 제작 및 유지보수</div>
              <div className="work_url"><a href="http://customlab.site" target="_blank" rel="noopener noreferrer">http://customlab.site</a></div>
              <hr></hr>
            </div>
            <div className="work_card_middle">
              <div className="used">#nodejs</div>
              <div className="used">#mysql</div>
              <div className="content">
                <span>네이버스토어 상품 목록 스크래핑</span>
                <span>CRUD, 회원 관리</span>
                <span>카카오톡/네이버 로그인</span>
                <span></span>
              </div>
            </div>
            <div className="work_card_bottom">
            <hr></hr>
              <div className="work_company">커스텀랩(customlab)</div>
              <div className="date">2020.08.25~2012.02.01</div>
            </div>
          </li>
        </ul>
        <button id="work_next">NEXT</button>
      </div>
    </div>
  );}

export default Work;
