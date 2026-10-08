import React, { useState } from 'react'

const Home = () => {

  const [arr,setArr]=useState(["HTML", "CSS", "JavaScript"])

  const addReact=()=>{
    setArr((prev)=>[...prev,"React"])
  }

  const updatejs =()=>{
    let copy=[...arr]
    let result=copy.map((e)=>e=="JavaScript"?"Advanced js":e)
    setArr(result)

  }

  return (
    <>
      <div>
        {arr.map((e,i)=>(
          <div key={i+1}>
              <li>{e}</li>
          </div>
        ))}
        <button onClick={addReact}>add react</button>
        <button onClick={updatejs}>update</button>
        </div>    
    </>
  )
}

export default Home
