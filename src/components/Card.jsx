import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import '../assets/css/Card.css';

/**
 * 경력/프로젝트 카드 내용 (Carousel의 li 안에 렌더링된다)
 *
 * @param {string} image 선택. 프로젝트 스크린샷/썸네일
 * @param {string} urlLabel 링크 문구 (기본값: 자세히 보기)
 */
function Card({ title, url, urlLabel = '자세히 보기', tags, details, company, period, image }) {
  return (
    <>
      {image && <img className="card_thumb" src={image} alt={`${title} 화면`} loading="lazy" />}
      <div className="card_body">
        <h3 className="card_title">{title}</h3>
        {url && (
          <a className="card_link" href={url} target="_blank" rel="noopener noreferrer">
            {urlLabel}
            <Icon icon={faArrowUpRightFromSquare} />
            <span className="sr-only"> (새 창)</span>
          </a>
        )}
        <div className="card_tags">
          {tags.map((tag) => (
            <span className="card_tag" key={tag}>{tag}</span>
          ))}
        </div>
        <ul className="card_details">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className="card_footer">
        {company && <div className="card_company">{company}</div>}
        <div className="card_period">{period}</div>
      </div>
    </>
  );
}

export default Card;
