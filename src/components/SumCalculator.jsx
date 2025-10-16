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
      <h3>Sum: {sum}</h3>
    </div>
  )
}

export default SumCalculator