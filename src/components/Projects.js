import React from 'react'
import Title from './Title'
import Project from './Project'
import { Link } from 'gatsby'
const Projects = (props) => {
  const { title, showLink, projects } = props

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
