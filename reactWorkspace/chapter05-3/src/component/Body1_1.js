import  {useState}  from "react";
//import { useRef, useState } from "react";
import "./body.css";
function Body() {

  const [count, setCount] = useState(0);

  const [state, setState] = useState({
      name:"",
      birth:"",
      gender:"",
      bio:""
  });

  function handleOnClick(){
    setCount(count+1);

    // 전개연산자 연습!!
    const myObject1 = {
      laptop: 'MacBook Pro',
      tablet: 'iPad Pro 11'
    }    
    const myObject2 = {
        ...myObject1,
        phone: 'Galaxy Note 10'
    };    
    console.log(myObject1); 
    console.log(myObject2);
 
}

  function handleOnChange(e){
    setState( {   //위의 전개연산자 연습 참조!!!!!!!!!!!!!!
      ...state,
      [e.target.name]:e.target.value
    });
    
  }

  return (
    <div>
      <h1 className="body"> BODY </h1>
      <h1> 카운트 : {count} </h1>
      <button onClick={handleOnClick}>버튼</button><br/>
      <input name="name" onChange={handleOnChange} />
      <h1> 입력 텍스트 : {state.name} </h1>
      <input name="birth" type="date" onChange={handleOnChange} />
      <h1> 입력 날짜 : {state.birth} </h1>
      <select name="gender" onChange={handleOnChange} >
          <option key={"1번"}> 1번 </option>
          <option key={"2번"}> 2번 </option>
          <option key={"3번"}> 3번 </option>
      </select>
      <h1> 셀렉트 선택값 : {state.gender} </h1>
      <textarea name="bio" onChange={handleOnChange} />
      <h1> 입력 : {state.bio} </h1>
    </div>
  );
}
export default Body;
