import React from 'react'

import Content from '@components/partOne/Content'
import Header from '@components/partOne/Header'
import Total from '@components/partOne/Total'

const PartOne = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />

      <Content course={course} />

      <Total course={course} />
    </>
  )
}

export default PartOne
