import { useNavigate } from "react-router-dom";
import { StyledButton } from "./Styled";

const NotFound = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div>주소가 올바르지 않습니다람쥐!</div>
            <StyledButton onClick={() => navigate(-1)}>뒤로가기</StyledButton>
        </>
    );
};

export default NotFound;