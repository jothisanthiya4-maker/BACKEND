
import React, { useState } from 'react'

const App = () => {

  // TASK 1 - EMPLOYEE FORM
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: ""
  })

  const [employees, setEmployees] = useState([])
  const [employeeEdit, setEmployeeEdit] = useState(-1)

  const handleEmployeeChange = (e) => {
    const { name, value } = e.target
    setEmployee((p) => ({ ...p, [name]: value }))
  }

  const handleEmployeeAdd = (e) => {
    e.preventDefault()

    if (!employee.name.trim() ||
        !employee.department.trim() ||
        employee.salary.trim() === "") {
      alert("Fill all employee fields")
      return
    }

    if (employeeEdit !== -1) {
      alert("Save the edited employee first")
      return
    }

    setEmployees((p) => [...p, employee])
    setEmployee({ name: "", department: "", salary: "" })
  }

  const handleEmployeeEdit = (index) => {
    setEmployee({ ...employees[index] })
    setEmployeeEdit(index)
  }

  const handleEmployeeSave = (e) => {
    e.preventDefault()

    if (!employee.name.trim() ||
        !employee.department.trim() ||
        employee.salary.trim() === "") {
      alert("Fill all employee fields")
      return
    }

    setEmployees((p) =>
      p.map((item, i) => i === employeeEdit ? employee : item)
    )

    setEmployee({ name: "", department: "", salary: "" })
    setEmployeeEdit(-1)
  }

  const handleEmployeeDelete = (index) => {
    setEmployees((p) => p.filter((item, i) => i !== index))

    if (employeeEdit === index) {
      setEmployee({ name: "", department: "", salary: "" })
      setEmployeeEdit(-1)
    } else if (employeeEdit > index) {
      setEmployeeEdit((p) => p - 1)
    }
  }


  // TASK 2 - PRODUCT FORM
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: ""
  })

  const [products, setProducts] = useState([])
  const [productEdit, setProductEdit] = useState(-1)

  const handleProductChange = (e) => {
    const { name, value } = e.target
    setProduct((p) => ({ ...p, [name]: value }))
  }

  const handleProductAdd = (e) => {
    e.preventDefault()

    if (!product.name.trim() ||
        product.price.trim() === "" ||
        product.quantity.trim() === "") {
      alert("Fill all product fields")
      return
    }

    if (productEdit !== -1) {
      alert("Save the edited product first")
      return
    }

    setProducts((p) => [...p, product])
    setProduct({ name: "", price: "", quantity: "" })
  }

  const handleProductEdit = (index) => {
    setProduct({ ...products[index] })
    setProductEdit(index)
  }

  const handleProductSave = (e) => {
    e.preventDefault()

    if (!product.name.trim() ||
        product.price.trim() === "" ||
        product.quantity.trim() === "") {
      alert("Fill all product fields")
      return
    }

    setProducts((p) =>
      p.map((item, i) => i === productEdit ? product : item)
    )

    setProduct({ name: "", price: "", quantity: "" })
    setProductEdit(-1)
  }


  // TASK 3 - COURSE FORM
  const [course, setCourse] = useState({
    name: "",
    trainer: "",
    duration: ""
  })

  const [courses, setCourses] = useState([])

  const handleCourseChange = (e) => {
    const { name, value } = e.target
    setCourse((p) => ({ ...p, [name]: value }))
  }

  const handleCourseAdd = (e) => {
    e.preventDefault()

    if (!course.name.trim() ||
        !course.trainer.trim() ||
        !course.duration.trim()) {
      alert("Fill all course fields")
      return
    }

    setCourses((p) => [...p, course])
    setCourse({ name: "", trainer: "", duration: "" })
  }


  // TASK 4 - EXPENSE FORM
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: ""
  })

  const [expenses, setExpenses] = useState([])
  const [expenseEdit, setExpenseEdit] = useState(-1)

  const handleExpenseChange = (e) => {
    const { name, value } = e.target
    setExpense((p) => ({ ...p, [name]: value }))
  }

  const handleExpenseAdd = (e) => {
    e.preventDefault()

    if (!expense.title.trim() ||
        expense.amount.trim() === "" ||
        !expense.category.trim()) {
      alert("Fill all expense fields")
      return
    }

    if (expenseEdit !== -1) {
      alert("Save the edited expense first")
      return
    }

    setExpenses((p) => [...p, expense])
    setExpense({ title: "", amount: "", category: "" })
  }

  const handleExpenseEdit = (index) => {
    setExpense({ ...expenses[index] })
    setExpenseEdit(index)
  }

  const handleExpenseSave = (e) => {
    e.preventDefault()

    if (!expense.title.trim() ||
        expense.amount.trim() === "" ||
        !expense.category.trim()) {
      alert("Fill all expense fields")
      return
    }

    setExpenses((p) =>
      p.map((item, i) => i === expenseEdit ? expense : item)
    )

    setExpense({ title: "", amount: "", category: "" })
    setExpenseEdit(-1)
  }

  const handleExpenseDelete = (index) => {
    setExpenses((p) => p.filter((item, i) => i !== index))

    if (expenseEdit === index) {
      setExpense({ title: "", amount: "", category: "" })
      setExpenseEdit(-1)
    } else if (expenseEdit > index) {
      setExpenseEdit((p) => p - 1)
    }
  }


  // TASK 5 - STUDENT MARKS FORM
  const [student, setStudent] = useState({
    name: "",
    tamil: "",
    english: "",
    maths: ""
  })

  const [students, setStudents] = useState([])

  const handleStudentChange = (e) => {
    const { name, value } = e.target
    setStudent((p) => ({ ...p, [name]: value }))
  }

  const handleStudentAdd = (e) => {
    e.preventDefault()

    if (!student.name.trim() ||
        student.tamil.trim() === "" ||
        student.english.trim() === "" ||
        student.maths.trim() === "") {
      alert("Fill all student fields")
      return
    }

    setStudents((p) => [...p, student])
    setStudent({
      name: "",
      tamil: "",
      english: "",
      maths: ""
    })
  }


  return (
    <div className="p-6 space-y-10">

      {/* TASK 1 */}
      <section>
        <h2>1. Employee Form</h2>

        <form onSubmit={employeeEdit === -1 ? handleEmployeeAdd : handleEmployeeSave}>
          <input name="name" placeholder="Name" value={employee.name} onChange={handleEmployeeChange} />
          <input name="department" placeholder="Department" value={employee.department} onChange={handleEmployeeChange} />
          <input name="salary" type="number" placeholder="Salary" value={employee.salary} onChange={handleEmployeeChange} />

          <button type="submit">
            {employeeEdit === -1 ? "Add Employee" : "Save Employee"}
          </button>
        </form>

        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.salary}</td>
                <td>
                  <button type="button" onClick={() => handleEmployeeEdit(i)}>Edit</button>
                  <button type="button" onClick={() => handleEmployeeDelete(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>


      {/* TASK 2 */}
      <section>
        <h2>2. Product Form</h2>

        <form onSubmit={productEdit === -1 ? handleProductAdd : handleProductSave}>
          <input name="name" placeholder="Product Name" value={product.name} onChange={handleProductChange} />
          <input name="price" type="number" placeholder="Price" value={product.price} onChange={handleProductChange} />
          <input name="quantity" type="number" placeholder="Quantity" value={product.quantity} onChange={handleProductChange} />

          <button type="submit">
            {productEdit === -1 ? "Add Product" : "Save Product"}
          </button>
        </form>

        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button type="button" onClick={() => handleProductEdit(i)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>


      {/* TASK 3 */}
      <section>
        <h2>3. Course Form</h2>

        <form onSubmit={handleCourseAdd}>
          <input name="name" placeholder="Course Name" value={course.name} onChange={handleCourseChange} />
          <input name="trainer" placeholder="Trainer" value={course.trainer} onChange={handleCourseChange} />
          <input name="duration" placeholder="Duration" value={course.duration} onChange={handleCourseChange} />

          <button type="submit">Add Course</button>
        </form>

        <table border="1">
          <thead>
            <tr>
              <th>Course</th>
              <th>Trainer</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.trainer}</td>
                <td>{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>


      {/* TASK 4 */}
      <section>
        <h2>4. Expense Form</h2>

        <form onSubmit={expenseEdit === -1 ? handleExpenseAdd : handleExpenseSave}>
          <input name="title" placeholder="Expense Title" value={expense.title} onChange={handleExpenseChange} />
          <input name="amount" type="number" placeholder="Amount" value={expense.amount} onChange={handleExpenseChange} />
          <input name="category" placeholder="Category" value={expense.category} onChange={handleExpenseChange} />

          <button type="submit">
            {expenseEdit === -1 ? "Add Expense" : "Save Expense"}
          </button>
        </form>

        <table border="1">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((item, i) => (
              <tr key={i}>
                <td>{item.title}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button type="button" onClick={() => handleExpenseEdit(i)}>Edit</button>
                  <button type="button" onClick={() => handleExpenseDelete(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>


      {/* TASK 5 */}
      <section>
        <h2>5. Student Marks Form</h2>

        <form onSubmit={handleStudentAdd}>
          <input name="name" placeholder="Student Name" value={student.name} onChange={handleStudentChange} />
          <input name="tamil" type="number" placeholder="Tamil Marks" value={student.tamil} onChange={handleStudentChange} />
          <input name="english" type="number" placeholder="English Marks" value={student.english} onChange={handleStudentChange} />
          <input name="maths" type="number" placeholder="Maths Marks" value={student.maths} onChange={handleStudentChange} />

          <button type="submit">Add Student</button>
        </form>

        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tamil</th>
              <th>English</th>
              <th>Maths</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.tamil}</td>
                <td>{item.english}</td>
                <td>{item.maths}</td>
                <td>
                  {Number(item.tamil) +
                   Number(item.english) +
                   Number(item.maths)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  )
}

export default App
