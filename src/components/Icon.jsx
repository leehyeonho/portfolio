import React from 'react';
import '../assets/css/Icon.css';

/**
 * Font Awesome 아이콘 정의(@fortawesome/free-*-svg-icons)를 SVG로 렌더링한다.
 * 사용하는 아이콘만 번들에 포함되며 폰트/외부 스크립트를 로드하지 않는다.
 */
function Icon({ icon, className = '' }) {
  const [width, height, , , path] = icon.icon;
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox={`0 0 ${width} ${height}`}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  );
}

export default Icon;
