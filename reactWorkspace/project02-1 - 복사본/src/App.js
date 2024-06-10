import "./App.css";
import React from 'react';
import { useRef, useReducer, useCallback } from 'react';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import TestComp from "./component/TestComp";

export const TodoStateContext = React.createContext();

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
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const idRef = useRef(3);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: "DELETE", targetId }); 
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({ type: "UPDATE", targetId }); 
  }, []);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  }, []);

  return (
    <div className="App">
      <TestComp />
      <TodoStateContext.Provider
        value={{ todo, onCreate, onUpdate, onDelete }}
      >
        <Header />
        <TodoEditor />
        <TodoList />
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;