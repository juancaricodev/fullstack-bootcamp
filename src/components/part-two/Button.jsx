import React from 'react'

const Button = ({ handleEvent, text }) => {
  return (
    <button type='button' onClick={handleEvent}>
      {text}
    </button>
  )
}

export default Button
