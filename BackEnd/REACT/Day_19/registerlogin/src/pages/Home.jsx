
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  const [userDetail, setUserDetail] = useState({})

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("isActiveUser"))

    if (!getData) {
      alert('you are not a valid user')
      navigate('/')
      return
    }

    setUserDetail(getData)
  }, [])

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-96 bg-white p-8 rounded-lg shadow-md flex flex-col gap-5">

          <h2 className="text-3xl font-semibold text-center">Home</h2>

          <h3 className="text-lg border border-gray-200 rounded p-3">
            ID: {userDetail.id}
          </h3>

          <h3 className="text-lg border border-gray-200 rounded p-3">
            Hello, {userDetail.name}
          </h3>

          <h3 className="text-lg border border-gray-200 rounded p-3 break-words">
            Email: {userDetail.email}
          </h3>

        </div>
      </div>
    </>
  )
}

export default Home
