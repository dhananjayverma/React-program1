import React from 'react'
import { useState } from 'react'

export default function Count() {
    const[amount,setAmount]=useState(100);

    const handleDeposit=()=>{
        setAmount((prevAmount)=>prevAmount+100);
        setAmount((prevAmount)=>prevAmount+100); 
        setAmount((prevAmount)=>prevAmount+100);
   
//           setAmount(amount+100)
   
//    setAmount(3);
//    setAmount(8)
    }
    const handleWithdraw=()=>{
      setAmount(amount-100)
    }
  return (
    <div>
  <h1>Current Amount:{amount}</h1>
  <button onClick={handleDeposit}>depost 100</button>
  <button onClick={handleWithdraw}>withdraw 100</button>      
    </div>
  )
}
