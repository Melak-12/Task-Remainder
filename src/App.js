import Header from "./components/header";
import Tasks from './components/Tasks';
import Footer from "./components/Footer";
import AddTask from './components/AddTask';
import {useState} from 'react'
function App() {
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: 'class',
      day:'satarday and friday',
      reminder:false
  },
  {
      id: 2,
      text: 'meeting',
      day:'monday and  friday',
      reminder:true
  },
  {
      id: 3,
      text: 'wlaking',
      day:'monday to friday',
      reminder:true
  }
  ])
  //delete tasks from
  const deleteTask = (id)=>{
   
    setTasks(tasks.filter(e=>e.id!=id))
    
  }
  //double clicke on toggle 
  const toggleReminder =(id)=>{
   setTasks(tasks.map(e=>e.id===id?{...e,reminder:!e.reminder}:e))
  }
  //add task to list
  const addTask =(e)=>{
    const id =Math.floor(Math.random()*10000)+1
    const newTask={id,...e}
    setTasks([...tasks,newTask])
    console.log(id);
   
  }
   return (
   
    <div className="container">
      <Header 
        onAdd={()=>setShowAddTask(!showAddTask)}
        showAdd={(showAddTask)}
      />
       {showAddTask && <AddTask onAdd={addTask}/>}
       {tasks.length>0?( 
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}
      />):('No task available ')}
    <Footer/>
     
    </div> 
     
  ); 
}

export default App;
