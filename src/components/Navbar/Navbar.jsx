import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  return (
    <nav className='container home_nav'>
      <img src="/cardlogo.ico" alt="" className='logo'/> 
      <ul>
        <li>
          <Link to="/" smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="/Apply cards">Features
          </Link>
        </li>

        <li>
          <Link to="/Apply cards">Contact us
          </Link>
        </li>

        <li>
          <Link to="/Loginacc" >
            <button className='btn'>User</button>
          </Link>
        </li>
        <li>
          <Link to="/login" >
            <button className='btn'>Admin</button>
          </Link>
        </li>

        <li>
          <Link to="/loginacc" >
            <button className='btn' style={{marginLeft:1350, marginTop:-100, width:100}}>Login</button>
          </Link> 
        </li>

        {/* <li>
          <Link to="/signupacc" >
            <button className='btn' style={{marginLeft:1300,marginTop:-100, width:100}}>Signup</button>
          </Link> 
        </li> */}

        {location.pathname === '/Loginacc' && (
          <li>
            <Link to="/Signupacc">
              <button className='btn'>Sign up</button>
            </Link>
          </li>
          
        )}
        {/* <li><button className='btn'>Contact us</button></li> */}
      </ul>
    </nav>
  )
}

export default Navbar

