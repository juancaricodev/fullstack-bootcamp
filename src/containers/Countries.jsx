import React, { useState, useEffect } from 'react'

const Countries = () => {
  return (
    <>
      <div className='part-tag'>
        <h2>Countries</h2>
        <h3>Exercises 2.11 to 2.14</h3>
      </div>

      <div className='countries'>
        <div className='search'>
          <h3>Find Countries</h3>
          <input type='text' />
        </div>
      </div>
    </>
  )
}

export default Countries
