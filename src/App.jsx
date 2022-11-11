import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Router } from 'react-router-dom'
import MyRoutes from './pages/routes'
import Login from './pages/Login'
import GlobalStyle from './resource/Global-style'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <MyRoutes/>
    </BrowserRouter>
  )
}

export default App
