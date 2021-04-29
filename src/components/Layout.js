import React, { useState } from 'react'

// Import Components for App
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

// Import styles from styled-components
import '../css/main.css'

// Component
const Layout = ({ children }) => {
  // Component Variables and functions
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  // Render Component
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
