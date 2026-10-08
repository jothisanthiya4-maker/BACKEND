import { useState } from "react"

const App = () => {

  const [arrobj,setArrObj]=useState([
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Priya", salary: 30000 },
  { id: 3, name: "Kumar", salary: 28000 }
])

 const addemp=()=>{
    setArrObj((prev)=>[...prev,{
  id: 4,
  name: "Bala",
  salary: 32000
}])
 }

 const salaryup=()=>{
  let result= arrobj.map((e)=>e.id==2?{...e,salary:35000}:e)
  setArrObj(result)
 }


  return (
    <>
    <div>
      {arrobj.map((e,i)=>(
        <div key={i+1}>
            <h3>{e.name} </h3>
            <p>{e.salary} </p>
        </div>
      ))}
      <button onClick={addemp}>add employee</button>
      <button onClick={salaryup}>update sal</button>
    </div>
    </>
  )
}

export default App
