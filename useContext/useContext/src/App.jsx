import Authentication from './components/Authentication'
import Theme from './components/Theme'
import User from './components/User'

const App = () => {
  return (
    <div>
      <h2>Task 1 - User Display </h2>
      <User/>
      <h2>Task 2 - Theme Change </h2>
      <Theme/>
      <h2>Task 3 - Authenticate User </h2>
      <Authentication/>
    </div>
  )
}
export default App