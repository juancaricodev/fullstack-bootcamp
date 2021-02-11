import React from 'react'

const Statistic = ({ description, value }) => {
  return (
    <>
      <thead>
        <tr>
          <th>{description}</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{value}</td>
        </tr>
      </tbody>
    </>
  )
}

export default Statistic
