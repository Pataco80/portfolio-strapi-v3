import React from 'react'
import { graphql } from 'gatsby'
import Projects from '../components/Projects'
import Seo from '../components/Seo'

export const query = graphql`
  {
    projects: allStrapiProjects(sort: { fields: created_at, order: ASC }) {
      nodes {
        id
        title
        slug
        description
        github
        url
        stack {
          id
          tag
        }
        image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: WEBP
            )
          }
        }
      }
    }
  }
`
const ProjectsPage = ({ data }) => {
  const {
    projects: { nodes: projects },
  } = data
  return (
    <>
      <Seo title='All Projects' />
      <main className='projects-page'>
        <Projects title='All Projects' projects={projects} />
      </main>
    </>
  )
}

export default ProjectsPage
