import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import TestComp from "./component/TestComp";
import { useCallback, useReducer, useRef, React } from 'react';

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
    content: "ㄱㄱ",
    createdDate: new Date().getTime(),
  }
];

//action은 촉매함수
function reducer(state, action) {
  switch (action.type) {
      case "DELETE":
          return state.filter((it) => it.id !== action.targetId);
      case "CREATE":
          return [action.newItem, ...state];
      case "UPDATE":
          return state.map((it) =>
            it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
          );
      default:
          return state;
  }
}

export const TodoStateContext = React.createContext();

function App() {

  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const idRef = useRef(3);
  
  const onDelete = useCallback ((targetId) => {
    dispatch({ type: "DELETE", targetId });
  }, []);
    //targetId -> 왼쪽 값과 오른쪽 값이 동일한 경우엔 targetId와 같이 한번만 작성해도 됨
  

  const onUpdate = useCallback ((targetId) => {
    dispatch({ type: "UPDATE", targetId });
  }, []);
  

  const onCreate = useCallback ((content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    dispatch({ type: "CREATE", newItem });
    idRef.current += 1;
  }, []);

  //   useState 사용 시 

//   const [todo, setTodo] = useState(mockTodo);
//   const idRef = useRef(3);
  
//   const onDelete =(targetId)=>{
//     setTodo(todo.filter((it)=>it.id !== targetId));
//   };

//   const onUpdate =(targetId)=>{
//     setTodo(
//       todo.filter((it)=> {
//         if(it.id===targetId)
//           return {isDone: !it.isDone}
//       })
//     );
//   };

//   const onCreate = (content) => {
//     const newItem = {
//       id: idRef.current,
//       content: content,
//       isDone: false,
//       createdDate: new Date().getTime(),
//     };
//     setTodo([...todo, newItem]);
//     idRef.current += 1;
//   };

  return (
    <div className="App">
      <TestComp />
      <TodoStateContext.Provider value = {{todo, onCreate, onUpdate, onDelete} }>
      <Header />
      <TodoEditor/>
      <TodoList/>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
