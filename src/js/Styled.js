import styled, { keyframes } from "styled-components";

const StyledInput = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  border: 2px solid #ddd;
  border-radius: 20px;
  padding: 0 20px;
  margin: 15px;
  &:focus {
    outline: none;
    border: 4px solid #6a5acd;
  }
`;

const StyledButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#ff6e60"};
  color: ${props => (props.color ? props.color : "white")};
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  border-radius: 20px;
  border: none;
  margin: 10px;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
  }
`;

const NemoDiv = styled.div`
  width: 100px;
  height: 100px;

  background-color: black;
  border-radius: 5px;

  margin: 25px;
`;

const BucketItem = styled.div`
  height: 60px;
  margin: 20px;
  background-color: #f0f8ff;
  font-weight: bold;
  padding: 20px;
`;

const Container = styled.div`
  background-color: #fff;
  max-width: ${props => props.width};
  width: 100%;
  height: ${props => props.height};
  padding: 20px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h1 {
    text-align: center;
    color: #6a5acd;
  }

  h2 {
    margin: 30px;
    text-align: center;
    color: #000;
  }

  span {
    background-color: #fef5d5;
    border-radius: 15px;
  }
`;

const boxAnimation = keyframes`
  50% {
    border-radius: 50px;
    top: 700px;
    left: 700px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 0px;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 2s 1s infinite linear;
`;

const ProgressBar = styled.div`
  display: flex;
  background-color: #eee;
  width: 300px;
  height: 40px;
  border-radius: 60px;
  align-items: center;
`;

const Highlight = styled.div`
  background-color: #6a5acd;
  width: ${props => props.width};
  height: inherit;
  border-radius: inherit;

  transition: 0.4s;
`;

const ProgressBarCircle = styled.div`
  background-color: white;
  border: 5px solid #6a5acd;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  margin-left: -30px;
`;

const Card = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  height: 100px;
  margin: 10px 0;
  user-select: none;

  h2 {
    position: absolute;
    left: 0;
  }

  .user-container {
    margin-left: 120px;
  }

  div > .name {
    font-size: 20px;
    font-weight: bold;
  }


  &:active {
    background-color: #ff6e60;
  }
`;

const ColumnLine = styled.div`
  width: 2px;
  background-color: #eee;
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 100px;
`;

export {
  StyledInput,
  NemoDiv,
  BucketItem,
  Container,
  StyledButton,
  Box,
  ProgressBar,
  Highlight,
  ProgressBarCircle,
  Card,
  ColumnLine,
};
