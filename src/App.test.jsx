import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { WORKS } from './data/work';
import { PROJECTS } from './data/projects';
import { SKILLS } from './data/skills';
import { CERTIFICATES } from './data/certificates';
import { NAV_ITEMS } from './data/profile';

describe('App', () => {
  it('문서 구조: h1은 하나이고 섹션 제목은 h2다', () => {
    render(<App />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)).toEqual([
      'About Me',
      'Skills',
      'Work Experiences',
      'Personal Project',
      'Certificates',
    ]);
  });

  it('내비게이션의 모든 항목이 실제 섹션 id를 가리킨다', () => {
    const { container } = render(<App />);
    NAV_ITEMS.forEach(({ to }) => {
      expect(container.querySelector(`#${to}`)).not.toBeNull();
    });
  });

  it('데이터 파일의 내용을 모두 렌더링한다', () => {
    render(<App />);
    WORKS.forEach(({ title }) => expect(screen.getByText(title)).toBeInTheDocument());
    PROJECTS.forEach(({ title }) => expect(screen.getByText(title)).toBeInTheDocument());
    SKILLS.forEach(({ name }) => expect(screen.getByText(name)).toBeInTheDocument());
    CERTIFICATES.forEach(({ title }) => expect(screen.getByAltText(title)).toBeInTheDocument());
  });

  it('외부 링크는 새 창에서 안전하게 연다', () => {
    const { container } = render(<App />);
    const links = container.querySelectorAll('.work_url a, .project_url a');
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link.getAttribute('rel')).toContain('noopener');
    });
  });
});
