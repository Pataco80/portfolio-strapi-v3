import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

import '../css/main.css'
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
      <Footer />
    </>
  )
}

export default Layout
