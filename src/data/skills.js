import { faHtml5, faCss3Alt, faJs, faReact, faNode, faJava, faVuejs, faLinux, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import rails from '../assets/images/rails.png';
import jquery from '../assets/images/jquery.gif';
import python from '../assets/images/python.png';
import mysql from '../assets/images/mysql.png';

// icon: Font Awesome 아이콘 정의, image: 이미지 아이콘
export const SKILLS = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JS', icon: faJs },
  { name: 'REACTJS', icon: faReact },
  { name: 'NODEJS', icon: faNode },
  { name: 'JAVA', icon: faJava, faVuejs, faLinux, faGitAlt },
  { name: 'VUE.JS', icon: faVuejs },
  { name: 'LINUX', icon: faLinux },
  { name: 'GIT', icon: faGitAlt },
  { name: 'RUBY ON RAILS', image: rails },
  { name: 'jquery', image: jquery },
  { name: 'python', image: python },
  { name: 'mysql', image: mysql },
];
