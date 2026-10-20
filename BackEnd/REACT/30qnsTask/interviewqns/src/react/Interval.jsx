import React, { useEffect, useState } from 'react'

const Interval = () => {
    const[message,setMessage]=useState("")

    useEffect(()=>{
        const msg = setTimeout(()=>{
            setMessage("welcome")
        },3000)
    },[])
  return (
    <>
    {message}
    </>
  )
}

export default Interval
