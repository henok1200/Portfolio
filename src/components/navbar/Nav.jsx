import React from 'react'
import NavbarLinks from './NavbarLinks'
import Logo from './Logo'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <NavbarLinks />
    </nav>
  )
}

export default Nav
