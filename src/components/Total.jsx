import React from 'react'

const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props

  return (
    <>
      <p><strong>Number of exercises {exercises1 + exercises2 + exercises3}</strong></p>
    </>
  )
}

export default Total
