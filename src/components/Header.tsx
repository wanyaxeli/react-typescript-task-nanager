import React ,{FC,useState,ChangeEvent}from "react";
import {state} from '../App'
interface Props {
    setTask:React.Dispatch<React.SetStateAction<any>>
}
const HeaderDiv:FC<Props>= ({setTask}:Props)=>{
    const[value,setValue]=useState<string>('')
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
     setValue(e.target.value)
    }
    const  handleAdd=()=>{
        const id = Math.floor(Math.random() * 100)
        let newValue= Object.assign({},{id:id,task:value})
        setTask((pre:state[])=>[...pre,newValue])
    }
   return(
    <div>
        <input type='text' onChange={handleChange} placeholder='Add task...' />
        <button onClick={handleAdd}>Add</button>
    </div>
   )
}
export default HeaderDiv