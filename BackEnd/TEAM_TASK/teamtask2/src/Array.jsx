import React, { useState } from 'react'

const Array = () => {
    const[input,setInput]=useState("")

    const[array,setArray]=useState([])
    
    
  return (
    <>
    <div>
        <input type="text" onChange={handleChange}/>
        <button>add</button>

    </div>
    </>
  )
}

export default Array
