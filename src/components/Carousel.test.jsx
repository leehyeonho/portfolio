import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';
import { setViewportWidth } from '../test/resizeObserver';

const BREAKPOINTS = [[950, 3], [650, 2]];

function renderCarousel(count, props = {}) {
  return render(
    <Carousel breakpoints={BREAKPOINTS} gap={30} listClassName="list" {...props}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>item {i}</span>
      ))}
    </Carousel>
  );
}

const list = (container) => container.querySelector('ul');
const offset = (container) => parseFloat(list(container).style.transform.match(/translateX\((-?[\d.]+)px\)/)[1]);
const cards = (container) => [...container.querySelectorAll('li')];

describe('Carousel', () => {
  it('컨테이너 너비에 맞춰 카드 크기를 계산한다', () => {
    const { container } = renderCarousel(5);
    // 너비 1000 -> 3개 표시, 카드 너비 = 1000/3 - gap
    expect(cards(container)[0]).toHaveStyle({ width: `${1000 / 3 - 30}px` });
  });

  it('너비가 바뀌면 표시 개수를 다시 계산한다', () => {
    const { container } = renderCarousel(5);
    setViewportWidth(700);
    expect(cards(container)[0]).toHaveStyle({ width: `${700 / 2 - 30}px` });
    setViewportWidth(400);
    expect(cards(container)[0]).toHaveStyle({ width: `${400 - 30}px` });
  });

  describe('arrows', () => {
    it('모든 카드가 보이면 버튼을 숨긴다', () => {
      renderCarousel(3);
      expect(screen.queryByRole('button', { name: '다음' })).toBeNull();
      expect(screen.queryByRole('button', { name: '이전' })).toBeNull();
    });

    it('양 끝에서 버튼을 비활성화한다', () => {
      renderCarousel(5); // 3개 표시 -> 최대 2칸 이동
      const prev = screen.getByRole('button', { name: '이전' });
      const next = screen.getByRole('button', { name: '다음' });
      expect(prev).toBeDisabled();
      expect(next).toBeEnabled();

      fireEvent.click(next);
      fireEvent.click(next);
      expect(next).toBeDisabled();
      expect(prev).toBeEnabled();

      fireEvent.click(prev);
      expect(next).toBeEnabled();
    });

    it('한 번에 카드 1개만큼 이동한다', () => {
      const { container } = renderCarousel(5);
      fireEvent.click(screen.getByRole('button', { name: '다음' }));
      expect(offset(container)).toBeCloseTo(-1000 / 3);
    });

    it('표시 개수가 바뀌어도 위치를 유지하고 이동 범위를 다시 계산한다', () => {
      const { container } = renderCarousel(5);
      const next = screen.getByRole('button', { name: '다음' });
      fireEvent.click(next);
      fireEvent.click(next); // 3개 표시 상태에서 끝까지 이동 (position 2)

      setViewportWidth(1300); // 3개 표시 유지, 위치 유지
      expect(screen.getByRole('button', { name: '다음' })).toBeDisabled();

      setViewportWidth(700); // 2개 표시 -> 최대 3칸, 이동 가능
      expect(screen.getByRole('button', { name: '다음' })).toBeEnabled();
      expect(offset(container)).toBeCloseTo(-2 * 350);
    });
  });

  describe('pages', () => {
    const pageProps = { step: 'page', controls: 'pages', breakpoints: [[650, 2]], gap: 0 };

    it('페이지 수만큼 표시기를 만들고 첫 페이지를 활성화한다', () => {
      setViewportWidth(700);
      renderCarousel(4, pageProps);
      const pages = screen.getAllByRole('button');
      expect(pages).toHaveLength(2);
      expect(pages[0]).toHaveClass('now');
    });

    it('페이지를 클릭하면 한 화면만큼 이동한다', () => {
      setViewportWidth(700);
      const { container } = renderCarousel(4, pageProps);
      fireEvent.click(screen.getByRole('button', { name: '2페이지' }));
      expect(offset(container)).toBeCloseTo(-2 * 350);
    });

    it('마지막 페이지가 비어 보이지 않도록 위치를 제한한다', () => {
      setViewportWidth(700);
      const { container } = renderCarousel(3, pageProps); // 2개 표시, 3개 -> 2페이지
      fireEvent.click(screen.getByRole('button', { name: '2페이지' }));
      expect(offset(container)).toBeCloseTo(-1 * 350);
    });

    it('Enter 키로도 이동할 수 있다', () => {
      setViewportWidth(700);
      renderCarousel(4, pageProps);
      fireEvent.keyDown(screen.getByRole('button', { name: '2페이지' }), { key: 'Enter' });
      expect(screen.getByRole('button', { name: '2페이지' })).toHaveClass('now');
    });
  });
});
