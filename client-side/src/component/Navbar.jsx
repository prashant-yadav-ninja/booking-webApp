import React from 'react'
import "../style.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
        <span className='logo'>BookBLiss</span>
        <div className="navItems">
            <button className='navButton'>Register</button>
            <button className='navButton'>Login</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar
