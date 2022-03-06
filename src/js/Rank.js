import React from "react";
import { StyledButton, Card, ColumnLine } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, loadRankFB } from "../redux/modules/know";
import Spinner from "../Spinner";
import "../App.css";

const Rank = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.know.rank);
  const is_loaded = useSelector(state => state.know.is_loaded);

  React.useEffect(async () => {
    dispatch(loadRankFB());
  }, []);

  const goHome = () => {
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <h1>랭킹</h1>
      <div className="scroll">
        {selector ? selector.map((v, i) => (
          <Card key={i} className="flex-row-start">
            <h2>{++i}등 </h2>
            <ColumnLine />
            <div className="user-container">
              <div className="name">{v.user}</div>
              <div className="comment">{v.comment}</div>
            </div>
          </Card>
        )) : null}
      </div>
      <StyledButton width="100px" height="40px" onClick={() => goHome()}>처음으로</StyledButton>
      {!is_loaded && <Spinner/>}
    </>
  );
};

export default Rank;
