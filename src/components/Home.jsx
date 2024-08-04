import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div>Home Page</div>
      <button className='border rounded' onClick={() => navigate('order-summary')}>Place Order</button>
    </div>
  )
}

export default Home
