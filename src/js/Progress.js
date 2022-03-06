import React from "react";
import { ProgressBar, Highlight , ProgressBarCircle } from "./Styled";
import { useSelector } from "react-redux";

const Progress = props => {
  const quiz_list = useSelector(state => state.know.quiz);

  let count = 0;
  quiz_list.map((v, i) => {
    if(v.completed)
      count++;
    return 0;
  })
  return (
    <ProgressBar>
      <Highlight width={count / quiz_list.length * 100 + "%"}/>
      <ProgressBarCircle></ProgressBarCircle>
    </ProgressBar>
  );
};

export default Progress;