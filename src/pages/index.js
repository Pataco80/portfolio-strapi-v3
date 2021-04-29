import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import Seo from '../components/Seo'

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

const IndexPage = ({ data }) => {
  const {
    projects: { nodes: projects },
  } = data

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
