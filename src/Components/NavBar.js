import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='navbar d-flex align-center justify-space-between'>
          <div className='logo'>Review App</div>
          <ul className='nav-lists d-flex align-center'>
              <li><NavLink className={({isActive}) => isActive ? 'active' : 'inActive'}  to="/">Reviews</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? 'active' : 'inActive'} to="/addReview">Add Review</NavLink></li>
          </ul>
      </div>
  )
}

export default NavBar