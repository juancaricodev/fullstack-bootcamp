import React from 'react'

const Searchbar = ({ submit, value, change }) => {
  return (
    <form onSubmit={submit}>
      <input
        type='text'
        placeholder='Search by name'
        value={value}
        onChange={change}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default Searchbar
