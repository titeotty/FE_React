import "./TodoList.css";
import TodoItem from "./TodoItem";
import React, { useState } from 'react';

const TodoList = ({ todo, onDelete, onUpdate }) => {
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
      <input
        value={search}
        onChange={onchangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {filteredTodo.map((it) => (
          <TodoItem key={it.id} {...it} onDelete={onDelete} onUpdate={onUpdate}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
