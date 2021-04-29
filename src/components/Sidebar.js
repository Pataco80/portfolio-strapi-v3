import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { Link } from 'gatsby'

// Import Components for App
import { FaTimes } from 'react-icons/fa'

// Import Data
import links from '../constants/links'
import socialLinks from '../constants/social_links'

// Component
const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Render Component
  return (
    <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button className='close-btn' onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className='sidebar-container'>
        <ul className={isOpen ? 'sidebar-links' : null}>
          {links.map((link) => {
            return (
              <li>
                <Link Key={link.id} to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? 'social-links sidebar-icons' : null}>
          {socialLinks.map((link) => {
            return (
              <li Key={link.id}>
                <a href={link.url} className='social-link'>
                  {link.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
