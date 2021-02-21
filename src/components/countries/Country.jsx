import React from 'react'

import Weather from '@components/countries/Weather'

const Country = (props) => {
  const {
    name,
    capital,
    population,
    languages,
    flag,
    demonym,
    weatherItem
  } = props

  return (
    <li className='single'>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h3>Languages</h3>
      <ul>
        {languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={flag} alt={`${demonym} flag`} />

      {
        weatherItem.length > 0
          && (
            <Weather
              country={weatherItem[0].location.country}
              temperature={weatherItem[0].current.temperature}
              icon={weatherItem[0].current.weather_icons[0]}
              iconDescription={weatherItem[0].current.weather_descriptions}
              winSpeed={weatherItem[0].current.wind_speed}
              windDir={weatherItem[0].current.wind_dir}
            />
          )
      }
    </li>
  )
}

export default Country
