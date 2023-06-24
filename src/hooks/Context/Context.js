import {useState} from "react";
import {User} from "./User";
import UserContext from "./UserContext";


export function Context({children}) {
    const [userOne, setUserOne] = useState('Abdullah');
    const userValues = {userOne, setUserOne}
    return (
        <UserContext.Provider value={userValues}>
            <User/>

        </UserContext.Provider>
    )
}
