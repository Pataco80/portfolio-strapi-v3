import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'
import { Link } from 'gatsby'

const Project = (props) => {
  const {
    id,
    index,
    title,
    slug,
    image,
    description,
    stack,
    github,
    url,
  } = props
  const imgPath = getImage(image)

  return (
    <article Key={id} className='project'>
      <GatsbyImage image={imgPath} alt={title} className='project-img' />
      <div className='project-info'>
        <span className='project-number'>0{index + 1}.</span>
        <Link to={`/projects/${slug}`} className='project-slug'>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <div className='project-stack'>
          <ul>
            {stack.map((tag) => {
              return <li Key={tag.id}>{tag.tag}</li>
            })}
          </ul>
        </div>
        <div className='project-links'>
          <a href={github}>
            <FaGithubSquare className='project-icon' />
          </a>

          <a href={url}>
            <FaShareSquare className='project-icon' />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
