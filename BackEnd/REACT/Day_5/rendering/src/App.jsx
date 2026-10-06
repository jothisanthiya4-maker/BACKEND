import React from 'react'

const App = () => {

let studentName = "Arun"
let age = 22
let course = "React"
let fees = 15000

let skills = ["HTML", "CSS", "JavaScript", "React", "Node"]

let students = [

    { id: 1, name: "Arun", course: "React" },

    { id: 2, name: "Priya", course: "Node" },

    { id: 3, name: "Kumar", course: "MongoDB" }

]
  return (
    <>
    <div>
      <h2>{studentName} </h2>
      <p>{age}</p>
      <p>{course} </p>
      <p>{fees} </p>
    </div>

    <div>
      {skills.map((e,i)=>(
        <div key={i+1}>
          <li>{e}</li>
        </div>
      ))} 
    </div>

    <div>
      {students.map((e)=>(
        <div key={e.id}>
          <h2>{e.name} </h2>
          <h3>{e.course} </h3>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
