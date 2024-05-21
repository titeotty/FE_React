import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({Todo}) => {

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div className="list_wrapper">
        {Todo.map((it)=>(
        <div>{it.content}</div>
          ))}
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
      </div>
    </div>
  );
};
export default TodoList;
