import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark">
        <a className="navbar-brand" href='/'>MovieDB</a>
        <button className="btn btn-outline-success my-2 my-sm-0" to='/add-movie'>Add movie</button>
    </nav>
  )
}

export default Header
