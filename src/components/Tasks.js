import Task from './Task';
const Tasks = ({tasks,onDelete,onToggle}) => {
  return (
    <>
        {tasks.map(e=>(
        <Task 
            key={e.id} 
            e={e} 
            onDelete={onDelete}
            onToggle={onToggle}
        />
        ))}
    </>
  )
}

export default Tasks