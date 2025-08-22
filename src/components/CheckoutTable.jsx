import React from 'react'
import Flex from './Flex'

const CheckoutTable = ({ product, total }) => {
  return (
    <Flex className={`border-[#F0F0F0] border-b ${product}`}>
      <p className="w-[320px] py-6 px-5 border-[#F0F0F0] border-r text-secondary text-base font-dm font-bold">
        {product}
      </p>
      <p className="w-[320px] py-6 px-5 text-primary text-base font-dm font-normal">
        {total}
      </p>
    </Flex>
  )
}

export default CheckoutTable