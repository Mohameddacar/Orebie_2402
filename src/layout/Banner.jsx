import React from 'react'
import Image from '../components/Image'
import BannerImg from '../assets/BannerImg.png'
import car from '../assets/car.png'
import load from '../assets/load.png'
import two from '../assets/two.png'
import Flex from '../components/Flex'
import Container from '../components/Container'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Banner = () => {
     var settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className='border-b bg-[##F0F0F0]'>
    {/* <Image className='block mx-auto'  src={BannerImg} /> */}
    <div className='mx-w-[1800px]'>
      <Slider {...settings}>
      <div>
        <Image className='block mx-auto'  src={BannerImg} />
      </div>
      <div>
        <Image className='block mx-auto'  src={BannerImg} />
      </div>
      <div>
        <Image className='block mx-auto'  src={BannerImg} />
      </div>
    </Slider>
    </div>
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