import Header from "./component/Header";
import Body from "./component/Body";
import './App.css';
import React from "react";

export const MyContext = React.createContext();

function App() {
  const data = 'MyContext의 value입니다.';

  return (
    <div>
      <Header/>
      <MyContext.Provider value={data}>
        <Body/>
      </MyContext.Provider>
    </div>
  );
}

export default App;