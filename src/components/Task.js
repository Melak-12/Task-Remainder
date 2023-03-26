import React from 'react'
import {FaTimes} from 'react-icons/fa';

const Task = ({e,onDelete,onToggle}) => {
  return (
    <div className={`task ${e.reminder?'reminder':''}`} onDoubleClick={() => onToggle(e.id)}>
        <h3>{e.text}
            <FaTimes 
                onClick={()=>onDelete(e.id)}
                style={{color:'red',cursor:'pointer'}}
            />
        </h3>
        <p>{e.day}</p>
    </div>
  )
}

export default Task