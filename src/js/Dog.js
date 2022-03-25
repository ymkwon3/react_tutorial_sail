import React from "react";
import { useNavigate } from "react-router-dom";

const Dog = (props) => {
    const navigate = useNavigate();
    return(
        <div onClick={() => {
            navigate("/");
        }}>
            Dog입니다람쥐
        </div>
    );
};

export default Dog;