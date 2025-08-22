import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import error from '../assets/error.png'
import { CiSearch } from "react-icons/ci";
import Button from '../components/Button';
const Error = () => {
  return (
    <section className='pt-20 pb-[140px]'>
      <Container>
         <Image src={error} />
         <p className='text-primary font-dm font-normal w-[644px] text-[#767676] pt-10'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
         <div className='relative w-[643px] border border-[#F0F0F0] mt-10 mb-12'>
          <input className='p-5 w-full' type="text" placeholder='Type To Search' />
          <CiSearch  className='absolute right-2 top-1/2 -translate-y-1/2 '/>=
         </div>
         <Button text='Back to Home'/>
      </Container>
    </section>
  )
}

export default Error