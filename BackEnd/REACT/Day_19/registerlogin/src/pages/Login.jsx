
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState({ email: "", password: "" })

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const getData = JSON.parse(localStorage.getItem("userData"))

  if (!getData) {
    alert("you are not a valid user")
    navigate('/')
  }

  const handleLogin = (e) => {
    e.preventDefault()

    if (input.email == "" || input.password == "") {
      alert('fill all the feild')
      return
    }

    const checkUser = getData.find((e) => e.email == input.email && e.password == input.password)

    if (!checkUser) {
      alert('please check the detail and try again')
      return
    }

    localStorage.setItem("isActiveUser", JSON.stringify(checkUser))
    setInput({ email: "", password: "" })
    alert('login successfull')
    navigate('/home')
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="w-96 bg-white p-8 rounded-lg shadow-md flex flex-col gap-5">

          <h2 className="text-3xl font-semibold text-center">Login</h2>

          <input
            type="email"
            className="border border-gray-300 rounded p-3 outline-none focus:border-blue-500"
            placeholder="Enter email"
            value={input.email}
            name="email"
            onChange={handleInput}
          />

          <input
            type="password"
            className="border border-gray-300 rounded p-3 outline-none focus:border-blue-500"
            placeholder="Enter password"
            value={input.password}
            name="password"
            onChange={handleInput}
          />

          <input
            type="submit"
            value="Login"
            className="bg-blue-600 text-white p-3 rounded cursor-pointer hover:bg-blue-700"
          />

        </form>
      </div>
    </>
  )
}

export default Login
