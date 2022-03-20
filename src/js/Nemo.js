import React from "react";
import {NemoDiv} from "./Styled"
class Nemo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 3,
        };
    }

    componentDidMount() {

    }

    createNemo = () => {
        this.setState({count: this.state.count + 1});
    }

    removeNemo = () => {
        if(this.state.count > 0)
            this.setState({count: this.state.count - 1});
    }

    render(){
        const nemo_cnt = Array.from({length: this.state.count}, (v, i) => i);
        console.log(this.state.count)
        return(
            <>
                {nemo_cnt.map((v, i) => <NemoDiv key={i}></NemoDiv>)}
                <div>
                    <button onClick={this.createNemo}>추가</button>
                    <button onClick={this.removeNemo}>빼기</button>
                </div>
            </>
        )
    };
}



export {Nemo};