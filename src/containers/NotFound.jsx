import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import '@styles/containers/NotFound.scss'

const NotFound = () => {
  const location = useLocation()

  return (
    <div className='NotFound'>
      <div className='NotFound__title'>404: Page Not Found</div>
      <div className='NotFound__no-match'>
        No match for: <code>{location.pathname}</code>
      </div>
      <div className='NotFound__subtitle'>
        Try going to:{' '}
        <Link className='Link' to='/'>
          Home Page
        </Link>
      </div>
    </div>
  )
}

export default NotFound
