import React, { useEffect } from "react";
import { Container, StyledInput, StyledButton } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateKnow } from "../redux/modules/know";

const Quiz = () => {
  const index = useParams().index;
  const quiz_list = useSelector(state => state.know.quiz);
  const quiz = quiz_list.filter((v, i) => i == index)[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nextPage = param => {
    // 마지막 퀴즈이면 퀴즈 점수페이지로 이동
    dispatch(updateKnow(index, param));
    quiz_list.length - 1 > index
      ? navigate("/quiz/" + (+index + 1))
      : navigate("/score");
  };

  return (
    <>
      <h2>{+index + 1} 번째 문제</h2>
      {quiz.question}
      <div className="flex-row">
        <StyledButton
          onClick={e => nextPage("O")}
          fontSize="54px"
          color="black"
          backgroundColor="white"
        >
          O
        </StyledButton>
        <StyledButton
          onClick={e => nextPage("X")}
          fontSize="54px"
          color="black"
          backgroundColor="white"
        >
          X
        </StyledButton>
      </div>
    </>
  );
};

export default Quiz;
