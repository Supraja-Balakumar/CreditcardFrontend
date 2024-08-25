import React from 'react'
import './Hero.css'
import Functional from '../Functional/Functional'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import  Title  from '../Title/Title'
import Contact from '../Contact/Contact'

const Hero = () => {
  return (
    <><Navbar /><div className='Hero_container'>
          <div className="hero-text">
              <h1>Reimagine your World with Platinum</h1>
              <p>Experience life in the fast lane with Safety,Flexibility all infused in one card.</p>
              {/* <button className='btn'>Explore more </button> */}

              <button class="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                      <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                  </svg>
                  <Link to='/signupacc'><span class="text">
                    Apply now
                  </span>
                  </Link>
                  <span class="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                      <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                  </svg>
              </button>

          </div>
      </div><Title /><Functional /> <Contact /><Footer /></>
  )
}

export default Hero
