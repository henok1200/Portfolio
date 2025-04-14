import React from 'react'
import Nav from './Nav'

const Navbar = () => {
  return (
    <header className="bg-black/50 border border-magenta/25 rounded-xl fixed w-[90vw] left-[5vw] xl:w-[80vw] py-[1.2vh] z-10 px-[3vw] xl:left-[10vw]  shadow-navbar "> 
      <Nav />
    </header>
  )
}

export default Navbar
