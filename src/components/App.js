
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

          <p>Sum Calculator</p>
      <input
      onChange={(e)=>{
        const val = parseInt(e.target.value)
        setCount(val)
      }}
      type="number"/>


      <h1>{sum}</h1>
    </div>
  )
}

export default App
