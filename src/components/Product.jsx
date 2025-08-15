import React from 'react'
import Image from './Image'
import Flex from './Flex'
import { FaCartPlus, FaHeart } from 'react-icons/fa6'
import { IoGitCompareOutline } from 'react-icons/io5'
const Product = ({src,title,price}) => {
  return (
    <div className='relative w-[370px] rounded-lg shadow-md group'>
        <div className="w-full h-[370px] relative overflow-hidden rounded-lg">
            <Image className='w-full' src={src} />
            <div className='group-hover:bottom-0 duration-100 absolute -bottom-[157px] left-0 w-full h-[156px] bg-white '>
                <ul className='flex flex-col items-end gap-y-4  px-[30px] py-6'>
                    <li className='text-[#767676] font-dm font-normal '>Add to Wish List <FaHeart className='text-sm inline ml-4'/></li>
                    <li className='text-[#767676] font-dm font-normal '>Compare <IoGitCompareOutline className='text-sm inline ml-4'/></li>
                    <li className='text-[#767676] font-dm font-normal '>Add to Cart <FaCartPlus className='text-sm inline ml-4'/></li>
                </ul>
            </div>
        </div>
        <Flex className='justify-between p-4'>
            <h4 className='font-dm text-secondary text-[#262626]'>{title}</h4>
            <p className='text-secondary text-[#767676]'>${price}</p>
        </Flex>
        <h6 className='text-[16px] text-[#767676] font-dm p-4'>Black</h6>

        <button className='absolute top-5 left-5 py-3 px-8 text-white bg-black font-dm font-normal text-sm'>New</button>
    </div>
  )
}

export default Product