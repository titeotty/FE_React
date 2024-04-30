import {useState, useRef} from "react";

function App() {
  const [text, setText]=useState("");
  const textRef = useRef();
  const handleChange =(e)=> {
      setText(e.target.value);

  }
  const handleClick =()=> {
    if(text === "dong"){
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
      textRef.current.value="";
      textRef.current.focus();
    }
  }

  return (
    <div>
      <input ref={textRef} onChange={handleChange}/>
      <button onClick={handleClick}> 로그인 </button>
    </div>
  )
}

export default App;