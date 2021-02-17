import React from 'react'

import Part from '@components/course/Part'

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map(item => (
        <li key={item.id}>
          <Part part={item.name} exercises={item.exercises} />
        </li>
      ))}
    </ul>
  )
}

export default Content
