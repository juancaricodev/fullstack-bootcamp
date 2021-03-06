import React, { useState } from 'react'

import Button from '@components/unicafe/Button'
import Statistic from '@components/unicafe/Statistic'
import '@styles/containers/Unicafe.scss'

const Statistics = (props) => {
  const { good, neutral, bad, allClicks, average, goodPercentage } = props

  return (
    <>
      <table>
        <Statistic description='Good' value={good} />
        <Statistic description='Neutral' value={neutral} />
        <Statistic description='Bad' value={bad} />
        <Statistic description='All' value={allClicks} />
        <Statistic description='Average' value={average} />
        <Statistic description='Positive (%)' value={goodPercentage} />
      </table>
    </>
  )
}

const Unicafe = () => {
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

  const allClicks = good + neutral + bad

  const average = (good * 1 + neutral * 0 + bad * -1) / allClicks

  const goodPercentage = (good / allClicks) * 100

  return (
    <>
      <div className='part-tag'>
        <h2>Unicafe</h2>
        <h3>Exercises 1.6 to 1.11</h3>
      </div>

      <div className='part-two'>
        <h1>Give Feedback</h1>

        <div className='part-two__btns btn-set'>
          <Button handleEvent={handleGoodClick} text='Good' />
          <Button handleEvent={handleNeutralClick} text='Neutral' />
          <Button handleEvent={handleBadClick} text='Bad' />
        </div>

        <h1>Statistics</h1>

        <div className='part-two__stats'>
          {allClicks === 0 ? (
            <h3>No feedback given</h3>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              average={average}
              allClicks={allClicks}
              goodPercentage={goodPercentage}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Unicafe
