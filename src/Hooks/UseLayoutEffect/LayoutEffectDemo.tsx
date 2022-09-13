import { useEffect,useLayoutEffect,useRef } from 'react'

export default function LayoutEffectDemo() {
    const inputRef = useRef(null);
    useLayoutEffect(() => {
        console.log(inputRef.current.value); 
    },[]);
    useEffect(() => {
        inputRef.current.value = "Hello World!";
    },[]);
    return (
        <div>
            <input type="text" value="ECHO" ref={inputRef}/>
        </div>
    )
}
