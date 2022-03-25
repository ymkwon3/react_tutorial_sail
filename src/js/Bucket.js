// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import { BucketItem, Container } from './Styled';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Detail } from './Detail';
import NotFound from './NotFound';
import {useSelector, useDispatch} from "react-redux";
import { createBucket } from '../redux/modules/bucket';

function BucketList(props) {
  const text = React.useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addBucket = () => {
    dispatch(createBucket(text.current.value));
  }
  const list = useSelector((state) => state.bucket.list);

  return(
    <>
      <Container width="400px" height="600px">
          <h1 className='title'>버킷리스트</h1>
          <hr/>
          <Routes>
            <Route path='/detail/:index' element={<Detail/>}></Route>
            <Route path='/' element={
              <div>
                {list.map((value, index) => 
                  <BucketItem key={index} onClick={() => navigate("/detail/"+index)}>
                    {value}
                  </BucketItem>)}
              </div>
            }></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
      </Container>
      <Container width="400px" height="200px" className="flex-column">
          <div>
              <input ref={text}></input>
              <button onClick={addBucket}>추가하기</button>
          </div>
      </Container>
    </>
  );
}
  
export {BucketList};
  