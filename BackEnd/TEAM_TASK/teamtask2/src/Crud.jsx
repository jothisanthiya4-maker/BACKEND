
import React, { useState, useEffect } from 'react'

const App = () => {

  const [user, setUser] = useState({
    name: "",
    number: "",
    email: ""
  })

  const [userdetail, setUserDetail] = useState([])
  const [update, setUpdate] = useState(true)
  const [index, setIndex] = useState(null)

  // Get data from localStorage when page loads
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("users")) || []
    setUserDetail(data)
  }, [])

  const details = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const register = (e) => {
    e.preventDefault()

    if (!user.name.trim() || !user.number.trim() || !user.email.trim()) {
      alert("Please enter all the details")
      return
    }

    const emailExist = userdetail.some(
      (e) => e.email.toLowerCase().trim() === user.email.toLowerCase().trim()
    )

    if (emailExist) {
      alert("Email already exists")
      return
    }

    const copy = [...userdetail, user]

    setUserDetail(copy)
    localStorage.setItem("users", JSON.stringify(copy))

    setUser({ name: "", number: "", email: "" })
  }

  const handleEdit = (ele, ind) => {
    setUser({ ...ele })
    setUpdate(false)
    setIndex(ind)
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    const copy = [...userdetail]
    copy[index] = user

    setUserDetail(copy)
    localStorage.setItem("users", JSON.stringify(copy))

    setUpdate(true)
    setIndex(null)
    setUser({ name: "", number: "", email: "" })
  }

  const handleDelete = (id) => {
    const deleteData = userdetail.filter((e, i) => i !== id)

    setUserDetail(deleteData)
    localStorage.setItem("users", JSON.stringify(deleteData))
  }

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={user.name}
            onChange={details}
          />

          <input
            type="number"
            name="number"
            placeholder="Enter number"
            value={user.number}
            onChange={details}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={details}
          />

          {update
            ? <button onClick={register}>Register</button>
            : <button onClick={handleUpdate}>Update</button>
          }
        </form>

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

          <tbody>
            {userdetail.map((e, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.number}</td>
                <td>{e.email}</td>
                <td>
                  <button onClick={() => handleEdit(e, i)}>
                    Edit
                  </button>

                  <button onClick={() => handleDelete(i)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
