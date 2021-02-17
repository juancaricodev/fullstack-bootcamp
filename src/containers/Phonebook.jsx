import React, { useState, useEffect } from 'react'

import NewPeople from '@components/phonebook/NewPeople'
import Numbers from '@components/phonebook/Numbers'
import NumbersFiltered from '@components/phonebook/NumbersFiltered'
import Searchbar from '@components/phonebook/Searchbar'

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
    const fetchingData = fetch('http://localhost:5000/persons')
    fetchingData
      .then(res => res.json())
      .then(res => setPersons(res))
      .catch(err => console.error('Error =>', err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPerson = {
      name: newName,
      number: newPhone
    }

    const nameMatch = persons.find(person => person.name === newPerson.name)

    if (newPerson.name === '' || newPerson.number === '') {
      alert('All fields should be filled')
    } else if (nameMatch) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      setPersons([...persons, newPerson])
      setFilteredData([])
    }

    setNewName('')
    setNewPhone('')
    setEmpty(false)
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
              />
            ) : (
              <Numbers persons={persons} />
            )
        }
      </div>
    </>
  )
}

export default Phonebook
