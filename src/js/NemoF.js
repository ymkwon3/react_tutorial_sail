import React from "react";
import {NemoDiv} from "./Styled"


const NemoF = (props) => {
    const [count, setCount] = React.useState(3);

    const nemo_cnt = Array.from({length: count}, (v, i) => i);

    const addNemo = () => setCount(count + 1);
    const removeNemo = () => {
        if(count > 0)
            setCount(count - 1)
    };


    return (
        <>
            {nemo_cnt.map((v, i) => <NemoDiv key={i}></NemoDiv>)}
            <div>
                <button onClick={addNemo}>추가</button>
                <button onClick={removeNemo}>빼기</button>
            </div>
        </>
    );
}

export {NemoF};