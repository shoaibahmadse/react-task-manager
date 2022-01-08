import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
function App() {
  const [showAddtask,setshowAddtask]=useState(false)
  const [tasks,setTasks]=useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Dinner at resturant",
      day: "Feb 3th at 11:30am",
      reminder: true
    },
  ])
  const addTask=(task)=>{
    const id= Math.floor(Math.random()*1000)+1
    const newTask={id,...task}
    console.log(newTask)
    setTasks([...tasks,newTask])
  }
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  const toogleRemainder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder}:task))    
  }
    return (
    <div className="container">
      <Header onAdd={()=>setshowAddtask(!showAddtask)}showAdd={showAddtask} />
      {showAddtask && <AddTask  onAdd={addTask}/>}
      {tasks.length >0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleRemainder}/>):<h2>No Task</h2>}
    </div>
  );
}

export default App;
