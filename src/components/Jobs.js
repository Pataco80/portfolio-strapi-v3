import React, { useState } from 'react'
import Title from './Title'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const getJobs = graphql`
  {
    allStrapiJob(sort: { fields: created_at, order: DESC }) {
      nodes {
        id
        position
        compagny
        date
        job_description {
          id
          text
        }
        created_at
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(getJobs)
  const [value, setValue] = useState(0)
  const {
    allStrapiJob: { nodes: job },
  } = data
  const { id, position, compagny, date, job_description } = job[value]
  return (
    <section className='section jobs'>
      <div className='section-title'>
        <Title title='Experience' />
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {job.map((item, index) => {
            return (
              <button
                Key={index}
                className='job-btn'
                onClick={() => setValue(index)}
              >
                {item.compagny}
              </button>
            )
          })}
        </div>
        <article Key={id} className='job-info'>
          <h3>{position}</h3>
          <h4>{compagny}</h4>
          <p className='job-date'>{date}</p>
          {job_description.map((item) => {
            return (
              <div Key={item.id} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{item.text}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to='/about/' className='btn center-btn'>
        More Infos
      </Link>
    </section>
  )
}

export default Jobs
