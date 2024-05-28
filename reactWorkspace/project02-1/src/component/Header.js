import React, { Component } from "react";
import "./Header.css";

const Header = () => {
  console.log("Header 컴포넌트 호출");
  return (
    <div className="Header">
      <h3>오늘은 📅</h3>   {/* 이모지: 윈도우키 + . */}
      <h1>{new Date().toDateString()}</h1>
       {/* <h1>{new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</h1> */}
    </div>
  );
};
export default React.memo(Header);