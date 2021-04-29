import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import Hero from '../components/Hero'
import Services from '../components/Services'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import Seo from '../components/Seo'

// GraphQl Queries
export const query = graphql`
  {
    projects: allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        slug
        description
        featured
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
const IndexPage = ({ data }) => {
  // Component Variables and functions
  const {
    projects: { nodes: projects },
  } = data

  // Render Component
  return (
    <>
      <Seo title='Home' />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title='featured Projects' projects={projects} showLink />
      </main>
    </>
  )
}

export default IndexPage
