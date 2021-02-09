import React from 'react'

const Statistic = ({ description, value }) => {
  return (
    <div>
      {description}: {value}
    </div>
  )
}

export default Statistic
