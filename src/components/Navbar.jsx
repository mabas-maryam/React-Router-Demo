import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none': 'underrline',

        }

    }
  return (
    
    <nav>
        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='/about'>About</NavLink>
      
    </nav>
  )
}

export default Navbar
