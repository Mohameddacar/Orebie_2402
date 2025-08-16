import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Navber from '../layout/Navber'
import Sidebar from '../layout/Sidebar'
import Banner from '../layout/Banner'
import Offer from '../layout/Offer'
import { FaHeading } from 'react-icons/fa6'
import Heading from '../components/Heading'
import Product from '../components/Product'
import ProductOne from '../assets/product1.jpg'
import ProductTwo from '../assets/product2.jpg'
import ProductThree from '../assets/product3.png'
import ProductFour from '../assets/product4.png'
import Promotion from '../assets/promotion.png'
// import Orebie from '../assets/orebie.png'

const Home = () => {
  return (
    <>
    <Banner />
    <Offer />
    <Container>
      <Heading ClassName='pt-12 pb-12 ' text='New Arrivals' />
      <Flex className='justify-between pb-[118px]'>
        <Product src={ProductOne} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductTwo} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductThree} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductFour} title="Basic Crew Neck Tee" price='44.00'/>
      </Flex>

      <Heading ClassName='pb-12 ' text='Our Bestsellers' />
      <Flex className='justify-between pb-[118px]'>
        <Product src={ProductOne} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductTwo} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductThree} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductFour} title="Basic Crew Neck Tee" price='44.00'/>
      </Flex>

      <Image  className='mb-[128px]' src={Promotion}/>

      <Heading ClassName='pb-14' text='Special Offers' />
      <Flex className='justify-between pb-[118px]'>
        <Product src={ProductOne} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductTwo} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductThree} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductFour} title="Basic Crew Neck Tee" price='44.00'/>
      </Flex>
    </Container>
    
    </>
  )
}

export default Home