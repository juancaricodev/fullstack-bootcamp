import React, { useState, useEffect } from 'react'

import '@styles/containers/Countries.scss'

const Countries = () => {
  const [state, setState] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])

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
  }

  useEffect(() => {
    const newArray = [...state]
    const searchLower = search.toLowerCase()
    const filteredCountries = newArray.filter(country => country.name.toLowerCase().includes(searchLower))

    setFilter(filteredCountries)
  }, [search])

  return (
    <>
      <div className='part-tag'>
        <h2>Countries</h2>
        <h3>Exercises 2.11 to 2.14</h3>
      </div>

      <div className='countries'>
        <h1>Find Countries</h1>

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
              filter.length > 10
                ? <h3>Too many matches, specify another filter</h3>
                : (
                  filter.length === 1
                    ? (
                      <ul>
                        {filter.map(country => (
                          <li key={country.name} className='single'>
                            <h1>{country.name}</h1>
                            <p>Capital: {country.capital}</p>
                            <p>Population: {country.population}</p>
                            <h3>Languages</h3>
                            <ul>
                              {country.languages.map(language => (
                                <li key={language.name}>{language.name}</li>
                              ))}
                            </ul>
                            <img src={country.flag} alt={`${country.demonym} flag`} />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul>
                        {filter.map(country => (
                          <li key={country.name}>{country.name}</li>
                        ))}
                      </ul>
                    )
                )
            )
            : <h3>No match for this search</h3>
        }
      </div>
    </>
  )
}

export default Countries
