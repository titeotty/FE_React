import './App.css';
function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count = {count}/>
      </section>
      <Controller handleSetCount={handleSetCount}></Controller>
    </div>
  );
}

export default App;
