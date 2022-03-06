import React from "react";
import { StyledInput, StyledButton } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRankFB, reset } from "../redux/modules/know";

import { db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const Score = () => {
  const text = React.useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const what = useSelector(state => state.know.what);
  const who = useSelector(state => state.know.who);
  const quiz_list = useSelector(state => state.know.quiz);

  let quiz_score = 0;

  // 정답확인을 통해 점수 계산
  quiz_list.map(v => {
    if (v.answer == v.user_answer) {
      quiz_score++;
    }
    return 0;
  });
  quiz_score = parseInt((quiz_score / quiz_list.length) * 100);

  // 처음화면으로
  const goHome = () => {
    dispatch(reset());
    navigate("/");
  };

  // 랭킹 등록 후 랭킹 화면으로
  const goRank = () => {
    dispatch(addRankFB(who, quiz_score, text.current.value));
    navigate("/rank");
  };

  return (
    <>
      <h2>
        <span>{what}</span>퀴즈에 대한 <span>{who}</span>의 점수는?
      </h2>
      <h1>
        <span>{quiz_score}</span>점!
      </h1>
      대.다.나.다
      <StyledInput
        width="280px"
        height="40px"
        placeholder="한 마디 하기"
        type="text"
        ref={text}
      ></StyledInput>
      <StyledButton
        backgroundColor="#6a5acd"
        width="100px"
        height="40px"
        onClick={goRank}
      >
        랭킹보기
      </StyledButton>
      <StyledButton width="100px" height="40px" onClick={goHome}>
        처음으로
      </StyledButton>
    </>
  );
};

export default Score;
