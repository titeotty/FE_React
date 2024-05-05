import {useState} from "react";
import "./body.css";

function Body(){
  const [count, setCount]= useState(0);
  const [text, setText]=useState("")

  function handleOnClick(e) {
    setCount(count+1)
  }
  function handleOnChange(e) {
    setText(e.target.value)
  }

    return(
      <div>
        <h1>바디 영역  </h1>
        <h2>현재 클릭 수 : {count} </h2>
        <button name="btn1" onClick={()=>setCount(count+1)}> 좌버튼 클릭! </button>
        <button name="btn2" onClick={handleOnClick}> 우버튼 클릭! </button>
        <br></br>
        <h2>입력한 내용 : {text}</h2>
        <input onChange={handleOnChange}/>
      </div>
    );

  }
  export default Body;