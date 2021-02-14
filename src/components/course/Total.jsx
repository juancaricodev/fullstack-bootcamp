import React from 'react'

const Total = ({ parts }) => {
  return (
    <strong>
      Number of exercises {parts.reduce((sum, course) => sum + course.exercises, 0)}
    </strong>
  )
}

export default Total
