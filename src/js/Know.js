import React from "react";
import { Container, StyledInput, StyledButton } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/modules/know";
import { Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";
import Score from "./Score";
import Progress from "./Progress";
import Rank from "./Rank";

const Know = () => {
  const name = React.useRef(null);
  const what = useSelector(state => state.know.what);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startQuiz = async () => {
    dispatch(setUser(name.current.value));
    navigate("/quiz/" + 0);
  };

  return (
    <Container width="400px" height="600px" className="flex-column">
      <Progress></Progress>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2>
                나는 <span>{what}</span> 에대해 얼마나 알고 있을까?
              </h2>
              <StyledInput
                width="280px"
                height="40px"
                placeholder="내 이름"
                type="text"
                ref={name}
              />
              <StyledButton width="100px" height="40px" onClick={startQuiz}>
                시작하기
              </StyledButton>
            </>
          }
        />
        <Route path="/quiz/:index" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        <Route path="/rank" element={<Rank />} />
      </Routes>
    </Container>
  );
};

export { Know };
