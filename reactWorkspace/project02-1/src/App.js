import "./App.css";
import {useState} from 'react';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

const mockTodo = [{
  id : 0,
  isDone : false,
  content: "React 공부하기",
  createdDate: new Date().getTime(),
},
{
  id : 1,
  isDone : false,
  content: "빨래 널기",
  createdDate: new Date().getTime(),
},
{
  id : 2,
  isDone : false,
  content: "ㄱㄱ",
  createdDate: new Date().getTime(),
}]

function App() {
  const[todo, setTodo] = useState(mockTodo);

  const onCreate =()=> {
  setTodo();
};

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} />
    </div>
  );
}
export default App;
