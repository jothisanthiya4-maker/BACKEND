import React, { useState } from 'react'

const Toggle = () => {
  const [show,setShow]=useState(true)

  const handleClick =()=>{
    setShow(!show)
  }

  return (
    <div>
      {show?<p>I wake up at six in the morning. First, I brush my teeth and wash my face. Then I make a cup of tea and drink it slowly. By eight, I am ready to start my day. A quiet morning helps me feel calm and ready for whatever comes next.</p>:""}
      {show?<button onClick={handleClick}>click to hide</button>:<button onClick={handleClick}>click to show</button>}
    </div>
  )
}

export default Toggle
