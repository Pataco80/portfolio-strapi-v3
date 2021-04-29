import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { Link } from 'gatsby'

// Import Components for App
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'

// Import Data
import pageLinks from '../constants/links'

// Component
const Navbar = ({ toggleSidebar }) => {
  // Render Component
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='web dev' />
          <button type='button' className='toggle-btn' onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className='nav-links'>
          {pageLinks.map((link) => (
            <Link key={link.id} to={link.url}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
