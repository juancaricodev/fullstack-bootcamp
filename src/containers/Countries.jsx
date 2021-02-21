import React, { useState, useEffect } from 'react'

import axios from 'axios'

import '@styles/containers/Countries.scss'
import Country from '@components/countries/Country'
import CountryList from '@components/countries/CountryList'
import SearchBar from '@components/countries/SearchBar'

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

        <SearchBar
          handleSubmit={handleSubmit}
          search={search}
          handleInputChange={handleInputChange}
        />

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
                          <Country
                            key={country.name}
                            name={country.name}
                            capital={country.capital}
                            population={country.population}
                            languages={country.languages}
                            flag={country.flag}
                            demonym={country.demonym}
                            weatherItem={weatherItem}
                          />
                        ))}
                      </ul>
                    ) : (
                      <ul className='list-multiple'>
                        {filter.map(country => (
                          <CountryList
                            key={country.name}
                            name={country.name}
                            handleShow={handleShow(country)}
                          />
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
