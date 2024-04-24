// import { Routes } from 'react-router-dom'
import AppRouter from './AppRouter'
import { UserProvider } from './Componenets/context/Userprovider'


function App() {

  return (
   <div>
    <UserProvider>
    <AppRouter/>
    </UserProvider>
   </div>
  )
}

export default App
