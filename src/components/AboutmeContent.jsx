import React from 'react';
import TypingText from './TypingText';

const sequence = [
  ' ',
  1000,
  '열정적으로 배우고 진지하게 코딩하는 사람. \n',
  1000,
  '어제보다 나은 오늘을 위해 열심히 배우고 노력합니다.',
];

const AboutmeContent = () => <TypingText sequence={sequence} />;

export default AboutmeContent;
