import React from 'react'

import Content from '@components/course/Content'
import Header from '@components/course/Header'
import Total from '@components/course/Total'

const Course = ({ courses }) => {
  console.log('getting courses', courses.name)

  return (
    <>
      <Header name={courses.name} />

      <Content parts={courses.parts} />

      <Total parts={courses.parts} />
    </>
  )
}

export default Course
