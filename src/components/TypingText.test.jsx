import React from 'react';
import { render, screen, act } from '@testing-library/react';
import TypingText from './TypingText';

describe('TypingText', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  const visibleText = (container) => container.querySelector('.typing_content').textContent;

  it('글자를 순서대로 타이핑하고 숫자는 대기 시간으로 처리한다', () => {
    const { container } = render(<TypingText sequence={['ab', 100, 'c']} />);
    expect(visibleText(container)).toBe('a'); // 첫 글자는 즉시 입력된다

    act(() => vi.advanceTimersByTime(40));
    expect(visibleText(container)).toBe('ab');

    act(() => vi.advanceTimersByTime(40 + 99)); // 대기 중
    expect(visibleText(container)).toBe('ab');

    act(() => vi.advanceTimersByTime(60));
    expect(visibleText(container)).toBe('abc');
  });

  it('타이핑이 끝나면 커서를 종료 상태로 바꾼다', () => {
    const { container } = render(<TypingText sequence={['a']} />);
    expect(container.querySelector('.typing_cursor')).not.toHaveClass('done');
    act(() => vi.advanceTimersByTime(200));
    expect(container.querySelector('.typing_cursor')).toHaveClass('done');
  });

  it('스크린리더에는 전체 문구를 제공한다', () => {
    render(<TypingText sequence={['안녕', 500, '하세요']} />);
    expect(screen.getByText('안녕하세요')).toHaveClass('sr-only');
  });

  it('움직임 줄이기 설정에서는 즉시 전체를 표시한다', () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: true });
    const { container } = render(<TypingText sequence={['안녕', 500, '하세요']} />);
    expect(visibleText(container)).toBe('안녕하세요');
    delete window.matchMedia;
  });
});
