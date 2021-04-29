import React from 'react'
import { graphql, Link } from 'gatsby'
import Title from '../components/Title'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'
import Seo from '../components/Seo'

export const query = graphql`
  query getProject($slug: String!) {
    project: strapiProjects(slug: { eq: $slug }) {
      slug
      title
      description
      stack {
        id
        tag
      }
      github
      url
      image {
        publicURL
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const { title, description, stack, github, url, image } = data.project
  return (
    <>
      <Seo
        title={title.toUpperCase()}
        description={description}
        image={image.publicURL}
      />
      <main className='project-template-page section'>
        <article className='project-template-article section-center'>
          <div className='section-title'>
            <Title title={title} />
            <div className='underline'></div>
          </div>
          <img src={image.publicURL} alt={title} className='project-img' />
          <p>{description}</p>
          <div className='project-article-footer'>
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
        <Link to='/projects/' className='btn center-btn'>
          All Projects
        </Link>
      </main>
    </>
  )
}

export default ProjectTemplate
