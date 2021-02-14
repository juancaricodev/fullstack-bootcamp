import React from 'react'

import { Link } from 'react-router-dom'

import '@styles/components/layout/Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>Home</Link>
      <Link to='/course'>Course</Link>
      <Link to='/unicafe'>Unicafe</Link>
      <Link to='/anecdotes'>Anecdotes</Link>
    </header>
  )
}

export default Header
