/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  //document.querySelector('h4').innerHTML = post; html문법
  let logo = 'ReactBlog'


  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [likeCount, setLike] = useState(0);

  function changeTitle() {
    let copyTitle = [...title];
    copyTitle[0]='여자코트 추천';
    setTitle(copyTitle);
  }

  function countPlus() {
    setLike(likeCount+1);
  }

  function alignment() {
    let sortedTitles = [...title].sort(); // 기존 배열을 변경하지 않고 새로운 배열을 생성하여 정렬
    setTitle(sortedTitles); // 정렬된 배열로 상태를 업데이트
  }
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'skyblue', fontSize : '16px'}}>{logo}</h4>
        </div>
        <br></br>
        <button className='btn' onClick={alignment}>가나다순정렬</button>

        <div className='list'>
          <h4>{title[0]} <span onClick={countPlus}>💭</span> {likeCount}</h4>
          <button className='btn' onClick={changeTitle}>글 제목 변경</button>
          <p>4월 30일 발행</p>
        </div>

        <div className='list'>
          <h4>{title[1]}</h4>
          <p>4월 30일 발행</p>
        </div>

        <div className='list'>
          <h4>{title[2]}</h4>
          <p>4월 30일 발행</p>
        </div>

        {/* <h4>{post}</h4>
        중괄호로 변수넣기 = 데이터 바인딩 */}

        <Modal1/>
    </div>
  );
}

function Modal1() {
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
