import React,{useRef}from 'react'

export default function RefDemo() {
    const inputRef = useRef(null);
    const onClick = () =>{
        // console.log(inputRef.current);
        inputRef.current.focus();
    }
    return (
        <div>
            <h1>Echo</h1>
            <input type="text" placeholder='example......' ref={inputRef}/>
            <button onClick={onClick}>ChangeName</button>
        </div>
    )
    }
