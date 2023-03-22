import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='navbar d-flex align-center justify-space-between'>
          <div className='logo'>Review App</div>
          <ul className='nav-lists d-flex align-center'>
              <li><Link to="/">Reviews</Link></li>
              <li><Link to="/addReview">Add Review</Link></li>
          </ul>
      </div>
  )
}

export default NavBar