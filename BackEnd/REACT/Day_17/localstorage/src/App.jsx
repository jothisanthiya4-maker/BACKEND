
import React, { useState, useEffect, useRef } from 'react'

const App = () => {

  // TASK 1 - DIGITAL TIMER
  const [count, setCount] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) {
      return
    }

    const timer = setInterval(() => {
      setCount((p) => p + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [running])

  const handleStart = () => {
    setRunning(true)
  }

  const handleStop = () => {
    setRunning(false)
  }

  const handleReset = () => {
    setRunning(false)
    setCount(0)
  }


  // TASK 2 - AUTOMATIC WELCOME MESSAGE
  const [message, setMessage] = useState("Please Wait...")
  const [restart, setRestart] = useState(0)

  useEffect(() => {
    setMessage("Please Wait...")

    const timeout = setTimeout(() => {
      setMessage("Welcome to React!")
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [restart])

  const handleRestart = () => {
    setMessage("Please Wait...")
    setRestart((p) => p + 1)
  }


  // TASK 3 - SAVE NAME, AGE AND EMAIL TO LOCALSTORAGE
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: ""
  })

  const [users, setUsers] = useState(() => {
    const savedData = localStorage.getItem("users")
    return savedData ? JSON.parse(savedData) : []
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((p) => ({
      ...p,
      [name]: value
    }))
  }

  const handleAdd = (e) => {
    e.preventDefault()

    if (
      !formData.name.trim() ||
      !formData.age.trim() ||
      !formData.email.trim()
    ) {
      alert("Please fill all fields")
      return
    }

    const updatedUsers = [...users, formData]

    setUsers(updatedUsers)

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    )

    setFormData({
      name: "",
      age: "",
      email: ""
    })
  }


  return (
    <div className="p-6 space-y-10">

      {/* TASK 1 */}
      <section>
        <h2>Task 1 - Digital Timer</h2>

        <h1>{count} seconds</h1>

        <button type="button" onClick={handleStart}>
          Start
        </button>

        <button type="button" onClick={handleStop}>
          Stop
        </button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </section>


      {/* TASK 2 */}
      <section>
        <h2>Task 2 - Welcome Message</h2>

        <h3>{message}</h3>

        <button type="button" onClick={handleRestart}>
          Restart
        </button>
      </section>


      {/* TASK 3 */}
      <section>
        <h2>Task 3 - User Details</h2>

        <form onSubmit={handleAdd}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Enter age"
            value={formData.age}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />

          <button type="submit">
            Save Details
          </button>
        </form>

        <h3>Saved Users</h3>

        {users.map((item, i) => (
          <div key={i}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Email: {item.email}</p>
            <hr />
          </div>
        ))}
      </section>

    </div>
  )
}

export default App
