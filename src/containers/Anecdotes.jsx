import React, { useState } from 'react'

import AnecdoteList from '@components/anecdotes/AnecdoteList'
import '@styles/containers/Anecdotes.scss'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const MostVoted = ({ anecdotes, scores }) => {
  return (
    <>
      <div>{anecdotes}</div>
      <div>Has {scores} votes.</div>
    </>
  )
}

const Anecdotes = () => {
  const INITIAL_SCORES = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [scores, setScores] = useState(INITIAL_SCORES)
  const [mostVoted, setMostVoted] = useState(0)

  const handleClick = () => {
    const random = () => Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const handleVote = () => {
    const prev = [...scores]
    prev[selected] += 1

    setScores(prev)

    const maxCalc = prev.indexOf(Math.max(...prev))
    setMostVoted(maxCalc)
  }

  return (
    <>
      <div className='part-tag'>
        <h2>Anecdotes</h2>
        <h3>Exercises 1.12 to 1.14</h3>
      </div>

      <div className='part-three'>
        <AnecdoteList
          anecdotes={anecdotes[selected]}
          scores={scores[selected]}
          handleClick={handleClick}
          handleVote={handleVote}
        />

        <section className='most-voted'>
          <h2>Anecdote with most votes</h2>

          {
            scores === INITIAL_SCORES
              ? <h3>No anecdote has been voted yet!</h3>
              : <MostVoted anecdotes={anecdotes[mostVoted]} scores={scores[mostVoted]} />
          }
        </section>
      </div>
    </>
  )
}

export default Anecdotes
