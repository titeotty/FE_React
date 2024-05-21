import "./TodoItem.css";

const TodoItem = ({id, content, isDone, createdDate, onDelete, onUpdate}) => {
  const onClickDelete=()=>{
    onDelete(id);
    return;
  }
  const onChangeCheckBox=()=>{
    onchange(id);
    return;
  }

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        {/* <input type="checkbox" checked={isDone.onUpdate}/> */}
        <input type="checkbox" checked={isDone} onChange={onChangeCheckBox}/>
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
export default TodoItem;
