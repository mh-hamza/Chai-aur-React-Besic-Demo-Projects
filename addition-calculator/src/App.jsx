import React, { useState } from 'react'
import './App.css'

const App = () => {

  let [answer, setAnswer] = useState(0)
  let [firstValue, setFirstValue] = useState()
  let [secondValue, setSecondValue] = useState()

  const handleAddition = () => {
    const result = parseInt(firstValue) + parseInt(secondValue);
    setAnswer(result);
  };

  return (
    <div className='container'>
      <h1>Addition Calculator</h1>
      <label htmlFor="">First Value:
        <input 
         type="number" 
         value={firstValue}
         onChange={(e)=>setFirstValue(e.target.value)}
        />
      </label>
      <label htmlFor="">Second Value:
        <input 
         type="number"
         value={secondValue} 
         onChange={(e)=>setSecondValue(e.target.value)}
         />
      </label>
      <button onClick={handleAddition}>Add</button>
      <p>Answer is : {answer}</p>
    </div>
  )
}

export default App