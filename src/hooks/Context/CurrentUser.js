import {useContext} from "react";
import UserContext from "./UserContext";

export function CurrentUser() {

    const {userOne} = useContext(UserContext);

    return (
        <div>
            {userOne}
        </div>
    )
}
