import './App.css';

function Viewer({name, birth}){
  return(
    <div>
      이름: {name} <br/> 생일 : {birth}
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    name:"",
    birth:"",
   });

  function handleOnChange(e){
    setState({
      ...state,
      [e.target.name]:e.target.value
    });
  }

  return (
    <div>
      <div> 
        <input name="name" onChange={handleOnChange}></input>
        <input name="birth" type="date" onChange={handleOnChange}></input>
      </div>
      <Viewer {...state}></Viewer>
    </div>
  )
}

export default App;