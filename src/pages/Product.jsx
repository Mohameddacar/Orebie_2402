import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ProductOne from '../assets/ProductOne.png'
import ProductTwo from '../assets/ProductTwo.png'
import ProductThree from '../assets/ProductThree.png'
import ProductFour from '../assets/ProductFour.png'
import Image from '../components/Image'

const Product = () => {
  return (
    <section>
        <Container>
            <Flex className='flex-wrap pt-[150px] pb-12 gap-[40px]'>
                <div className='w-[48%]'><Image className='w-full' src={ProductOne} /></div>
                <div className='w-[48%]'><Image className='w-full' src={ProductTwo} /></div>
                <div className='w-[48%]'><Image className='w-full' src={ProductThree} /></div>
                <div className='w-[48%]'><Image className='w-full' src={ProductFour} /></div>
            </Flex>
        </Container>
    </section>
  )
}

export default Product