// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import { BucketItem, Container } from './Styled';

class BucketList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        list: ["영화관 가기", "히히 로스트아크 하기", "응애?"],
      };
  
      this.text = React.createRef();
    }
  
    componentDidMount() {}
  
    addBucket = () => {
      const new_item = this.text.current.value;
      this.setState({list : [...this.state.list, new_item]});
    };
  
    render() {
      return (
        <>
            <Container width="400px" height="600px">
                <h1 className='title'>버킷리스트</h1>
                <hr/>
                <div>
                    {this.state.list.map((value, index) => <BucketItem key={index}>{value}</BucketItem>)}
                </div>
            </Container>
            <Container width="400px" height="200px" className="flex-column">
                <div>
                    <input ref={this.text}></input>
                    <button onClick={this.addBucket}>추가하기</button>
                </div>
            </Container>
        </>
      );
    }
  }
  
  export {BucketList};
  