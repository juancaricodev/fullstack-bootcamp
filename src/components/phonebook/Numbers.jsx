import React from 'react'

const Numbers = ({ persons }) => {
  return (
    <>
      <h3>Numbers</h3>
      <ul>
        {persons.map(person => (
          <li key={person.name}>
            {person.name} {person.number ? `-  ${person.number}` : ''}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Numbers
