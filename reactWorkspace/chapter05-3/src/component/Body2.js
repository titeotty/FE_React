import  {useState}  from "react";
import "./body.css";


  function Viewer( { number}){
    return(
      <div>
          {number%2===0? <h3>짝수</h3>:<h3>홀수</h3>}
      </div>
    );
  }

  function Body() {
  const [number, setNumber] = useState(0);
  const onIncrease= ()=> {
      setNumber(number+1);
  } 
  const onDecrease= ()=> {
    setNumber(number-1);
} 
  return (
    <div>
      <h2> {number} </h2>
      <Viewer number={number}></Viewer>
      <div>
          <button onClick={onIncrease}>증가</button>
          <button onClick={onDecrease}>감소</button>
      </div>
    </div>
  );
}
export default Body;
