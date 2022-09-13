import {useRef} from 'react'
import Button from './Button' 

export default function ImperativeHandleDemo() {
    const buttonRef = useRef(null);

    return (
        <div>
            <button
                onClick={ () => {
                    buttonRef.current.alertToggle();
                }}
            >
                Button from parent
            </button>
            <Button ref={buttonRef}/>
        </div>
    )
}
