import React from 'react'

import { Link } from 'react-router-dom'

import '@styles/components/layout/Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>Home</Link>
      <Link to='/partone'>Part 1</Link>
    </header>
  )
}

export default Header
