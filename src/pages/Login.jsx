import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Button from '../components/Button'

const Login = () => {
  return (
    <section className='py-[130px]'>
      <Container>
        <div className='border-b border-[#F0F0F0] pb-[60px] mb-[60px]'>
          <p className='text-primary text-[16px] font-dm font-normal w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <Heading className='' text='Returning Customer'/>
        <Flex className='gap-x-10'>
          <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="">Email Address: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="text" id='email' placeholder='company@domain.com' />
          </label>
        </div>
        <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="">Password: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="password" id='email' placeholder='......' />
          </label>
        </div>
        </Flex>
        <div className='border-b border-[#F0F0F0] pb-[70px] mb-[52]]'>
          <Button text='Login' />
        </div>
      <div className='pt-10'>
        <Heading text='New Customer'/>
       <p className='pt-[38px] pb-[52px] text-primary text-[16px] font-dm font-normal w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <Button className='' text='Login' />
      </div>
      </Container>
    </section>
  )
}

export default Login