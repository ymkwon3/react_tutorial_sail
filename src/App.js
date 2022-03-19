import React from 'react';
import './App.css';
// import BucketList from './Bucket;
import {BucketList} from "./js/Bucket";
import styled from "styled-components"

// function App() {
//   return (
//     <div className="App">
//         <BucketList></BucketList>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["영화관 가기", "히히 로스트아크 하기", "응애?"],
    };

    this.text = React.createRef();
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className='App flex-column'>
        <Card>
          <h1 className='title'>버킷리스트</h1>
          <hr/>
          <BucketList list={this.state.list}></BucketList>
        </Card>

        <div>
          <input type="text" ref={this.text} onChange={() => {
            console.log(this.text.current.value);
          }}></input>
        </div>
        
      </div>
    );
  }
}

const Card = styled.div`
  background-color: #fff;
  max-width: 400px;
  width: 100%;
  height: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h1 {
    text-align: center;
    color: #6a5acd;
  }
`;



export default App;
