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
        <Route path='/agents' element={<Agents />} />
        <Route path='/maps' element={<Maps />} />
      </Routes>
    </>
  )
}

export default App
