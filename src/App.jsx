import './App.css'
import NavBar from './NavBar/NavBar'
import Agents from './Agents/Agents'
import Maps from './Maps/Maps'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />


      <Routes>
        <Route path='/agentes' element={<Agents />} />
        <Route path='/mapas' element={<Maps />} />
      </Routes>
    </>
  )
}

export default App
