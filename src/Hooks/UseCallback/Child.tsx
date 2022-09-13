import {useEffect} from 'react'

export default function Child({returnComment}) {
    useEffect(() => {
        console.log("FUNCTION WAS CALLED");
      }, [returnComment]);
    
    return <div>{returnComment("Echo ")}</div>;
}

