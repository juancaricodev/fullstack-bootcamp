import React, { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const PartThree = () => {
  const INITIAL_SCORES = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [scores, setScores] = useState(INITIAL_SCORES)
  const [mostVoted, setMostVoted] = useState(0)

  const handleClick = () => {
    setSelected(() => Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const prev = [...scores]
    prev[selected] += 1

    setScores(prev)

    const maxCalc = prev.indexOf(Math.max(...prev))
    setMostVoted(maxCalc)

    console.log('prev:', prev)
    console.log('most voted index', maxCalc)
  }

  console.log('scores:', scores)
  console.log('mostVoted:', mostVoted)
  return (
    <>
      <h2 className='part-tag'>Exercises 1.12 to 1.14 - WIP</h2>

      <div className='part-three'>
        <section className='anecdotes'>
          <h2>Anecdote of the day</h2>

          <div>{anecdotes[selected]}</div>

          <div>Has {scores[selected]} votes.</div>

          <button type='button' onClick={handleVote}>Vote</button>
          <button type='button' onClick={handleClick}>Next Anecdote</button>
        </section>

        <section className='most-voted'>
          <h2>Anecdote with most votes</h2>

          {
            mostVoted === 0
              ? <h3>No anecdote has been voted yet!</h3>
              : (
                <>
                  <div>{anecdotes[mostVoted]}</div>
                  <div>Has {scores[mostVoted]} votes.</div>
                </>
              )
          }
        </section>
      </div>
    </>
  )
}

export default PartThree
