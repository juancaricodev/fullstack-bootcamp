import React from 'react'

const Total = (props) => {
  const { parts } = props

  return (
    <>
      <p>
        <strong>
          Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
        </strong>
      </p>
    </>
  )
}

export default Total
