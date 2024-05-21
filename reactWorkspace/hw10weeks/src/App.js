import React, { useState } from 'react';
import './App.css';

const choices = [
  { name: '가위', img: 'https://png.pngtree.com/png-clipart/20220102/original/pngtree-scissors-office-supplies-illustration-png-image_6993653.png' },
  { name: '바위', img: 'https://en.pimg.jp/023/285/118/1/23285118.jpg' },
  { name: '보', img: 'https://thumb.ac-illust.com/4f/4fd64536097deb14df1b1c75311a3aca_w.jpeg' },
];

const getResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return '비겼습니다';
  if (
    (playerChoice === '가위' && computerChoice === '보') ||
    (playerChoice === '바위' && computerChoice === '가위') || 
    (playerChoice === '보' && computerChoice === '바위')
  ) return '승리';
  return '패배';
};

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleClick = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);
    setResult(getResult(choice.name, randomChoice.name));
  };

  return (
    <div className="App">
      <h1>가위 바위 보</h1>
      <div className="choices">
        {choices.map((choice) => (
          <img
            key={choice.name}
            src={choice.img}
            alt={choice.name}
            onClick={() => handleClick(choice)}
            className="choice-image"
          />
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className="result">
          <h3>결과화면</h3>
          <p>플레이어의 선택: {playerChoice.name}</p>
          <p>상대방의 선택: {computerChoice.name}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default App;
