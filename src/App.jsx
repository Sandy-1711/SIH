import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
const App = () => {


  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/about' element={<p>About</p>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App