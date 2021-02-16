import React, { useState, useEffect } from 'react'

const Countries = () => {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submited')
    console.log(search)
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className='part-tag'>
        <h2>Countries</h2>
        <h3>Exercises 2.11 to 2.14</h3>
      </div>

      <div className='countries'>
        <h3>Find Countries</h3>

        <form className='search' onSubmit={handleSubmit}>
          <input
            type='text'
            value={search}
            onChange={handleInputChange}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    </>
  )
}

export default Countries
