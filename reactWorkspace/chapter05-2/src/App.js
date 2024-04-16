import './App.css';
import Body from './component/body3.js';
import Footer from'./component/footer.js';
import He from './component/header.js';

function ChildComp() {
  return(
    <div>Child Component</div>
  )
}

function App() {
  // const bodyProps = {
  //   name: "이정환",
  //   location: "부천시", 
  //   favoList:["파스타", "떡", "라면"]
  // } 
  //객체선언 후 bodyProps에 저장 
  
  //bodyprops대신 childcomp사용

  return (
    <div className="App">
      <He/>
      <Footer/>
      <Body> <ChildComp/>
      </Body>  {/* 이 친구들이 자식 컴포넌트  */}
    </div>
  );
}

export default App;