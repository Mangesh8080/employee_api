import { Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './Pages/Welcome'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome></Welcome>}></Route>
        <Route path='/Welcome' element={<Welcome></Welcome>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/employee-profile/:id' element={<Profile></Profile>}></Route>


      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
