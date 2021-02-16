import React from 'react'

import { Link } from 'react-router-dom'

import '@styles/components/layout/Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>Home</Link>
      <Link to='/courses'>Courses</Link>
      <Link to='/unicafe'>Unicafe</Link>
      <Link to='/anecdotes'>Anecdotes</Link>
      <Link to='/notes'>Notes</Link>
      <Link to='/phonebook'>Phonebook</Link>
      <Link to='/countries'>Countries</Link>
    </header>
  )
}

export default Header
