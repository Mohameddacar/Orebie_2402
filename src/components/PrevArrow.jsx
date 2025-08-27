import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

const PrevArrow = ({className,onClick}) => {
  return (
    <div className={`${className} absolute top-[43%] left-0 z-20 -translate-y-1/2 w-[64px] h-[64px] rounded-full bg-[#979797] flex justify-center items-center`} onClick={onClick}>
        <FaArrowLeftLong />
    </div>
  )
}

export default PrevArrow