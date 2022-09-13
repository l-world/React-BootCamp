import {useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function UseId() {
    const [id,setId] = useState("");
    useEffect(() =>{
        setId(uuidv4());
    },[]);
    return id;
}
