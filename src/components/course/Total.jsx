import React from 'react'

const Total = (props) => {
  const { course } = props

  return (
    <strong>
      Number of exercises {course.parts.reduce((sum, course) => sum + course.exercises, 0)}
    </strong>
  )
}

export default Total
