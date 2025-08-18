import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const Contact = () => {
  return (
    <section className='py-[140px]'>
      <Container>
         <h4 className='text-secondary font-bold font-dm text-[39px] pb-8'>Fill Up Form</h4>
         <label className='text-base text-secondary font-bold font-dm' >Name:  <br />
          <input className='border-b border-[#F0F0F0] w-[48%] mb-6 py-3' type="text" placeholder='Enter Name Here' /> <br />
         </label>
         <label className='text-base text-secondary font-bold font-dm' >Email:  <br />
          <input className='border-b border-[#F0F0F0] w-[48%] mb-6 py-3' type="text" placeholder='Enter Email Here' /> <br />
         </label>
         <label className='text-base text-secondary font-bold font-dm' >Message:  <br />
          <textarea className='border-b border-[#F0F0F0] w-[48%] mb-6 py-3' type="text" placeholder='Enter Message Here' /> <br />
         </label>
         <Button  text="Post Message" />
          <iframe className='w-full h-[570px] pt-[140px]' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12546.02614441245!2d45.29446113674026!3d2.028195721047294!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sso!4v1755489873480!5m2!1sen!2sso"referrerpolicy="no-referrer-when-downgrade"></iframe>

      </Container>
    </section>
  )
}

export default Contact