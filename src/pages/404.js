import React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/Seo'

const Error = () => {
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
