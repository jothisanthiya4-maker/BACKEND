import React, { useState } from 'react'

const App = () => {

  const[user,setUser]=useState({name:"",number:"",email:""})
  const[userdetail,setUserDetail]=useState([])
  const[update,setUpdate]=useState(true)

  const details=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    // console.log(user);
    
  }

  const register=(e)=>{
    e.preventDefault()
    // console.log(!user.name.trim() || );

    if(!user.name.trim() || !user.number.trim() || !user.email.trim()){
      alert("Please enter all the details")
      return
    }

    setUserDetail((p)=>[...p,user])
    // console.log(userdetail);
    setUser({name:"",number:"",email:""})
    
  }

  const handleEdit=(ele)=>{
    userdetail.map((e)=>{
      e.email==ele.email?setUser(ele):e
    })
    setUpdate(!update)
  }

  return (
    <>
      <div>
        <form>
        <input type="text" value={user.name} name='name' onChange={details}/>
        <input type="number" value={user.number} name='number' onChange={details}/>
        <input type="email" value={user.email} name='email' onChange={details}/>
        {update?<button onClick={register}>Register</button>:<button >Register</button>}
      </form> 
      <div>
        <table>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
        {userdetail.map((e,i)=>(
          
              <tbody key={i+1}>
                <tr>
                  <td>{i+1} </td>
                  <td>{e.name} </td>
                  <td>{e.number} </td>
                  <td>{e.email} </td>
                  <td><button onClick={()=>handleEdit(e)}>Edit</button> <button>Delete</button></td>
                </tr>
              </tbody>
                
              
          
        ))}
        </table>
      </div>
      </div>   
    </>
  )
}

export default App
