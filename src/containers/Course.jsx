import React from 'react'

import Content from '@components/course/Content'
import Header from '@components/course/Header'
import Total from '@components/course/Total'

const Course = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <>
      <div className='part-tag'>
        <h2>Course</h2>
        <h3>Exercises 1.1 to 1.5</h3>
      </div>

      <Header course={course} />

      <Content course={course} />

      <Total course={course} />
    </>
  )
}

export default Course
