import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Spinner = () => {
  return (<Outter>
    <SpinnerIcon></SpinnerIcon>
  </Outter>);
};

const Outter = styled.div`
  background-color: #e5d6ff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled.div`
  background-color: #673ab7;
  width: 100px;
  height: 100px;
  animation: ${spin} 2s 1s infinite linear;
`;

export default Spinner;