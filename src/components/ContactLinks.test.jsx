import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactLinks from './ContactLinks';
import { PROFILE } from '../data/profile';

describe('ContactLinks', () => {
  it('이메일과 GitHub 링크를 표시한다', () => {
    render(<ContactLinks />);
    expect(screen.getByRole('link', { name: '이메일' })).toHaveAttribute('href', `mailto:${PROFILE.email}`);

    const github = screen.getByRole('link', { name: /GitHub/ });
    expect(github).toHaveAttribute('href', PROFILE.github);
    expect(github).toHaveAttribute('target', '_blank');
    expect(github.getAttribute('rel')).toContain('noopener');
  });

  it('이력서가 설정되지 않으면 이력서 링크를 숨긴다', () => {
    expect(PROFILE.resume).toBeNull();
    render(<ContactLinks />);
    expect(screen.queryByRole('link', { name: /이력서/ })).toBeNull();
  });
});
