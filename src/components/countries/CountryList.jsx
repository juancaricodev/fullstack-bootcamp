import React from 'react'

const CountryList = ({ name, handleShow }) => {
  return (
    <li>
      {name}
      <button type='button' onClick={handleShow}>Show</button>
    </li>
  )
}

export default CountryList
