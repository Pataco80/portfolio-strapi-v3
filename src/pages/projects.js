import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import Projects from '../components/Projects'
import Seo from '../components/Seo'

// GraphQl Queries
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

// Component
const ProjectsPage = ({ data }) => {
  // Component Variables and functions
  const {
    projects: { nodes: projects },
  } = data

  // Render Component
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
