import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { Link } from 'gatsby'

// Import Components for App
import Seo from '../components/Seo'

// Component
const Error = () => {
  // Render Component
  return (
    <>
      <Seo title='Error 404' />
      <main className='error-page'>
        <div className='error-container'>
          <h1>oops it's a dead end</h1>
          <Link to='/' className='btn'>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
