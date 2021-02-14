import React, { useState } from 'react'

const Phonebook = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPerson = {
      name: newName
    }

    const nameMatch = persons.find((person) => person.name === newPerson.name)

    if (newPerson.name === '') {
      alert('The name field is empty')
    } else if (nameMatch) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      setPersons([...persons, newPerson])
    }

    setNewName('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <>
      <div className='part-tag'>
        <h2>The Phonebook</h2>
        <h3>Exercises 2.6 to 2.10</h3>
      </div>

      <div className='phonebook'>
        <h2>Phonebook</h2>
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
            <button type='submit'>Add</button>
          </div>
        </form>

        <h2>Numbers</h2>

        <ul>
          {persons.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Phonebook
