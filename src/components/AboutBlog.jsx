import React from 'react'

const AboutBlog = ({title,text}) => {
  return (
    <div>
       <h4 className='text-secondary text-[25px] font-bold font-dm'>{title}</h4>
       <p className='text-primary text-base font-dm font-normal w-[506px] pt-4'>{text}</p>
    </div>
  )
}

export default AboutBlog