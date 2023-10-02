import { Route, Routes } from 'react-router-dom'
import './App.css'
import { BoxMui, CardMui, ContainerMui, GridMui, NavBar, Practice } from './components'
import { Home, Login, Register } from './components/pages'

function App() {

  return (
    <>
      <ContainerMui/>
      <BoxMui/>
      <GridMui/>
      <Practice/>
      <CardMui/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
