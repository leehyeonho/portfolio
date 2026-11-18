import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import '../assets/css/Lightbox.css';

/**
 * 이미지 확대 보기 모달
 * ESC, 배경 클릭, 닫기 버튼으로 닫으며 닫으면 열었던 버튼으로 포커스를 돌려준다.
 */
function Lightbox({ image, title, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'Tab') {
      // 포커스 가능한 요소가 닫기 버튼 하나뿐이므로 모달 밖으로 나가지 않게 고정한다
      e.preventDefault();
      closeRef.current.focus();
    }
  };

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onKeyDown={handleKeyDown}>
      <div className="lightbox_backdrop" onClick={onClose} data-testid="lightbox-backdrop"></div>
      <figure className="lightbox_figure">
        <img src={image} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
      <button type="button" className="lightbox_close" aria-label="닫기" onClick={onClose} ref={closeRef}>
        <Icon icon={faXmark} />
      </button>
    </div>,
    document.body
  );
}

export default Lightbox;
