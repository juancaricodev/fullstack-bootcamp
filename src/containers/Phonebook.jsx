import React, { useState } from 'react'

const Phonebook = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

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

        <h2>Numbers</h2>

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
