import React from 'react'

const NumbersFiltered = ({ newSearch, filteredData, handleShowAll }) => {
  return (
    <div className='filtered-container'>
      <h3>Numbers - filtered by: {newSearch}</h3>
      <ul>
        {filteredData.map((person) => (
          <li key={person.name}>
            {person.name} {person.number ? `-  ${person.number}` : ''}
          </li>
        ))}
        <button type='button' onClick={handleShowAll}>Show All</button>
      </ul>
    </div>
  )
}

export default NumbersFiltered
