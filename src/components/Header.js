import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark">
        <Link className="navbar-brand" to='/'>MovieDB</Link>
        <Link className="btn btn-outline-success my-2 my-sm-0" to='/add-movie'>Add movie</Link>
    </nav>
  )
}

export default Header
