import React from 'react'

// Import Components for App
import Seo from '../components/Seo'

// Component
const contact = () => {
  // Render Component
  return (
    <>
      <Seo title='Contact Us' />
      <main className='contact-page'>
        <article className='contact-form'>
          <h3>get in touch</h3>
          <form action=''>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <textarea
                name='message'
                rows='5'
                placeholder='message'
                className='form-control'
              ></textarea>
            </div>
            <button type='submit' className='submit-btn btn'>
              Submit here
            </button>
          </form>
        </article>
      </main>
    </>
  )
}

export default contact
