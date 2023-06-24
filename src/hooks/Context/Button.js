import UserContext from "./UserContext";
import {useContext} from "react";

export function Button() {
    const {setUserOne} = useContext(UserContext);
    return (
        <button onClick={()=> {setUserOne("Abdullah AlWajih")}}>
            Update User
        </button>
    )
}
