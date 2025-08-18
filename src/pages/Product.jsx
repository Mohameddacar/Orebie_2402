import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ProductOne from '../assets/ProductOne.png'
import ProductTwo from '../assets/ProductTwo.png'
import ProductThree from '../assets/ProductThree.png'
import ProductFour from '../assets/ProductFour.png'
import Image from '../components/Image'
import Heading from '../components/Heading'
import { FaStar } from 'react-icons/fa6'
import Button from '../components/Button'

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

            <Heading text="Product" />
            <Flex className='gap-x-6'>
              <ul className='flex gap-x-1'>
              <li><FaStar className='text-[#FFD881] text-sm'/></li>
              <li><FaStar className='text-[#FFD881] text-sm'/></li>
              <li><FaStar className='text-[#FFD881] text-sm'/></li>
              <li><FaStar className='text-[#FFD881] text-sm'/></li>
              <li><FaStar className='text-[#FFD881] text-sm'/></li>
            </ul>
            <p className='text-sm text-[#767676] font-primary font-normal'>1Review</p>
            </Flex>
            <Flex className='items-center gap-x-4 pt-4 pb-6 border-b border-[#F0F0F0] w-[48%]'>
              <p className='text-base text-[#767676] font-primary font-normal font-dm'>$88.00</p>
              <p className='text-xl text-[#767676] font-secondary font-bold font-dm'>$44.00</p>
            </Flex>
            <Flex className='gap-x-[54px] py-8 '>
              <h4 className='text-base text-[#767676] font-secondary font-bold font-dm'>COLOR:</h4>
              <ul className='flex gap-x-3'>
                <li className='w-[20px] h-[20px] bg-[#000000] rounded-full hover:scale-[1.6] duration-500'></li>
                <li className='w-[20px] h-[20px] bg-[#FF8686] rounded-full hover:scale-[1.6] duration-500'></li>
                <li className='w-[20px] h-[20px] bg-[#7ED321] rounded-full hover:scale-[1.6] duration-500'></li>
                <li className='w-[20px] h-[20px] bg-[#B6B6B6] rounded-full hover:scale-[1.6] duration-500'></li>
                <li className='w-[20px] h-[20px] bg-[#15CBA5] rounded-full hover:scale-[1.6] duration-500'></li>
              </ul>
            </Flex>
            <Flex className='items-center gap-x-[75px] pb-8 '>
              <h4 className='text-base text-[#767676] font-secondary font-bold font-dm'>SIZE:</h4>
                <select className='py-2 px-10 border border-[#F0F0F0]'>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option >XL</option>
                </select>
            </Flex>
            <Flex className='items-center gap-x-[30px] pb-8 '>
              <h4 className='text-base text-[#767676] font-secondary font-bold font-dm'>QUANTITY:</h4>
                <select className='py-2 px-10 border border-[#F0F0F0]'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
            </Flex>
            <Flex className='items-center gap-x-[30px] border-b border-[#F0F0F0] w-[48%] py-6'>
              <h4 className='text-base text-[#767676] font-secondary font-bold font-dm'>STATUS:</h4>
              <p className='text-base text-secondary font-dm font-bold'>In Stock</p>
            </Flex>
            <Flex className='gap-x-5 py-11 border-b border-[#F0F0F0] w-[48%]'>
              <Button text='Add To WashList'/>
              <Button text='Add To Cart'/>
            </Flex>
            <Flex className='items-center gap-x-[30px] border-b border-[#F0F0F0] w-[48%] py-6'>
              <h4 className='text-base text-[#767676] font-secondary font-bold font-dm'>FEATURES & DETAILS:</h4>
            </Flex>
            <Flex className='items-center gap-x-[30px] border-b border-[#F0F0F0] w-[48%] py-6'>
              <h4 className='text-base text-[#767676] font-secondary font-bold font-dm'>SHIPPING & RETURNS</h4>
            </Flex>
            <p className='pt-5 font-normal font-dm text-[#767676] text-base text-secondary w-[780px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Flex className='pt-[124px] pb-11 gap-x-[66px]'>
              <p className='text-xl font-normal font-dm text-primary'>Description</p>
              <p className='text-xl font-bold font-dm text-secondary'>1Reviews</p>
            </Flex>
            <Flex className='gap-x-10'>
              <p>John Ford</p>
              <ul className='flex gap-x-1 items-center '>
                <li><FaStar className='text-[#FFD881] text-sm'/></li>
                <li><FaStar className='text-[#FFD881] text-sm'/></li>
                <li><FaStar className='text-[#FFD881] text-sm'/></li>
                <li><FaStar className='text-[#FFD881] text-sm'/></li>
                <li><FaStar className='text-[#FFD881] text-sm'/></li>
              </ul>
            </Flex>
            <p className='text-sm text-primary font-dm font-normal border-b border-[#F0F0F0] pb-6'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <h4 className='text-base text-secondary font-dm font-bold pt-8'>Add a Review</h4>

            <form className="space-y-6 pt-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name here"
                    className="mt-1 block w-1/2 py-3 border-b border-[#F0F0F0] focus:outline-none focus:border-black"
                  />
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Your email here"
                            className="mt-1 block w-1/2 py-3 border-b border-[#F0F0F0] focus:outline-none focus:border-black"
                          />
                        </div>

                        {/* Review */}
                        <div>
                          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                            Review
                          </label>
                          <textarea
                            id="review"
                            placeholder="Write your review here"
                            rows="3"
                            className="mt-1 block w-1/2 py-3 border-b border-[#F0F0F0] focus:outline-none focus:border-black"
                          />
                        </div>

                        {/* Submit Button */}
                        <Button text="Submit Review" className="" />
               </form>

        </Container>
    </section>
  )
}

export default Product