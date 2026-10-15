
import React, { useState } from 'react'

const App = () => {

  // Task 1 - Student List
  const [student, setStudent] = useState("")
  const [students, setStudents] = useState([])

  const handleStudentChange = (e) => {
    setStudent(e.target.value)
  }

  const handleAddStudent = (e) => {
    e.preventDefault()

    if (!student.trim()) {
      alert("Enter student name")
      return
    }

    setStudents((p) => [...p, student.trim()])
    setStudent("")
  }


  // Task 2 - Course List
  const [course, setCourse] = useState("")
  const [courses, setCourses] = useState([])

  const handleCourseChange = (e) => {
    setCourse(e.target.value)
  }

  const handleAddCourse = (e) => {
    e.preventDefault()

    if (!course.trim()) {
      alert("Enter course name")
      return
    }

    setCourses((p) => [...p, course.trim()])
    setCourse("")
  }

  const handleDeleteCourse = (index) => {
    setCourses((p) => p.filter((item, i) => i !== index))
  }


  // Task 3 - Number List
  const [number, setNumber] = useState("")
  const [numbers, setNumbers] = useState([])

  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }

  const handleAddNumber = (e) => {
    e.preventDefault()

    if (number.trim() === "") {
      alert("Enter a number")
      return
    }

    setNumbers((p) => [...p, Number(number)])
    setNumber("")
  }


  // Task 4 - Fruit List
  const [fruit, setFruit] = useState("")
  const [fruits, setFruits] = useState([])
  const [fruitIndex, setFruitIndex] = useState(-1)

  const handleFruitChange = (e) => {
    setFruit(e.target.value)
  }

  const handleAddFruit = (e) => {
    e.preventDefault()

    if (!fruit.trim()) {
      alert("Enter fruit name")
      return
    }

    if (fruitIndex !== -1) {
      alert("Save the updated fruit first")
      return
    }

    setFruits((p) => [...p, fruit.trim()])
    setFruit("")
  }

  const handleUpdateFruit = (index) => {
    setFruit(fruits[index])
    setFruitIndex(index)
  }

  const handleSaveFruit = (e) => {
    e.preventDefault()

    if (!fruit.trim()) {
      alert("Enter fruit name")
      return
    }

    setFruits((p) =>
      p.map((item, i) =>
        i === fruitIndex ? fruit.trim() : item
      )
    )

    setFruit("")
    setFruitIndex(-1)
  }


  // Task 5 - Employee List
  const [employee, setEmployee] = useState("")
  const [employees, setEmployees] = useState([])
  const [employeeIndex, setEmployeeIndex] = useState(-1)

  const handleEmployeeChange = (e) => {
    setEmployee(e.target.value)
  }

  const handleAddEmployee = (e) => {
    e.preventDefault()

    if (!employee.trim()) {
      alert("Enter employee name")
      return
    }

    if (employeeIndex !== -1) {
      alert("Save the edited employee first")
      return
    }

    setEmployees((p) => [...p, employee.trim()])
    setEmployee("")
  }

  const handleUpdateEmployee = (index) => {
    setEmployee(employees[index])
    setEmployeeIndex(index)
  }

  const handleSaveEmployee = (e) => {
    e.preventDefault()

    if (!employee.trim()) {
      alert("Enter employee name")
      return
    }

    setEmployees((p) =>
      p.map((item, i) =>
        i === employeeIndex ? employee.trim() : item
      )
    )

    setEmployee("")
    setEmployeeIndex(-1)
  }

  const handleDeleteEmployee = (index) => {
    setEmployees((p) => p.filter((item, i) => i !== index))

    if (employeeIndex === index) {
      setEmployee("")
      setEmployeeIndex(-1)
    } else if (employeeIndex > index) {
      setEmployeeIndex((p) => p - 1)
    }
  }


  return (
    <div className="p-6 space-y-8">

      {/* Task 1 */}
      <section>
        <h2>Task 1 - Student Name List</h2>

        <form onSubmit={handleAddStudent}>
          <input
            value={student}
            onChange={handleStudentChange}
            placeholder="Enter student name"
          />
          <button type="submit">Add Student</button>
        </form>

        {students.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </section>


      {/* Task 2 */}
      <section>
        <h2>Task 2 - Course List</h2>

        <form onSubmit={handleAddCourse}>
          <input
            value={course}
            onChange={handleCourseChange}
            placeholder="Enter course name"
          />
          <button type="submit">Add Course</button>
        </form>

        {courses.map((item, i) => (
          <p key={i}>
            {item}{" "}
            <button
              type="button"
              onClick={() => handleDeleteCourse(i)}
            >
              Delete
            </button>
          </p>
        ))}
      </section>


      {/* Task 3 */}
      <section>
        <h2>Task 3 - Number List</h2>

        <form onSubmit={handleAddNumber}>
          <input
            type="number"
            value={number}
            onChange={handleNumberChange}
            placeholder="Enter number"
          />
          <button type="submit">Add Number</button>
        </form>

        {numbers.map((item, i) => (
          <p key={i}>
            {item} - {item % 2 === 0 ? "Even" : "Odd"}
          </p>
        ))}
      </section>


      {/* Task 4 */}
      <section>
        <h2>Task 4 - Fruit List Update</h2>

        <form onSubmit={fruitIndex === -1 ? handleAddFruit : handleSaveFruit}>
          <input
            value={fruit}
            onChange={handleFruitChange}
            placeholder="Enter fruit name"
          />
          <button type="submit">
            {fruitIndex === -1 ? "Add Fruit" : "Save"}
          </button>
        </form>

        {fruits.map((item, i) => (
          <p key={i}>
            {item}{" "}
            <button
              type="button"
              onClick={() => handleUpdateFruit(i)}
            >
              Update
            </button>
          </p>
        ))}
      </section>


      {/* Task 5 */}
      <section>
        <h2>Task 5 - Employee List</h2>

        <form onSubmit={employeeIndex === -1 ? handleAddEmployee : handleSaveEmployee}>
          <input
            value={employee}
            onChange={handleEmployeeChange}
            placeholder="Enter employee name"
          />
          <button type="submit">
            {employeeIndex === -1 ? "Add Employee" : "Save"}
          </button>
        </form>

        {employees.map((item, i) => (
          <p key={i}>
            {item}{" "}
            <button
              type="button"
              onClick={() => handleUpdateEmployee(i)}
            >
              Edit
            </button>

            <button
              type="button"
              onClick={() => handleDeleteEmployee(i)}
            >
              Delete
            </button>
          </p>
        ))}
      </section>

    </div>
  )
}

export default App
