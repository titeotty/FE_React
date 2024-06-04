import "./TodoList.css";
import TodoItem from "./TodoItem";
import React, { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from "../App";

const TodoList = () => {

  const {todo} = useContext(TodoStateContext);

  const analyzeTodo = useMemo(() => {
    console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount
    };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  const [search, setSearch] = useState('');

  const onchangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredTodo = todo.filter((item) =>
    item.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총 개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
        <br />
      </div>
      <input
        value={search}
        onChange={onchangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {filteredTodo.map((it) => (
          <TodoItem key={it.id} {...it}/>
        ))}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  todo : [],
};

export default TodoList;
