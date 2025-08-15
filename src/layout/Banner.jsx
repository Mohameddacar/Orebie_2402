import React from 'react'
import Image from '../components/Image'
import BannerImg from '../assets/BannerImg.png'
import car from '../assets/car.png'
import load from '../assets/load.png'
import two from '../assets/two.png'
import Flex from '../components/Flex'
import Container from '../components/Container'
const Banner = () => {
  return (
    <section className='border-b bg-[##F0F0F0]'>
    <section className='bg-[#F5F5F3]'><Image className='block mx-auto'  src={BannerImg} /></section>
    <Container>
        <Flex className='justify-between'>

             <Flex className='items-center gap-x-4 py-[30px]'>
                <Image src={two}/>
                <p className='text-base text-[#6D6D6D] text-dm text-normal'>Two years warranty</p>
             </Flex>
             <Flex className='items-center gap-x-4 py-[30px]'>
                <Image src={car}/>
                <p className='text-base text-[#6D6D6D] text-dm text-normal'>Free shipping</p>
             </Flex>
             <Flex className='items-center gap-x-4 py-[30px]'>
                <Image src={load}/>
                <p className='text-base text-[#6D6D6D] text-dm text-normal'>Return policy in 30 days</p>
             </Flex>
        </Flex>
    </Container>
    </section>
  )
}

export default Banner