import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState } from "react";

function App() {
  const mockTodo = [
    {
      id : 0,
      isDone : false,
      content : "React 공부하기",
      createdDate : new Date().getTime(),
    },

    {
      id : 1,
      isDone : false,
      content : "빨널",
      createdDate : new Date().getTime(),
    },

    {
      id : 2,
      isDone : false,
      content : "노래",
      createdDate : new Date().getTime(),
    },
  ]

  const [todo, setTodo] = useState(mockTodo);
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App;
