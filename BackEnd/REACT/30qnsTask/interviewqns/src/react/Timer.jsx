import React, { useEffect, useState } from 'react'

const Timer = () => {
    const[count,setCount]=useState(false)
      const[number,setNumber]=useState(0)
    
      const handleclick=()=>{
        setCount(true)
      }
      useEffect(()=>{
        if(count){
        let timer =setInterval(() => {
          setNumber((p)=>p+1)
        }, 1000);
    
        return ()=> clearInterval(timer)
        }
      },[count])
    
  return (
    <>
    <h3>{number} </h3>
    <button onClick={handleclick}>start</button>
    <button onClick={()=>setCount(false)}>pause</button>
    <button onClick={()=>{setCount(false); setNumber(0)}}>reset</button>
    </>
  )
}

export default Timer
