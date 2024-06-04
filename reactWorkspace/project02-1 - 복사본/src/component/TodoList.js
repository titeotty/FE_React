import "./TodoList.css";
import { useState, useMemo, useContext } from 'react';
import TodoItem from "./TodoItem";

const TodoList = () => {
  const analyzeTodo = useMemo(() => {
    console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>총 할 일의 개수 : {totalCount}</div>
      <div>완료된 할 일 : {doneCount}</div>
      <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      <input
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch} value={search}
      />
      {/*{Array.filter((item) => item.hobby === "축구");});} */}
      <div className="list_wrapper">
        {todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())).map((it) => (
          <TodoItem key={it.id} {...it}/>
          ))}
      </div>
    </div>
  );
};
export default TodoList;