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
    if(!didMountRef.current){
      didMountRef.current=true;
      return;
    }
    else {
      console.log('업데이트 :')
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
