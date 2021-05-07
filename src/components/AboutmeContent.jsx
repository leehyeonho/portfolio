import React from "react";
import { TypingStep } from "typing-effect-reactjs";;

const sequence = [
  {
    content: " ",
  },
  {
    content: 1000,
  },
  {
    content: "열정적으로 배우고 진지하게 코딩하는 사람. \n",
  },
  {
    content: 1000, // 100ms delay
  },
  {
    content: "보다 나은 풀스택 개발자를 목표로 열심히 배우고 노력합니다.",
    config: {
      disableBlinkingOnEnd: "false"
    },
  }
];

const AboutmeContent = (props) => (
    <TypingStep sequence={sequence} />
);

export default AboutmeContent;
