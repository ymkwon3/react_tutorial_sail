import React from "react";
import {useParams, useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {StyledButton} from "./Styled"
import { deleteBucket } from "../redux/modules/bucket";
function Detail() {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bucket_index = params.index;
    const bucket_list = useSelector((state) => state.bucket.list);

    const removeBucket = () => {
        dispatch(deleteBucket(bucket_index));
        navigate(-1);
    }

    return (    
        <div className="flex-column">
            <h2>
                {bucket_list[bucket_index]}
            </h2>
            <StyledButton width="160px" height="60px" onClick={removeBucket}>
                삭제하기
            </StyledButton>
        </div>
    );
}

export {Detail};