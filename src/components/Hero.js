import React from 'react'
import { Link } from 'gatsby'
import socialLinks from '../constants/social_links'
import heroImg from '../images/hero.svg'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <header className='hero'>
      <section className='section-center hero-center'>
        <article className='hero-info'>
          <div>
            <div className='underline'></div>
            <h1>Ricardo Do Vale</h1>
            <h4>Web Developer</h4>
            <Link to='/contact/' className='btn'>
              Contact Me
            </Link>
            <div className='social-links'>
              {socialLinks.map((link) => (
                <a Key={link.id} href={link.url} className='social-link'>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </article>
        <StaticImage
          src='../images/hero.svg'
          alt='portfolio'
          placeholder='blurred'
          className='hero-img'
        />
      </section>
    </header>
  )
}

export default Hero
