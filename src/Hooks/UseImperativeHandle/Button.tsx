import {useImperativeHandle,forwardRef,useState} from 'react'

const Button  = forwardRef( (props,ref) => {
    const [toggle,setToggle] = useState(false);

    useImperativeHandle(ref,() => ({
        alertToggle() {
            setToggle(!toggle);
        }
    }))

    return (
        <>
            <button
                
            >Button from child</button>
            {toggle && <h1>Toggle Text</h1>}
        </>
    )
})

export default Button;
