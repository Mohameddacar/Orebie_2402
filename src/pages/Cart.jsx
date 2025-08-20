import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Button from '../components/Button'
import Cart1 from '../assets/cart1.png'
import Flex from '../components/Flex'

const Cart = () => {
  return (
    <section className='py-[140px]'>
      <Container>
          <ul className ='flex gap-x-[340px] bg-[#F5F5F3] py-[34px] px-5'>
            <li className='text-secondary text-xl font-dm font-bold'>Product </li>
            <li className='text-secondary text-xl font-dm font-bold'>Price </li>
            <li className='text-secondary text-xl font-dm font-bold'>Quantity</li>
            <li className='text-secondary text-xl font-dm font-bold'>Total</li>
          </ul>
          <ul className ='flex items-center py-8 border-b border-[#F5F5F3]'>
            <li className='px-3'>X </li>
            <li className='px-10'><Image src={Cart1} /></li>
            <li className='px-10 text-secondary text-base font-dm font-bold'>Product name</li>
            <li className='px-10 text-secondary text-xl font-dm font-bold'>$44.00</li>
            <li className='ml-[280px] border border-[#F0F0F0] px-7 py-2 flex gap-x-6 text-sm text-primary'><span>+</span><span>1</span><span>-</span></li>       
            <li className='ml-[280px] text-secondary text-xl font-dm font-bold'>$44.00</li>
          </ul>
          <ul className='flex items-center gap-x-10 py-8 border-b border-[#F5F5F3]'>
            <li className='py-2 px-12 border-b border-[#F5F5F3] text-secondary text-xl font-dm font-bold'>
              <select>
                <option value="">SIZE</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">S</option>
              </select>
            </li>
            <li className='pl-[30px] text-secondary text-sm font-dm font-bold'>Apply coupon</li>
            <li className='pl-[1000px] text-secondary text-sm font-dm font-bold'>Update cart</li>
          </ul>
          <h4 className='text-secondary text-xl font-bold font-dm text-end pt-[54px] pb-6'>Cart totals</h4>
          <div className='w-[644px] border border-[#F5F5F3] ml-auto'>
            <Flex className='border-b border-[#F5F5F3]'>
              <p className='border-r border-[#F5F5F3] pl-5 pr-[200px] py-4 text-base text-secondary font-dm font-bold'>Subtotal</p>
              <p className='pl-5 pr-[200px] py-4 text-base text-primary font-dm font-bold'>389.99 $</p>
            </Flex>
            <Flex className='border-b border-[#F5F5F3]'>
              <p className='border-r border-[#F5F5F3] pl-5 pr-[200px] py-4 text-base text-secondary font-dm font-bold'>Total</p>
              <p className='pl-5 pr-[200px] py-4 text-base text-primary font-dm font-bold'>389.99 $</p>
            </Flex>
          </div>
          <div className='text-end pt-8'>
            <Button text='Proceed to Checkout' />
          </div>
      </Container>
    </section>
  )
}

export default Cart