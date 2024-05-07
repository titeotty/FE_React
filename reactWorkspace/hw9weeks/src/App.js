import React, { useState } from 'react';
import './App.css';

function App() {
  const [cal, setCal] = useState("");

  const handleButtonClick = (value) => {
    setCal((prev) => prev + value);
  };

  const clearInput = () => {
    setCal("");
  };

  const calculateResult = () => {
    try {
      const result = eval(cal); // 문자열로 된 식을 계산

      setCal(result.toString()); // 결과를 문자열로 설정
    } 
    
    catch (error) {
      setCal("Error"); // 오류 발생 시 "Error" 표시
    }
  };

  return (
    <div className="Cal">
      <div className="buttn">
      <input id ='inpt' type="text" value={cal} readOnly /> <br/>
        <button className='btn' value="%" onClick={() => handleButtonClick('%')}>%</button>
        <button className='btn' value="CE" onClick={clearInput}>CE</button>
        <button className='btn' value="DEL" onClick={clearInput}>DEL</button>
        <button className='btn' value="/" onClick={() => handleButtonClick('/')}>÷</button><br/>
        <button className='btn' value="7" onClick={() => handleButtonClick('7')}>7</button>
        <button className='btn' value="8" onClick={() => handleButtonClick('8')}>8</button>
        <button className='btn' value="9" onClick={() => handleButtonClick('9')}>9</button>
        <button className='btn' value="*" onClick={() => handleButtonClick('*')}>×</button><br/>
        <button className='btn' value="4" onClick={() => handleButtonClick('4')}>4</button>
        <button className='btn' value="5" onClick={() => handleButtonClick('5')}>5</button>
        <button className='btn' value="6" onClick={() => handleButtonClick('6')}>6</button>
        <button className='btn' value="-" onClick={() => handleButtonClick('-')}>-</button><br/>
        <button className='btn' value="1" onClick={() => handleButtonClick('1')}>1</button>
        <button className='btn' value="2" onClick={() => handleButtonClick('2')}>2</button>
        <button className='btn' value="3" onClick={() => handleButtonClick('3')}>3</button>
        <button className='btn' value="+" onClick={() => handleButtonClick('+')}>+</button><br/>
        <button className='btn' value="." onClick={() => handleButtonClick('.')}>.</button>
        <button className='btn' value="0" onClick={() => handleButtonClick('0')}>0</button>
        <button className='btn' value=" " onClick={clearInput}>C</button>
        <button className='btn' value="=" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;
