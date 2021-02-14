import React, { useState } from 'react'

const INITIAL_STATE = [
  { name: 'Arto Hellas', phone: '040-123456' },
  { name: 'Ada Lovelace', phone: '39-44-5323523' },
  { name: 'Dan Abramov', phone: '12-43-234345' },
  { name: 'Mary Poppendieck', phone: '39-23-6423122' }
]

const Phonebook = () => {
  const [persons, setPersons] = useState(INITIAL_STATE)
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

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
    console.log('searching')
  }

  const handleNameSearch = (e) => {
    setNewSearch(e.target.value)
    console.log(newSearch)
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

        <h3>Numbers</h3>

        <ul>
          {persons.map((person) => (
            <li key={person.name}>
              {person.name} {person.phone ? `-  ${person.phone}` : ''}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Phonebook
