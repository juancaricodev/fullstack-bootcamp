import React from 'react'

const SearchBar = ({ handleSubmit, search, handleInputChange }) => {
  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        type='text'
        value={search}
        onChange={handleInputChange}
        placeholder='Search for a country'
      />
    </form>
  )
}

export default SearchBar
