
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const [search,setSearch]=useState("")

  const handleSearch=(e)=>{
    setSearch(e.target.value)
    
    setData(searchData)
  }

    let copy = [...data]

    if(search){
      copy = copy.filter((e)=>e.firstName.toLowerCase().includes(search.toLowerCase()))
    }

  useEffect(() => {
    const fetchdata = async () => {
      const ddata = await fetch("https://dummyjson.com/users")
      const pdata = await ddata.json()
      setData(pdata.users)
      // setData((p)=>[...p,pdata.users])
    }

    fetchdata()
  }, [])
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        User Details
      </h1>

        <label htmlFor="">Search</label>
        <input type="text" placeholder='type name here ' value={search} className='border' onChange={handleSearch}/>
        <label htmlFor="">city</label>
        <select name="" id="">
          <option value="">Select City</option>
        </select>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {copy.map((e) => (
          <div
            key={e.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              {e.firstName}
            </h2>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Age:</span> {e.age}
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">City:</span> {e.address.city}
            </p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default App
