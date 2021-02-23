import React, { useState, useEffect } from 'react'

import NewPeople from '@components/phonebook/NewPeople'
import Numbers from '@components/phonebook/Numbers'
import NumbersFiltered from '@components/phonebook/NumbersFiltered'
import Searchbar from '@components/phonebook/Searchbar'
import phonebookService from '@services/phonebook'

import '@styles/containers/Phonebook.scss'

const Phonebook = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [match, setMatch] = useState(true)
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(err => console.error('Error =>', err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPerson = {
      id: Math.max(...persons.map(person => person.id)) + 1,
      name: newName,
      number: newPhone,
      deleted: false
    }

    const nameMatch = persons.find(person => person.name === newPerson.name)

    if (newPerson.name === '' || newPerson.number === '') {
      alert('All fields should be filled')
    } else if (nameMatch) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      phonebookService
        .create(newPerson)
        .then(newPerson => setPersons([...persons, newPerson]))

      setFilteredData([])
      console.log(newPerson)
    }

    setNewName('')
    setNewPhone('')
    setEmpty(false)
  }

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)

    const deletedPerson = { ...person, deleted: true }

    phonebookService
      .deleteId(id, deletedPerson)
      .then((newData) => {
        setPersons(persons.map(person => (person.id !== id ? person : newData)))
        filteredData.length > 0
          && setFilteredData(filteredData.map(person => (person.id !== id ? person : newData)))
      })
      .catch(err => console.log(`Error deleting person with id ${id} => ${err}`))
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    const newArray = [...persons]

    const searchLower = newSearch.toLowerCase()

    const filterPersons = newArray.filter(person => person.name.toLowerCase().includes(searchLower))

    if (newSearch.length > 0) {
      setFilteredData(filterPersons)
      setEmpty(false)
    } else {
      setEmpty(true)
    }

    filterPersons.length > 0
      ? setMatch(true)
      : setMatch(false)
  }

  const handleNameSearch = (e) => {
    setNewSearch(e.target.value)
  }

  const handleShowAll = () => {
    setFilteredData([])
    setNewSearch('')
    setEmpty(false)
  }

  return (
    <>
      <div className='part-tag'>
        <h2>The Phonebook</h2>
        <h3>Exercises 2.6 to 2.10</h3>
      </div>

      <div className='phonebook'>
        <h2>Phonebook</h2>

        <Searchbar
          submit={handleSearchSubmit}
          value={newSearch}
          change={handleNameSearch}
          match={match}
          empty={empty}
        />

        <h3>Add New</h3>

        <NewPeople
          submit={handleSubmit}
          name={newName}
          nameChange={handleNameChange}
          phone={newPhone}
          phoneChange={handlePhoneChange}
        />

        {
          filteredData.length > 0
            ? (
              <NumbersFiltered
                newSearch={newSearch}
                filteredData={filteredData}
                handleShowAll={handleShowAll}
                deleteId={id => handleDelete(id)}
              />
            ) : (
              <Numbers persons={persons} deleteId={id => handleDelete(id)} />
            )
        }
      </div>
    </>
  )
}

export default Phonebook
