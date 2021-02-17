import React from 'react'

import Course from '@components/course/Course'

const Courses = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <div className='part-tag'>
        <h2>Course</h2>
        <h3>Exercises 1.1 to 1.5 - 2.1 to 2.5</h3>
      </div>

      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Course courses={course} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Courses
