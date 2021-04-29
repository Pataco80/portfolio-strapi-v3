import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { Link } from 'gatsby'

// Import Components for App
import Title from './Title'
import Project from './Project'

// Component
const Projects = (props) => {
  // Component Variables and functions
  const { title, showLink, projects } = props

  // Render Component
  return (
    <section className='section projects'>
      <div className='section-title'>
        <Title title={title} />
        <div className='underline'></div>
      </div>
      <div className='section-center projects-center'>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to='/projects/' className='btn center-btn'>
          All Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
