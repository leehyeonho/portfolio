import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Certificates from './Certificates';
import { CERTIFICATES } from '../data/certificates';

describe('Certificates 확대 보기', () => {
  const first = CERTIFICATES[0];
  const openButton = () => screen.getByRole('button', { name: `${first.title} 크게 보기` });

  it('처음에는 모달이 없다', () => {
    render(<Certificates />);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('이미지를 클릭하면 모달이 열리고 닫기 버튼으로 포커스가 이동한다', () => {
    render(<Certificates />);
    fireEvent.click(openButton());

    const dialog = screen.getByRole('dialog', { name: first.title });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '닫기' })).toHaveFocus();
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('ESC로 닫으면 스크롤 잠금이 풀리고 열었던 버튼으로 포커스가 돌아온다', () => {
    render(<Certificates />);
    const trigger = openButton();
    trigger.focus();
    fireEvent.click(trigger);

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });

    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.body.style.overflow).toBe('');
    expect(trigger).toHaveFocus();
  });

  it('배경을 클릭하거나 닫기 버튼을 눌러도 닫힌다', () => {
    render(<Certificates />);
    fireEvent.click(openButton());
    fireEvent.click(screen.getByTestId('lightbox-backdrop'));
    expect(screen.queryByRole('dialog')).toBeNull();

    fireEvent.click(openButton());
    fireEvent.click(screen.getByRole('button', { name: '닫기' }));
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('Tab 키로 모달 밖으로 포커스가 나가지 않는다', () => {
    render(<Certificates />);
    fireEvent.click(openButton());
    const close = screen.getByRole('button', { name: '닫기' });
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Tab' });
    expect(close).toHaveFocus();
  });
});
