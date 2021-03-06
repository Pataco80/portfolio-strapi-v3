import React from 'react'

// Import Data
import socialLinks from '../constants/social_links'

// Component
const Footer = () => {
  // Render Component
  return (
    <footer className='footer'>
      <div>
        <div className='footer-links social-links'>
          {socialLinks.map((link) => (
            <a Key={link.id} href={link.url} className='social-link'>
              {link.icon}
            </a>
          ))}
        </div>
        <h4>
          copyright &copy; {new Date().getFullYear()}
          <span> WebDev</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
