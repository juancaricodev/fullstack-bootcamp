import React from 'react'

const Numbers = ({ newSearch, filteredData, handleShowAll }) => {
  return (
    <>
      <h3>Numbers - filtered by: {newSearch}</h3>
      <ul>
        {filteredData.map((person) => (
          <li key={person.name}>
            {person.name} {person.phone ? `-  ${person.phone}` : ''}
          </li>
        ))}
        <button type='button' onClick={handleShowAll}>Show All</button>
      </ul>
    </>
  )
}

export default Numbers
