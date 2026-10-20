import React, { useState } from 'react'

const AddDltStu = () => {
    const[name,setName]=useState("")
    const[details,setDetails]=useState([])
    
    const handleclick=()=>{
        setDetails((p)=>[...p,name])
        setName("")
    }

    const handledelete=(ele)=>{
        const filterdata=details.filter((e)=>e!=ele)
        setDetails(filterdata)
    }
   
  return (
    <>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <button onClick={handleclick}>Add</button>
    <div>
       {
        details.map((e,i)=>(
            <div key={i}>
                <h4 >{e} </h4>
            <button onClick={()=>handledelete(e)}>delete</button>
            </div>
        ))
       }
    </div>
    </>
  )
}

export default AddDltStu
