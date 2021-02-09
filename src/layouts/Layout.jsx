import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <header>
        Header from Layout
      </header>

      {children}
    </div>
  )
}

export default Layout
