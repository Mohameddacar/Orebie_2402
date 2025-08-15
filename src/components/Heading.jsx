import React from 'react'

const Heading = ({text,ClassName}) => {
  return (
    <h2 className={`font-dm text-bold text-[39px] text-secondary ${ClassName}`}>{text}</h2>
  )
}

export default Heading