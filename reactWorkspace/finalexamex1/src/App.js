import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";
import TestComp from './component/TestComp';

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
  const idRef = useRef(3); //목 데이터의 값이 0, 1, 2 총 3개이므로 useRef에 초기값을 3으로 설정
  
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };
  
  const onUpdate = (targetId) => {
    setTodo(
      todo.map(
        (it)=> {
          if(it.id === targetId) {
            return {
              ...it,
              isDone: !it.isDone,
            };
        } else {
          return it;
        }
      })
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TestComp />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
