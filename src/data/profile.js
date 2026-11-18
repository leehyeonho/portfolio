import { faIdCard, faCode, faLaptopCode, faChalkboardUser, faCertificate } from '@fortawesome/free-solid-svg-icons';

export const PROFILE = {
  name: '이 현호',
  github: 'https://github.com/leehyeonho',
  email: 'dlgusgh0812@gmail.com',
  // 이력서 PDF를 public/ 폴더에 넣고 파일명을 적으면(예: 'resume.pdf') 이력서 링크가 표시된다
  resume: null,
};

export const NAV_ITEMS = [
  { to: 'about_me_container', label: 'About Me', icon: faIdCard },
  { to: 'skills_Container', label: 'Skills', icon: faCode },
  { to: 'work_Container', label: 'Work Experiences', icon: faLaptopCode },
  { to: 'project_Container', label: 'Project', icon: faChalkboardUser },
  { to: 'Certificates_Container', label: 'Certificates', icon: faCertificate },
];
