import React, { useState } from 'react'

const PartThree = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)

  const INITIAL_SCORES = new Array(anecdotes.length + 1).join('0').split('').map(parseFloat)

  const [scores, setScores] = useState(INITIAL_SCORES)
  // const [scores, setScores] = useState([0, 0, 0, 0, 0, 0])

  const handleClick = () => {
    setSelected(() => Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    // const prev = [...scores]

    // setScores([prev[id] += 1])
    setScores([scores[0] += 1])

    console.log(scores)
  }

  return (
    <>
      <h2 className='part-tag'>Exercises 1.12 to 1.14 - WIP</h2>

      <div className='part-three'>
        <div>{anecdotes[selected]}</div>

        <div>Has {scores[selected]} votes.</div>

        <button type='button' onClick={handleVote}>Vote</button>
        <button type='button' onClick={handleClick}>Next Anecdote</button>
      </div>
    </>
  )
}

export default PartThree
