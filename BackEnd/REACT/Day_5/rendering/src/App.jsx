// import React from 'react'

import { useRef } from "react"

// const App = () => {

// let studentName = "Arun"
// let age = 22
// let course = "React"
// let fees = 15000

// let skills = ["HTML", "CSS", "JavaScript", "React", "Node"]

// let students = [

//     { id: 1, name: "Arun", course: "React" },

//     { id: 2, name: "Priya", course: "Node" },

//     { id: 3, name: "Kumar", course: "MongoDB" }

// ]
//   return (
//     <>
//     <div>
//       <h2>{studentName} </h2>
//       <p>{age}</p>
//       <p>{course} </p>
//       <p>{fees} </p>
//     </div>

//     <div>
//       {skills.map((e,i)=>(
//         <div key={i+1}>
//           <li>{e}</li>
//         </div>
//       ))} 
//     </div>

//     <div>
//       {students.map((e)=>(
//         <div key={e.id}>
//           <h2>{e.name} </h2>
//           <h3>{e.course} </h3>
//         </div>
//       ))}
//     </div>
//     </>
//   )
// }

// export default App




// const App = () => {

//   const showref = useRef("")

//   const handleclick=()=>{
//     showref.current.innerText="jothi"
//   }

//   return (
//     <>
//     <div>
//       <h1 ref={showref}></h1>
//       <button onClick={handleclick}>click</button>
//     </div>
//     </>
//   )
// }

// export default App



const App = () => {

  const countref=useRef(0)

  const handleclick=()=>{

    let count= countref.current

    countref.innerText = count + 1
    console.log(countref.innerText);
    

  }
  return (
    <>
    <h2 ref={countref}></h2>
    <button onClick={handleclick}>click to increase</button>
    </>
  )
}

export default App

