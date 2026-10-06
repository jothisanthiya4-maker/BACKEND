import { useState } from "react";

const App = () => {

  let a= 1
  const handleclick=()=>{
    a++
    console.log(a);
    }

     let [name,setName]=useState("Arun")

     let [counter,setCounter]=useState(0)

     let[text,setText]=useState(true)

     const handleClick=()=>{
        setText(!text)
     }
  return (
    <>
      <h1>{a}</h1>
      <button onClick={handleclick}>click me</button>

      <div>
        <h2>
          {name}
        </h2>
        <button onClick={()=> setName("Kumar")}>Name change </button>

        <h1>
          {counter}
        </h1>
        <button onClick={()=>setCounter(counter+1)}>increase</button>
        <button onClick={()=>setCounter(counter-1)}>decrease </button>
        <button onClick={()=>setCounter(0)}>reset</button>

        <h2>{text?"welcome to react":""} </h2>
        <button onClick={handleClick}>click to hide </button>

      </div>

    </>
  )
}

export default App
