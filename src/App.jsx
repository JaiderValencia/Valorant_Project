import './App.css'
import NavBar from './NavBar/NavBar'
import Agentes from './Agentes/Agentes'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />


      <Routes>
        <Route path='/agentes' element={<Agentes />} />
      </Routes>
    </>
  )
}

export default App
