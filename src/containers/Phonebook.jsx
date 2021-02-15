import React, { useState } from 'react'

const INITIAL_STATE = [
  { name: 'Arto Hellas', phone: '040-123456' },
  { name: 'Ada Lovelace', phone: '39-44-5323523' },
  { name: 'Dan Abramov', phone: '12-43-234345' },
  { name: 'Dan Abramovich', phone: '12-43-234345' },
  { name: 'Arto Hollas', phone: '040-65445654' },
  { name: 'Arto Pollas', phone: '040-65445654' },
  { name: 'Mary Poppendieck', phone: '39-23-6423122' },
  { name: 'Harry Poppendieck', phone: '39-23-6423122' }
]

const Phonebook = () => {
  const [persons, setPersons] = useState(INITIAL_STATE)
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPerson = {
      name: newName,
      phone: newPhone
    }

    const nameMatch = persons.find((person) => person.name === newPerson.name)

    if (newPerson.name === '' || newPerson.phone === '') {
      alert('All fields should be filled')
    } else if (nameMatch) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      setPersons([...persons, newPerson])
      setFilteredData([])
    }

    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    const personsLower = persons.map((person) => person.name.toLowerCase())

    const searchLower = newSearch.toLowerCase()

    const filterPersons = personsLower.filter((person) => person === searchLower)

    setFilteredData(filterPersons)

    console.log('newSearch lower:', searchLower)
    console.log('persons lower:', personsLower)
    console.log('filter:', filterPersons)
  }

  const handleNameSearch = (e) => {
    setNewSearch(e.target.value)
  }

  const handleShowAll = () => {
    setFilteredData([])
    setNewSearch('')
  }

  return (
    <>
      <div className='part-tag'>
        <h2>The Phonebook</h2>
        <h3>Exercises 2.6 to 2.10</h3>
      </div>

      <div className='phonebook'>
        <h2>Phonebook</h2>

        <form onSubmit={handleSearchSubmit}>
          <input
            type='text'
            placeholder='Search by name'
            value={newSearch}
            onChange={handleNameSearch}
          />
          <button type='submit'>Search</button>
        </form>

        <h3>Add New</h3>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              value={newName}
              onChange={handleNameChange}
              placeholder='Name'
            />
          </div>

          <div>
            <input
              type='text'
              value={newPhone}
              onChange={handlePhoneChange}
              placeholder='Phone'
            />
          </div>

          <div>
            <button type='submit'>Add</button>
          </div>
        </form>

        <h3>Numbers {filteredData.length > 0 ? `- filtered by: ${newSearch}` : ''}</h3>

        {
          filteredData.length > 0
            ? (
              <ul>
                {filteredData.map((person) => (
                  <li key={person.name}>
                    {person.name} {person.phone ? `-  ${person.phone}` : ''}
                  </li>
                ))}
                <button type='button' onClick={handleShowAll}>Show All</button>
              </ul>
            ) : (
              <ul>
                {persons.map((person) => (
                  <li key={person.name}>
                    {person.name} {person.phone ? `-  ${person.phone}` : ''}
                  </li>
                ))}
              </ul>
            )
        }
      </div>
    </>
  )
}

export default Phonebook
