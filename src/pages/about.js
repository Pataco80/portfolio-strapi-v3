import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import Title from '../components/Title'
import Seo from '../components/Seo'

// GraphQl Queries
export const getAbout = graphql`
  {
    strapiAbout {
      title
      description
      image {
        publicURL
      }
      stack {
        id
        tag
      }
    }
  }
`

// Component
const About = () => {
  // Component Variables and functions
  const data = useStaticQuery(getAbout)
  const about = data.strapiAbout
  const { title, description, image, stack } = about

  // Render Component
  return (
    <>
      <Seo title='About Me' />
      <main className='about-page'>
        <div className='section-center about-center'>
          <img src={image.publicURL} alt={title} className='about-img-svg' />
          <article className='about-text'>
            <div className='section-title'>
              <Title title={title} />
              <div className='underline'></div>
            </div>
            <p>{description}</p>
            <div className='about-stack'>
              <ul>
                {stack.map((tag) => {
                  return <li Key={tag.id}>{tag.tag}</li>
                })}
              </ul>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export default About
