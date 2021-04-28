import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Title from '../components/Title'
import Seo from '../components/Seo'

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

const About = () => {
  const data = useStaticQuery(getAbout)
  const about = data.strapiAbout
  const { title, description, image, stack } = about
  return (
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
  )
}

export default About
