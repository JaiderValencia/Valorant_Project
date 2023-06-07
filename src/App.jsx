import './App.css'
import NavBar from './NavBar/NavBar'
import Agentes from './Agentes/Agentes'
import Maps from './Maps/Maps'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />


      <Routes>
        <Route path='/agentes' element={<Agentes />} />
        <Route path='/mapas' element={<Maps />} />
      </Routes>
    </>
  )
}

export default App
