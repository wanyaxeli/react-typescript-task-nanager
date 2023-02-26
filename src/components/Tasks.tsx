import React,{FC,MouseEvent} from "react";
import {state} from '../App'
interface Props{
    task:state[]
    setTask:React.Dispatch<React.SetStateAction<any>>
}
const Tasks:FC<Props>=({task,setTask}:Props)=>{
    const handleDelete=(id:number):void=>{
    const removed=task.filter(item=>item.id!==id)
     setTask(removed)
    }
    return(
        <div className="taskWrappper">
            <ul>
               {task.map((item)=>{
                return(
                    <li key={item.id}><p>{item.task}</p><span onClick={()=>handleDelete(item.id)}>&times;</span></li>
                )
               })}
            </ul>
        </div>
    )
}
export default Tasks