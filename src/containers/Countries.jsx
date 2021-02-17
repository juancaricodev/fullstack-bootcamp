import React, { useState, useEffect } from 'react'

const Countries = () => {
  const [state, setState] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])
  // const [match, setMatch] = useState(true)

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(res => setState(res))
      .catch(err => console.error('Error =>', err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submited')
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value)

    const newArray = [...state]
    const searchLower = search.toLowerCase()
    const filteredCountries = newArray.filter(country => country.name.toLowerCase().includes(searchLower))

    search.length === ''
      ? setFilter([])
      : setFilter(filteredCountries)
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
          {/* <button type='submit'>Search</button> */}
        </form>

        {
          filter.length > 0
            ? (
              <ul>
                {filter.map(country => (
                  <li key={country.name}>{country.name}</li>
                ))}
              </ul>
            )
            : <h3>No data filtered yet</h3>
        }
      </div>
    </>
  )
}

export default Countries
