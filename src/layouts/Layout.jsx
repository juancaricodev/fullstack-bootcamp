import React from 'react'

import Header from '@components/layout/Header'
import '@styles/layout/Layout.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='layout'>
        {children}
      </div>
    </>
  )
}

export default Layout
