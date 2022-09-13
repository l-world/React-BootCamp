import React,{ useReducer } from 'react'
import axios from 'axios'

const reducer = (state:any,action:any) => {
    switch (action.type) {
        case "Increment":
            return {count:state.count + 1,showText:state.showText}
        case "ToggleShowText":
            return {count:state.count,showText:!state.showText};
        default: 
            return state;
    }
}

export default function ReducerDemo() {
    const [state,dispatch] = useReducer(reducer,{count:0,showText:true})
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={ () => {
                dispatch({type:"Increment"})
                dispatch({type:"ToggleShowText"})
            }}>Click Here</button>
            { state.showText && <p>This is a Text</p>}
        </div>
    )
}
