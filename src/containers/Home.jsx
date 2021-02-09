import React from 'react'

import '@styles/containers/Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <h1>Full Stack Bootcamp</h1>
      <p>
        Project developed following the course{' '}
        <a target='_blank' href='https://fullstackopen.com/' rel='noreferrer'>
          Fullstack Open
        </a>
      </p>
    </div>
  )
}

export default Home
