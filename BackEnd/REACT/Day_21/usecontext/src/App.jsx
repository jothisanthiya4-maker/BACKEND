import React, { useContext } from 'react'
import DataContext from './createcontext/DataContext'

const App = () => {

  const trainer=useContext(DataContext)
  console.log(trainer);
  

  return (
    <>
    <h3>{trainer.name}</h3>
    <h4>{trainer.role}</h4>
    </>
  )
}

export default App
