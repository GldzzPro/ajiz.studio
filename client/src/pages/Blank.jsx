import React from 'react'
import { useNavigate } from 'react-router-dom'
const Blank = () => {
    const nav = useNavigate();
  
    return (
        <button onClick={()=>nav("/home")}>go to home </button>
        
    )
}

export default Blank
