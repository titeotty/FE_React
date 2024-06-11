import "./TodoList.css";
import { useState, useMemo, useContext, useCallback } from 'react';
import { TodoStateContext } from "../App";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todo, onUpdate } = useContext(TodoStateContext);
  const [search, setSearch] = useState('');

  const filteredTodos = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return todo.filter((item) => item.content.toLowerCase().includes(lowerSearch));
  }, [todo, search]);

  const analyzeTodo = useMemo(() => {
    console.log("analyzeTodo 함수 호출");
    const totalCount = filteredTodos.length;
    const doneCount = filteredTodos.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [filteredTodos]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  const onChangeSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleUpdate = useCallback((id, isDone) => {
    onUpdate(id, isDone);
  }, [onUpdate]);

  return (
    <div className="TodoList">
      <h4>Todo List </h4>
      <div>총 할 일의 개수 : {totalCount}</div>
      <div>완료된 할 일 : {doneCount}</div>
      <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      <input
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
        value={search}
      />
      <div className="list_wrapper">
        {filteredTodos.map((it) => (
          <TodoItem key={it.id} {...it} onUpdate={handleUpdate}/>
        ))}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  todo : [],
};

export default TodoList;