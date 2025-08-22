import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Button from '../components/Button'
import CheckoutTable from '../components/CheckoutTable'
import CheckoutInput from '../components/CheckoutInput'

const Checkout = () => {
  return (
    <section className='pt-[120px] pb-[170px]'>
      <Container>
        <Heading text='Checkout'/>
        <p>Home  Checkout</p>
        <p className='pt-[127px]  pb-[120px] font-dm font-normal text-primary text-base'>Have a coupon? <span className='font-dm font-bold text-secondary text-base'>Click here to enter your code</span></p>

        <Heading className='!pb-[42px]' text='Billing Details'/>

        <Flex className='gap-x-4 pb-[30px]'>
          <CheckoutInput label = "First Name *" id="fname" placeholder ="First Name" typeRequire={true}inputClassName="" labelClassName = "" />
          <CheckoutInput label = "Last Name *" id="lname" placeholder ="Last Name" typeRequire={false}/>

        </Flex>
        <CheckoutInput label = "Last NameCompanye Name (optional)" id="company" placeholder ="Company Name" typeRequire={false} inputClassName="!w-[1054px]" labelClassName = "" />
        <CheckoutInput label = "Country *" id="country" placeholder ="Please select" typeRequire={true} inputClassName="!w-[1054px]" labelClassName = "" />
        <CheckoutInput label = "Street Address *" id="street" placeholder ="House number and street name" typeRequire={true} inputClassName="!w-[1054px]" labelClassName = "" />
        <CheckoutInput label = "Town/City *" id="town" placeholder ="Town/City" typeRequire={true} inputClassName="!w-[1054px]" labelClassName = "" />
        <CheckoutInput label = "County (optional)" id="county" placeholder ="County" typeRequire={false} inputClassName="!w-[1054px]" labelClassName = "" />
        <CheckoutInput label = "Post Code *" id="code" placeholder ="Post Code" typeRequire={true} inputClassName="!w-[1054px]" labelClassName = "" />
        <CheckoutInput label = "Phone *" id="phone" placeholder ="Phone " typeRequire={true} inputClassName="!w-[1054px]" labelClassName = "" />
        <CheckoutInput label = "Email Address *" id="email" placeholder ="Email" typeRequire={true} inputClassName="!w-[1054px]" labelClassName = "" />


        <h4 className="text-[39px] text-secondary font-dm font-bold pt-[122px] pb-12">
            Additional Information
          </h4>

          <label className="text-base text-secondary font-dm font-bold" htmlFor="name">
            Other Notes (optional) <br />
            <textarea
              id="name"
              className="w-[1054px] py-[10px] mb-6 border-b border-[#F0F0F0]"
              placeholder="Notes about your order, e.g. special notes for delivery."
            />
          </label>
          <br />

          <h4 className="text-[39px] text-secondary font-dm font-bold pt-[122px] pb-12">
  Your Order
</h4>

      <div className="border border-[#F0F0F0] w-[644px]">
      <CheckoutTable product="Product Name" total="$388.99" />
      <CheckoutTable product="Product  x 1" total="$388.99" />
      <CheckoutTable product="Sub Total" total="$388.99" />
      <CheckoutTable product="Total" total="$388.99" />
      </div>
      
      <div className="border border-[#F0F0F0] w-[1054] mt-[60px] pt-6 px-[34px] pb-8 ">
        <label  className='text-base text-secondary font-dm font-bold' htmlFor="bank">
        <input id="bank" className='mr-3 ' type="radio" />Bank
      </label> <br />
      <input className='py-6 px-5 w-full bg-[#F0F0F0] mb-[26px] ' type="text" placeholder='Pay via Bank; you can pay with your credit card if you don’t have a Bank account.'/>
        <label  className='text-base text-secondary font-dm font-bold' htmlFor="bank">
        <input id="bank" className='mr-3 mb-[26px]' type="radio" />Bank
      </label> <br />
      <input className='py-6 px-5 w-full mb-[26px]' type="text" placeholder='Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.'/>
      <Button text="Proceed to Bank" />
      </div>
      </Container>
    </section>
  )
}

export default Checkout