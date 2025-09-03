import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaBarsStaggered, FaCartPlus, FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from 'react-redux';

const Sidebar = () => {
  let data = useSelector((state)=> state)
  console.log(data);
  let [showcart , setShowcart]= useState(false)
  let handleAddtocart=()=>{
    setShowcart(!showcart)
  }
  return (
    <section className='py-8 bg-[#F5F5F3]'>
        <Container>
            <Flex  className='items-center'>
                <div className='w-3/12'>
                <Flex>
                    <FaBarsStaggered />
                    <p className='text-[#262626] text-sm font-normal pl-3'>Shop by Category</p>
                </Flex>
                </div>
                <div className='w-6/12'>
                  <div className='relative'>
                        <input type="text" placeholder='Search for products' className='w-full py-6 pl-4 pr-16 rounded-md focus:outline-none placeholder:text-[#C4C4C4] placeholder:text-lg' />
                        <IoSearch className='absolute top-1/2 right-[20px] -translate-y-1/2 text-xl'/>
                  </div>
                </div>
                <div className='w-3/12'>
                  <Flex className='justify-end items-center'>
                    <FaUser />
                    <IoMdArrowDropdown className='ml-[10px] text-black ' />
                    <FaCartPlus onClick={handleAddtocart} className='ml-10 text-black ' />
                    
                  </Flex>
                  {
                      showcart && <div className='w-1/3 h-screen bg-primary absolute top-0 right-0 z-10'></div>
                    }
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sidebar