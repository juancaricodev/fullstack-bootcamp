import React from 'react'

const NumbersFiltered = ({ persons }) => {
  return (
    <>
      <h3>Numbers</h3>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.phone ? `-  ${person.phone}` : ''}
          </li>
        ))}
      </ul>
    </>
  )
}

export default NumbersFiltered
