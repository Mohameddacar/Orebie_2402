import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Heading from '../components/Heading'
import aboutOne from '../assets/about1.png'
import aboutTwo from '../assets/about2.png'
import AboutBlog from '../components/AboutBlog'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/counterSlice'
import { Link } from 'react-router-dom'

const About = () => {
  let data = useSelector((state) => state.breadcrumb.prevalue)

  return (
    <section className='py-[128px]'>
        <Container>

       <Heading className='!text-[49px] font-bold font-dm' text="About" />
       <p> <Link to={data == "Home"?"/":`/${data}`}></Link> {data} > about </p>
      <Flex className='flex-wrap pt-[135px] pb-[128px] justify-between'>
        <div className=' w-[48%] relative'>
          <Image src={aboutOne} />
          <button className='py-7 px-[97px] bg-black text-white text-base font-dm absolute bottom-10 left-1/2 -translate-x-1/2'>Our Brands</button>
        </div>
        <div className=' w-[48%] relative'>
          <Image src={aboutTwo} />
          <button className='py-7 px-[97px] bg-black text-white text-base font-dm absolute bottom-10 left-1/2 -translate-x-1/2'>Our Brands</button>
        </div>
      </Flex>
      <p className='text-secondary font-normal text-[39px] font-dm'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>

      <Flex className='justify-between gap-x-[41px] pt-[80px] pb-[128px]'>
        
        <AboutBlog title="Our Vision" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
        <AboutBlog title="Our Hostory" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
        <AboutBlog title="Our Brands" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
        
      </Flex>
    </Container>
    </section>
  )
}

export default About