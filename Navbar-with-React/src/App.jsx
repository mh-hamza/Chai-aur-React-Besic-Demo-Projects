import React from 'react'
import "./App.css"
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';


function App() {

  const [isActive, setIsActive] = useState(false);

  const navActive = ()=>{
    return setIsActive(!isActive);
  }
  return (
    <>
      <nav>
        <h1>LOGO</h1>
        <ul className={isActive ? "active": ""}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">User</a></li>
          <li><a href="#">Github</a></li>
        </ul>
        {
          isActive? <IoClose onClick={navActive}/> : <FaBars onClick={navActive} className='bar-icon'/>
        }
      </nav>
      <div className='bg-image'>
        <img src="https://images.unsplash.com/photo-1559305289-4c31700ba9cb?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bg image" />
      </div>
    </>
  )
}

export default App