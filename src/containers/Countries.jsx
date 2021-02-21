import React, { useState, useEffect } from 'react'

import axios from 'axios'

import '@styles/containers/Countries.scss'

const Countries = () => {
  const [state, setState] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])
  const [weather, setWeather] = useState('')
  const [weatherItem, setWeatherItem] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(res => setState(res))
      .catch(err => console.error('Error =>', err))
  }, [])

  const fetchWeather = () => {
    const ACCESS_KEY = process.env.WEATHERSTACK_KEY

    const data = axios.get(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${weather}`)
    data.then(res => setWeatherItem([res.data]))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    if (filter.length === 1) {
      setWeather(filter[0].name)
    }
  }, [filter])

  useEffect(() => {
    if (weather.length > 0) {
      fetchWeather()
    }
  }, [weather])

  const handleSubmit = (e) => {
    e.preventDefault()
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

  const handleShow = country => () => setFilter([country])

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

                            {
                              weatherItem.length > 0
                                && (
                                  <div className='weather'>
                                    <h2>Weather in {weatherItem[0].location.country}</h2>
                                    <div className='weather-row'>
                                      <p><strong>Temperature:</strong> {weatherItem[0].current.temperature} °C</p>
                                    </div>
                                    <div className='weather-row'>
                                      <img src={weatherItem[0].current.weather_icons[0]} alt={weatherItem[0].current.weather_descriptions} />
                                    </div>
                                    <div className='weather-row'>
                                      <p><strong>Wind speed:</strong> {weatherItem[0].current.wind_speed} km/h, direction {weatherItem[0].current.wind_dir}</p>
                                    </div>
                                  </div>
                                )
                            }
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul>
                        {filter.map(country => (
                          <li key={country.name}>
                            {country.name}
                            <button type='button' onClick={handleShow(country)}>Show</button>
                          </li>
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
