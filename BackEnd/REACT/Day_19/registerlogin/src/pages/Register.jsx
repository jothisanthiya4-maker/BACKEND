
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  let navigate = useNavigate()

  const [userinp, setUserinp] = useState({ name: "", email: "", password: "" })

  const handleInput = (e) => {
    setUserinp({ ...userinp, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (userinp.name == "" || userinp.email == "" || userinp.password == "") {
      alert('please fill all the field')
      return
    }

    const getData = JSON.parse(localStorage.getItem("userData")) || []

    const checkEmail = getData.find((e) => e.email == userinp.email)
    if (checkEmail) {
      alert('this email is already registered')
      return
    }

    const obj = { id: Date.now(), name: userinp.name, email: userinp.email, password: userinp.password }
    getData.push(obj)
    localStorage.setItem("userData", JSON.stringify(getData))
    setUserinp({ name: "", email: "", password: "" })
    alert("successfully registered")
    navigate('/login')
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="w-96 bg-white p-8 rounded-lg shadow-md flex flex-col gap-5">

          <h2 className="text-3xl font-semibold text-center">Register</h2>

          <input
            type="text"
            className="border border-gray-300 rounded p-3 outline-none focus:border-blue-500"
            placeholder="enter name"
            onChange={handleInput}
            value={userinp.name}
            name="name"
          />

          <input
            type="email"
            className="border border-gray-300 rounded p-3 outline-none focus:border-blue-500"
            placeholder="enter email"
            onChange={handleInput}
            value={userinp.email}
            name="email"
          />

          <input
            type="password"
            className="border border-gray-300 rounded p-3 outline-none focus:border-blue-500"
            placeholder="enter password"
            onChange={handleInput}
            value={userinp.password}
            name="password"
          />

          <input
            type="submit"
            value="Register"
            className="bg-blue-600 text-white p-3 rounded cursor-pointer hover:bg-blue-700"
          />

        </form>
      </div>
    </>
  )
}

export default Register
