import { useEffect, useState } from 'react'
import React from "react";
import './../styles/App.css';

const App = () => {

  const [count, setCount] = useState(0)
  const [sum, setSum] = useState(0)

  useEffect(()=>{
    setSum(sum=>sum+count)
  },[count])
  
  return (
    <div>
        {/* Do not remove the main div */}

<h1>Sum Calculator</h1>
      <input
      onChange={(e)=>{
        setCount(parseInt(e.target.value))
      }}
      type="number" />
      <h3>Sum: {sum}</h3>
    </div>
  )
}

export default App
