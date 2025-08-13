import React from 'react'

const Lists = ({text,className}) => {
  return (
    <li className={`text-primary text-sm font-dm font-normal list-none hover:text-secondary duration-500 cursor-pointer hover:font-bold  ${className}`}>{text}</li>
  )
}

export default Lists