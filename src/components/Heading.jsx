import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`font-dm text-bold text-[39px] text-secondary ${className}`}>{text}</h2>
  )
}

export default Heading