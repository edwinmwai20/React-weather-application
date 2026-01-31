import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { WeatherContext } from './components/context/WeatherContext'
import Home from './components/pages/Home'
import NavBar from './components/Navbar'
import AddCityForm from './components/pages/AddCityForm'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/add' element={<AddCityForm/>}/>
    </Routes>
    
    </>
  )
}

export default App
