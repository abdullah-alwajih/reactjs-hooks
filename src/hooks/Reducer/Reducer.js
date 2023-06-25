import React, {useReducer} from "react";
import {initialState, reducer} from "./ReducerForm";


export function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleReset = () => dispatch({type: 'reset'})

    const handleChange = (e) => {
        dispatch({
            type: 'input',
            field: e.target.name,
            value: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Username:
                <input type="text" name="username" onChange={handleChange} value={state.username}/>
            </label><br/>
            <label> Email:
                <input type="email" name="email" onChange={handleChange} value={state.email}/>
            </label><br/>
            <label> Note:
                <textarea name="notes" onChange={handleChange} value={state.notes}> </textarea>
            </label><br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <br/>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    )
}
