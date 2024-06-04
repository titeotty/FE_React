import { useContext } from "react";
import { MyContext } from "../App";

function Sidebar() {
    const value = useContext(MyContext) //value에 MyContext를 할당하여 사용
    return (
        <div>
            <h6> {value} </h6>
            Sidebar
        </div>
    );
}

export default Sidebar;