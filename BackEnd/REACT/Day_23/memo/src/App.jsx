import { useEffect, useState } from "react"

const App = () => {

  const[theme,settheme]=useState(true)
  const [data,setdata]=useState([])
  const[input,setinput]=useState("")


useEffect(()=>{

  const fetchdata=async()=>{
    const fetched=await fetch('https://dummyjson.com/users')
    const parse= await fetched.json()
    setdata(parse.users)
  }
  fetchdata()
},[])

  return (
    <>
    <div>
        <div className={theme?"light":"dark"}>{theme?"Light":"dark"}</div>
        <button onClick={()=>settheme((p)=>!p)}>{theme?"dark":"light"}</button>
    </div>


    <div>

      <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>

      {data.map((e,i)=>(
        <div key={i}>
            <h3>{e.firstName}</h3>
            <h3>{e.email}</h3>
            <h3>{e.age}</h3>
            <h3>{e.gender}</h3>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
