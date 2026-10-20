import React, { useState } from 'react'

const FormHandling = () => {

    const[details,setDetails]=useState({name:"",email:"",age:""})
    const[userdata,setuserdata]=useState([])

    const handleChange=(e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        if(details.name=="" || details.email=="" || details.age==""){
            alert("please fill all the field")
            return
        }
        setuserdata((p)=>[...p,details])
        setDetails({name:"",email:"",age:""})
    }

  return (
    <>
    <form action="">
    <input type="text" placeholder='enter name' value={details.name} name='name' onChange={handleChange}/>
    <input type="email" placeholder='enter email' value={details.email} name='email' onChange={handleChange} />
    <input type="number" placeholder='enter age' value={details.age} name='age' onChange={handleChange}/>
    <input type="submit" onClick={handlesubmit}/>
    </form>

    <div>
        {userdata.map((e,i)=>(
            <div key={i}>
                <h2>{e.name} </h2>
                <h3>{e.age} </h3>
            </div>
        ))}
    </div>
    </>
  )
}

export default FormHandling
