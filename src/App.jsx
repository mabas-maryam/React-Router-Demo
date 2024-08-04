import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'

const App = () => {
  return (
    <div>
      <Navbar />
     <Routes>
      <Route path='/' element= {<Home />}></Route>
      <Route path='about' element= {<About />}></Route>
      <Route path='order-summary' element= {<OrderSummary />}></Route>
      <Route path='*' element = {<NoMatch />} />
     </Routes>

    </div>
  )
}

export default App
