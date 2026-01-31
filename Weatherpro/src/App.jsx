import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
import AddCityForm from './components/pages/AddCityForm'
import CityDetail from './components/pages/CityDetail'


import './App.css'

function App() {

  return (
    <>
   
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/add' element={<AddCityForm/>}/>
<Route path="/city/:id" element={<CityDetail />} />
    </Routes>
    
    </>
  )
}

export default App
