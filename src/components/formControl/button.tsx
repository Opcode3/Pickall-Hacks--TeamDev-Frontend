import React from 'react'

type ButtonType = {
    label: string,
    onClick?: () => void
}
const Button = ({onClick, label}:ButtonType) => {
  return (
    <button onClick={onClick} className='mt-3 bg-pickall-primary bg-opacity-90  text-white text-base font-semibold py-2 px-4 rounded'>{label}</button>
  )
}

export default Button