import './App.css';
import Body from './component/body.js';
import Footer from'./component/footer.js';
import He from './component/header.js';

function App() {
  const name="최도현";

  return (
    <div className="App">
      <He/>
      <Footer/>
      <Body na={name} /*location={"seoul"}*//>
    </div>
  );
}

export default App;
