import { useState, useEffect, useRef } from "react";
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import Even from './component/Even'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };

  useEffect( ()=> {
    const intervalId = setInterval(()=> {
      console.log("깜빡");
    }, 1000);
    return ()=>{
      console.log('클린업');
      clearInterval(intervalId);
    }
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input onChange={handleSetText} value={text}/>
      </section>
      <Viewer count={count} />
      {count % 2 === 0  && <Even/>}

      <Controller handleSetCount={handleSetCount}></Controller>
    </div>
  );
}

export default App;
