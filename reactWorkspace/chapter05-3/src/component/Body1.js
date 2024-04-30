import  {useState}  from "react";
import "./body.css";
function Body() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");

  function handleOnClick(){
    console.log("update!!");
    setCount(count+1);
  }
  function handleOnChange(e){
    setName(e.target.value);
  }
  function handleOnChange1(e){
    setBirth(e.target.value);
  }
  function handleOnChange2(e){
    setGender(e.target.value);
  }
  function handleOnChange3(e){
    setBio(e.target.value);
  }
  return (
    <div>
      <h1 className="body"> BODY </h1>
      <h1> 카운트 : {count} </h1>
      <button onClick={handleOnClick}>버튼</button><br/>
      <input onChange={handleOnChange} />
      <h1> 입력 텍스트 : {name} </h1>
      <input type="date" onChange={handleOnChange1} />
      <h1> 입력 날짜 : {birth} </h1>
      <select onChange={handleOnChange2} >
          <option key={"1번"}> 1번 </option>
          <option key={"2번"}> 2번 </option>
          <option key={"3번"}> 3번 </option>
      </select>
      <h1> 셀렉트 선택값 : {gender} </h1>
      <textarea onChange={handleOnChange3} />
      <h1> 입력 : {bio} </h1>
    </div>
  );
}
export default Body;