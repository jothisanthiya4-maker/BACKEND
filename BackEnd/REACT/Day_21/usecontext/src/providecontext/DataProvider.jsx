import React from 'react'
import DataContext from '../createcontext/DataContext'

const DataProvider = ({children}) => {
    let trainer={
    name: "Bala",
    role: "Developer"
}
  return (
    <>
    <DataContext.Provider value={trainer}>
        {children}
    </DataContext.Provider>
    </>
  )
}

export default DataProvider
