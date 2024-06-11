import React from "react";
import './App.css';
import Header from "./component/Header";
import Main from "./component/Main";
import Board from "./component/Board";
import Product from "./component/Product";
import NotFound from './component/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Main/>}></Route>
				<Route path="/board/" element={<Board/>}></Route>
				<Route path="/product/" element={<Product/>}></Route>
				<Route path="*" element={<NotFound/>}></Route>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;