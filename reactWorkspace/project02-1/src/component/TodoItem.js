import "./TodoItem.css";
import React from 'react';
import { useContext } from 'react';
import { TodoStateContext } from "../App";

const TodoItem = ({ id, content, isDone, createdDate }) => {

  const {onDelete, onUpdate} = useContext(TodoStateContext);
  
  console.log(`${id} TodoItem 업데이트`);

  const onClickDelete = () => {
    onDelete(id);
    return;
  };

  const onChangeCheckbox = () => {
    onUpdate(id);
    return;
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button> 
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
