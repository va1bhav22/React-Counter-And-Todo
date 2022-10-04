import React from 'react'
import { useState } from 'react'

const Counter = () => {
 
  const [count, SetCount]=useState(0);
  const [state,setState]=useState("vaibhav")
  const handlechangename=()=>
  {
   setState("jadhav")
  }
  return (
    <>
      <h1>Counter :{count} </h1>
      <h1>name : {state}</h1>
      <button onClick={()=>SetCount(count+1)}>Inc</button>
      <button onClick={()=>SetCount(count-1)}>Dec</button>
      <button onClick={handlechangename}>handlechangename</button>
      
    </>
  )
}

export default Counter