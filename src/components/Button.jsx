import React from 'react'

const Button = ({text,className}) => {
  return (
    <button 
      className={`bg-black py-2 px-6 text-white text-sm font-bold font-dm 
      hover:bg-transparent hover:text-black border border-transparent 
      hover:border-black ${className}`}
    >
      {text}
    </button>
  )
}

export default Button