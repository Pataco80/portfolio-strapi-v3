import React from 'react'

// Import components from Gatsby and plugins Gatsby
import Title from './Title'

// Import Components for App
import services from '../constants/services'

// Component
const Services = () => {
  // Render Component
  return (
    <section className='section bg-grey'>
      <div className='section-title'>
        <Title title='Services' />
        <div className='underline'></div>
      </div>
      <div className='section-center services-center'>
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className='service'>
              {icon}
              <h4>{title}</h4>
              <div className='underline'></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
