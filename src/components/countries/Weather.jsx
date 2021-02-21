import React from 'react'

const Weather = (props) => {
  const { country, temperature, icon, iconDescription, winSpeed, windDir } = props

  return (
    <div className='weather'>
      <h2>Weather in {country}</h2>
      <div className='weather-row'>
        <p>
          <strong>Temperature:</strong> {temperature} °C
        </p>
      </div>
      <div className='weather-row'>
        <img
          src={icon}
          alt={iconDescription}
        />
      </div>
      <div className='weather-row'>
        <p>
          <strong>Wind speed:</strong> {winSpeed} km/h,
          direction {windDir}
        </p>
      </div>
    </div>
  )
}

export default Weather
