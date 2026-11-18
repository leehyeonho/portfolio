import React, { useEffect, useState } from 'react';
import '../assets/css/TypingText.css';

const TYPE_SPEED = 40; // 글자당 ms
const BLINK_COUNT = 5; // 타이핑이 끝난 뒤 커서가 깜빡이는 횟수

/**
 * 타이핑 효과 텍스트
 *
 * @param {Array<string|number>} sequence 문자열은 타이핑할 내용, 숫자는 대기 시간(ms)
 */
function TypingText({ sequence }) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setText(sequence.filter((step) => typeof step === 'string').join(''));
      setDone(true);
      return undefined;
    }

    let timer;
    let stepIndex = 0;
    let charIndex = 0;

    const run = () => {
      const step = sequence[stepIndex];
      if (step === undefined) {
        setDone(true);
        return;
      }
      if (typeof step === 'number') {
        stepIndex += 1;
        timer = setTimeout(run, step);
        return;
      }
      if (charIndex < step.length) {
        const char = step[charIndex];
        charIndex += 1;
        setText((prev) => prev + char);
        timer = setTimeout(run, TYPE_SPEED);
        return;
      }
      stepIndex += 1;
      charIndex = 0;
      run();
    };

    run();
    return () => clearTimeout(timer);
  }, [sequence]);

  return (
    <p className="typing_text">
      <span className="sr-only">{sequence.filter((step) => typeof step === 'string').join('')}</span>
      <span className="typing_content" aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className={`typing_cursor${done ? ' done' : ''}`}
        style={done ? { animationIterationCount: BLINK_COUNT } : undefined}
      ></span>
    </p>
  );
}

export default TypingText;
