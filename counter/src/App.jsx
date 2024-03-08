import React, { useState } from 'react'


const App = () => {

  const [isActive, setIsActive] = useState(false);
  
  const toggleMenu =()=>{
  setIsActive(!isActive);
  }
 



  return (
    <>
      <div className='container'>
        <div>
          <h1>LOGO</h1>
        </div>
        <ul className={isActive ? 'active':""}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
        <div className='baricon' onClick={toggleMenu}>{isActive ? <>&times;</> : <>&#x2630;</>}</div>
      </div>
    </>
  )
}

export default App