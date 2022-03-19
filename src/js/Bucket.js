// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import styled from "styled-components"

const BucketList = ({list}) => {
    const my_wrap = React.useRef(null);


    window.setTimeout(() => {console.log(my_wrap)}, 1000)
    return (
        <div ref={my_wrap}>
            {list.map((value, index) => <BucketItem key={index}>{value}</BucketItem>)}
        </div>
    );
}

const BucketItem = styled.div`
    height: 60px;
    margin: 20px;
    background-color: #f0f8ff;
    font-weight: bold;
    padding: 20px;
`;

export default BucketList;
export {BucketList}