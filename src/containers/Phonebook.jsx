import React, { useState } from 'react'

const Phonebook = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  return (
    <>
      <div className='part-tag'>
        <h2>The Phonebook</h2>
        <h3>Exercises 2.6 to 2.10</h3>
      </div>

      <div className='phonebook'>
        <h2>Phonebook</h2>
        <form>
          <div>
            Name: <input type='text' />
          </div>
          <div>
            <button type='submit'>add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        ...
      </div>
    </>
  )
}

export default Phonebook
