import React from "react";
import { Container, StyledInput, StyledButton } from "./Styled";

const Know = (props) => {
    
    return(
        <Container width="400px" height="600px" className="flex-column">
            <h2>나는 <span>{props.name}</span> 에대해 얼마나 알고 있을까?</h2>
            <StyledInput width="280px" height="40px" placeholder="내 이름" type="text"/>
            <StyledButton width="100px" height="40px" backgroundColor="#dbdafc">시작하기</StyledButton>
        </Container>
    );
    
}

export {Know};