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
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from '../components/NextArrow'
import PrevArrow from '../components/PrevArrow'

const Home = () => {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />
    
  };
  return (
    <>
    <Banner />
    <Offer />
    <Container>
      <Heading className='pb-10 pt-12' text='New Arrivals' />
      <Slider {...settings}>
      <div>
        <Product src={ProductOne} title="Basic Crew Neck Tee" price='44.00'/>
      </div>
      <div>
        <Product src={ProductTwo} title="Basic Crew Neck Tee" price='44.00'/>
      </div>
      <div>
        <Product src={ProductThree} title="Basic Crew Neck Tee" price='44.00'/>
      </div>
      <div>
         <Product src={ProductFour} title="Basic Crew Neck Tee" price='44.00'/>
      </div>
      <div></div>
    </Slider>
      <Flex className='justify-between pb-[118px] pt-12 gap-x-10'>
        <Product src={ProductOne} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductTwo} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductThree} title="Basic Crew Neck Tee" price='44.00'/>
        <Product src={ProductFour} title="Basic Crew Neck Tee" price='44.00'/>
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