import React from "react";
import './App.css';
import Header from "./component/Header";
import Main from "./component/Main";
import Board from "./component/Board";
import Product from "./component/Product";
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="App">
		<Header />
		<Main />
		<Board />
		<Product />
		<NotFound />
    </div>
  );
}

export default App;
