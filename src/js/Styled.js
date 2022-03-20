import styled from "styled-components";

const StyledInput = styled.input `
    width: ${props => props.width};
    height: ${props => props.height};
    border: 2px solid #ddd;
    border-radius: 20px;
    padding: 0 20px;
`;

const StyledButton = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    border-radius: 20px;
    border: none;
    margin: 30px;
`;

const NemoDiv = styled.div `
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

export {StyledInput, NemoDiv, BucketItem, Container, StyledButton};