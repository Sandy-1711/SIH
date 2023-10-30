import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
const App = () => {


  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App