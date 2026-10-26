import { useState } from 'react'
import DataContext from '../context/DataContext'

const Provider = ({children}) => {

  const [toggle,setToggle] = useState(true)
  return (
    <div>
      <DataContext.Provider value={{toggle,setToggle}}>
          {children}
      </DataContext.Provider>
    </div>
  )
}

export default Provider