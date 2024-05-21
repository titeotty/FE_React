import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState } from 'react';
import { useRef } from 'react';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "ㄱㄱ",
    createdDate: new Date().getTime(),
  }
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  
  const onDelete =(targetId)=>{
    setTodo(todo.filter((it)=>it.id !== targetId));
  };

  const onUpdate =(targetId)=>{
    setTodo(
      todo.filter((it)=> {
        if(it.id===targetId)
          return {isDone: !it.isDone}
      })
    );
  };

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content: content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([...todo, newItem]);
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onDelete={onDelete} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;
