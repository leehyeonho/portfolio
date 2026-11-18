import React, { useEffect, useRef, useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import '../assets/css/Carousel.css';

const SWIPE_THRESHOLD = 40; // 스와이프로 인정하는 최소 이동 거리(px)

/**
 * 반응형 캐러셀
 *
 * @param {Array<[number, number]>} breakpoints 컨테이너 너비 기준 [최소 너비, 표시 개수] (내림차순)
 * @param {number} gap 카드 사이 간격(px). 카드 좌우 margin의 합과 같아야 한다.
 * @param {'item'|'page'} step 이동 단위. item: 카드 1개, page: 화면에 보이는 개수
 * @param {'arrows'|'pages'} controls 이전/다음 버튼 또는 페이지 표시
 */
function Carousel({
  children,
  breakpoints,
  gap = 0,
  step = 'item',
  controls = 'arrows',
  className = '',
  listClassName = '',
  itemClassName = '',
}) {
  const viewportRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const touchStart = useRef(null);

  useEffect(() => {
    const el = viewportRef.current;
    const update = () => setWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = React.Children.toArray(children);
  const total = items.length;
  const matched = breakpoints.find(([min]) => width > min);
  const visible = matched ? matched[1] : 1;
  const slot = width / visible;

  const maxIndex = Math.max(0, total - visible);
  const pageCount = Math.ceil(total / visible);
  const unit = step === 'page' ? visible : 1;
  const lastPosition = step === 'page' ? pageCount - 1 : maxIndex;
  const current = Math.min(position, lastPosition);
  const index = Math.min(current * unit, maxIndex);
  const canScroll = lastPosition > 0;

  const move = (next) => setPosition(Math.max(0, Math.min(next, lastPosition)));

  // 터치 스와이프: 가로로 충분히 움직였을 때만 이동한다 (세로 스크롤과 구분)
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };
  const handleTouchEnd = (e) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || !canScroll) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    move(current + (dx < 0 ? 1 : -1));
  };

  return (
    <div className={className}>
      {controls === 'arrows' && canScroll && (
        <button
          type="button"
          className="carousel_arrow prev"
          aria-label="이전"
          disabled={current === 0}
          onClick={() => move(current - 1)}
        >
          <Icon icon={faChevronLeft} />
        </button>
      )}
      <div
        className="carousel_viewport"
        ref={viewportRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ul
          className={listClassName}
          style={{ transform: `translateX(${-index * slot}px)` }}
        >
          {items.map((item, i) => (
            <li
              key={item.key || i}
              className={itemClassName}
              style={width ? { flex: 'none', width: slot - gap } : undefined}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {controls === 'arrows' && canScroll && (
        <button
          type="button"
          className="carousel_arrow next"
          aria-label="다음"
          disabled={current === lastPosition}
          onClick={() => move(current + 1)}
        >
          <Icon icon={faChevronRight} />
        </button>
      )}
      {controls === 'pages' && canScroll && (
        <div className="carousel_pagination">
          {Array.from({ length: pageCount }, (_, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`${i + 1}페이지`}
              className={`carousel_page${i === current ? ' now' : ''}`}
              onClick={() => move(i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && move(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
