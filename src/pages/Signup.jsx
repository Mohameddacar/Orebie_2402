import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Button from '../components/Button'
const Signup = () => {
  return (
    <section className='py-[130px]'>
      <Container>
        <div className='border-b border-[#F0F0F0] pb-[60px] mb-[60px]'>
          <p className='text-primary text-[16px] font-dm font-normal w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <Heading className='' text='Your Personal Details'/>
        <Flex className='gap-x-10 flex-wrap'>
          <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="firstname">First Name: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="text" id='firstname' placeholder='First Name' />
          </label>
        </div>
        <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="lastname">Last Name: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="password" id='text' placeholder='Last Name' />
          </label>
        </div>
          <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="">Email Address: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="text" id='email' placeholder='company@domain.com' />
          </label>
        </div>
        <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="telephone">Telephone: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="text" id='telephone' placeholder='Telephone' />
          </label>
        </div>
        </Flex>
        <div className='border-b border-[#F0F0F0] pb-[70px] mb-[52]]'>
        </div>
      <div className='pt-10'>
        <Heading text='New Customer'/>
        <Flex className='gap-x-10 flex-wrap'>
          <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="address">Address 1: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="text" id='address' placeholder='123-123 Buuloxuubeey' />
          </label>
        </div>
        <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="address2">Address 2: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="text" id='address2' placeholder='4279 Hammarweyne' />
          </label>
        </div>
          <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="city">City: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="text" id='city' placeholder='Your City' />
          </label>
        </div>
        <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="code">Post Code: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="text" id='code' placeholder='252' />
          </label>
        </div>
        <br />
                <div className="w-[507px] py-6">
              <label
                className="text-base text-secondary font-dm font-bold"
                htmlFor="country"
              >
                City
              </label>
              <select
                className="mt-2 block border-b border-[#F0F0F0] w-full text-sm text-primary font-dm font-normal py-2 focus:outline-none"
                id="country"
              >
                <option value="01">Please select</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="nepal">Nepal</option>
                <option value="pakistan">Pakistan</option>
              </select>
            </div>


        <div className="w-[507px] py-6">
              <label
                className="text-base text-secondary font-dm font-bold"
                htmlFor="country"
              >
                Region/State
              </label>
              <select
                className="mt-2 block border-b border-[#F0F0F0] w-full text-sm text-primary font-dm font-normal py-2 focus:outline-none"
                id="country"
              >
                <option value="01">Please select</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="nepal">Nepal</option>
                <option value="pakistan">Pakistan</option>
              </select>
            </div>
            <div className='border-b border-[#F0F0F0] pb-[70px] mb-[52]'>
        </div>
        </Flex>
      </div>
      <div className='border-b border-[#F0F0F0] pb-[70px] mb-[52]]'>
        </div>
      <div className='pt-10'>
        <Heading text='Your Password'/>
        <Flex className='gap-x-10 flex-wrap'>
          <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="password">Password: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="password" id='password' placeholder='Your Password' />
          </label>
        </div>
        <div className='w-[507px] mb-7 mt-10'>
          <label className='text-base text-secondary font-dm font-bold' htmlFor="rppassword">Repeat Password: <br />
            <input className='py-4 border-b border-[#F0F0F0] w-full' type="password" id='rppassword' placeholder='Repeat Password' />
          </label>
        </div>
        </Flex>
      </div>

<div className='border-b border-[#F0F0F0] pb-[70px] mb-[52]]'>
        </div>

      <div className="relative mt-[65px]">
        <label
          className="ml-10 text-sm text-primary font-dm font-normal"
          htmlFor="iagrre"
        >
          <input
            className="pr-10 absolute top-1/2 left-0 -translate-y-1/2"
            type="checkbox"
            id="iagrre"
          />
          I have read and agree to the Privacy Policy
        </label>
      </div>
  
      <Flex>
        <div className='pt-7'>
          Subscribe Newsletter
          <div className='relative inline ml-10'>
          <label className='ml-4 text-sm text-primary font-dm font normal' For="yes">
            <input className="pr-10 absolute top-1/2 right-7 -translate-y-1/2" type="checkbox"
            id="iagrre" />
            Yes
          </label>
        </div>
        <div className='relative inline ml-10'>
          <label className='ml-4 text-sm text-primary font-dm font normal' For="yes">
            <input className="pr-10 absolute top-1/2 right-7 -translate-y-1/2" type="checkbox"
            id="iagrre" />
            Yes 
          </label>
        </div>
        </div> 
        
      </Flex>
      <Button className='mt-7' text='Log in' />
      </Container>
    </section>
  )
}

export default Signup