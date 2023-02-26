import React, { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderDiv from './components/Header';
import Tasks from './components/Tasks';
export interface state {
  id:number;
  task:string
}
function App() {
  const[task,setTask]=useState<state[]>([])
  return (
    <div className="App">
       <HeaderDiv setTask={setTask} />
       <Tasks task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
