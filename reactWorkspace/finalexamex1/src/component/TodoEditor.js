import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();  //할일 입력 폼 제어용
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () => {
        if(!content) {
            inputRef.current.focus();
            return; 
        }
        onCreate(content);
        setContent(""); //새 값을 추가 후 content가 빈 문자열이 되고 초기화가 됨
    };
    const onKeyDown = (e) => {
        if(e.keyCode === 13) {  //키코드 13은 엔터키
            onSubmit();
        }
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editor_wrapper">
                <input 
                ref = {inputRef}
                value = {content} 
                onChange={onChangeContent} 
                onKeyDown={onKeyDown}
                placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;