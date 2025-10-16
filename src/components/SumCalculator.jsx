import React, { useEffect, useState } from 'react'

const SumCalculator = () => {

      const [count, setCount] = useState(0)
      const [sum, setSum] = useState(0)
    
      useEffect(()=>{
        setSum(sum=>sum+count)
      },[count])
  return (
    <div>
        <h1>Sum Calculator</h1>
      <input
      onChange={(e)=>{
        setCount(parseInt(e.target.value))
      }}
      type="number" />
      <p>Sum: {sum}</p>
    </div>
  )
}

export default SumCalculator