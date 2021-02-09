import React, { useState } from 'react'

import Button from '@components/part-two/Button'

const PartTwo = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(() => good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(() => neutral + 1)
  }

  const handleBadClick = () => {
    setBad(() => bad + 1)
  }

  return (
    <>
      <h2 className='part-tag'>Exercises 1.6 to 1.14 - WIP</h2>

      <div className='part-two'>
        <h1>Give Feedback</h1>

        <div className='part-two__btns'>
          <Button handleEvent={handleGoodClick} text='Good' />
          <Button handleEvent={handleNeutralClick} text='Neutral' />
          <Button handleEvent={handleBadClick} text='Bad' />
        </div>

        <h1>Statistics</h1>

        <div className='part-two__stats'>Good: {good}</div>
        <div className='part-two__stats'>Neutral: {neutral}</div>
        <div className='part-two__stats'>Bad: {bad}</div>
      </div>
    </>
  )
}

export default PartTwo
