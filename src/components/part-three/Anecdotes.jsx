import React from 'react'

const Anecdotes = (props) => {
  const { anecdotes, scores, handleVote, handleClick } = props

  return (
    <section className='anecdotes'>
      <h2>Anecdote of the day</h2>

      <div>{anecdotes}</div>

      <div>Has {scores} votes.</div>

      <div className='btn-set'>
        <button type='button' onClick={handleVote}>Vote</button>
        <button type='button' onClick={handleClick}>Next Anecdote</button>
      </div>
    </section>
  )
}

export default Anecdotes
