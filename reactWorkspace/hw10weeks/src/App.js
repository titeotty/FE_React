import React, { useState } from 'react';
import './App.css';
import Box from './component/Box';

const RPS = {
  rock: {
    name: 'Rock',
  },
  paper: {
    name: 'Paper',
  },
  scissor: {
    name: 'Scissor',
  },
};

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const play = (choice) => {
    const choices = Object.keys(RPS);
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computer);
    
    if (choice === computer) {
      setResult("무승부");
    } else if (
      (choice === 'rock' && computer === 'scissor') ||
      (choice === 'paper' && computer === 'rock') ||
      (choice === 'scissor' && computer === 'paper')
    ) {
      setResult('승리');
    } else {
      setResult('패배');
    }
  };

  return (
    <div>
      <div className="main">
        <Box title="Player" />
        <Box title="Computer" />
      </div>

      <div>
        <button onClick={() => play('rock')}>Rock</button>
        <button onClick={() => play('paper')}>Paper</button>
        <button onClick={() => play('scissor')}>Scissor</button>
      </div>

      <div>{result}</div>
    </div>
  );
}

export default App;
