import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "PLUS" :
            return state + action.data;
        case "MINUS" :
            return state - action.data;
        case "INIT" :
            return 0;
        default :
        return state;
    }
}

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h4>TEST</h4>
            <div>
                {count}
            </div>
            <div>
                <button onClick={()=> dispatch({type:"PLUS", data : 1})}>
                    +
                </button>
                <button onClick={()=> dispatch({type:"MINUS", data : 1})}>
                    -
                </button>
                <button onClick={()=> dispatch({type:"INIT"})}>
                    0으로 초기화
                </button>
            </div>
        </div>
    );
}
export default TestComp;