import React, { useState } from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/counterSlice'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'
import Flex from '../components/Flex'
import data from '../data'
import Image from '../components/Image'
import DesignOne from './../assets/designone.png'
import DesignTwo from './../assets/designtwo.png'
import { FiPlus } from 'react-icons/fi'
import Category from '../components/Category'
import SubCategory from '../components/SubCategory'

console.log(data)

const Shop = () => {
  let [showItem ,setShowItem] = useState()
  let [Change ,setChange] = useState(false)
  let data=useSelector((state)=>state.breadcrumb.preavalue)
  let category=useSelector((state)=>state.category.value)
  console.log(category)
  

  let handleChange=(e)=>{
    setShowItem(e.target.value);

  }
  let handleDesign=()=>{
    setChange(!change)

  }
  

  return (
    <section className='py-[128px]'>
    <Container>
     <p> <Link to={data == "Home"?"/":`/${data}`}></Link> {data} > shop </p>

      <Flex className='pt-[130px]'>
        <div className='w-3/12 pr-10'>
        <h5 className='font-dm font-bold text-lg pb-9'>Shop By Category</h5>
        
        <Category text="Desktop" type="true" />
               {
                category &&  <div>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                 </div>
               }
            <Category text="Moble" type="false" />
               {
                category &&  <div>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                 </div>
               }
            <Category text="Watch" type="true" />
               {
                category &&  <div>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                 </div>
               }
            <Category text="Leptop" type="false" />
               {
                category &&  <div>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                 </div>
               }
            <Category text="Teblet" type="true" />
               {
                category &&  <div>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                  <SubCategory className="pl-10 text-red-500" text="Dell" type="true"/>
                 </div>
               }
        
        
        </div>
        <div className='w-9/12'>
            <Flex className='mb-[60px]'>
                  <div className='flex gap-x-5' onChange={handleDesign}>
                    <Image src={DesignOne}/>
                    <Image src={DesignTwo}/>
                  </div>
                <Flex className='items-center gap-x-[14px] ml-[642px]'>
                  <p className='text-primary text-sm font-dm font-normal'>Sort By:</p>
                <select className='py-1 px-6 border border-[#767676] text-primary text-sm font-dm font-normal '>
                  <option>Featured</option>
                  <option>l</option>
                  <option>m</option>
                  <option>s</option>
                </select>
                </Flex>
                <Flex className='items-center gap-x-[14px] ml-[105px]'>
                  <p className='text-primary text-sm font-dm font-normal'>Show:</p>
                <select onChange={handleChange} className='py-1 px-6 border border-[#767676] text-primary text-sm font-dm font-normal '>
                  <option>6</option>
                  <option>12</option>
                  <option>24</option>
                  <option>36</option>
                </select>
                </Flex>
            </Flex>
            <Pagination itemsPerPage={setShowItem == 6?6:showItem == 12?12:showItem == 16?16:showItem == 36?36:12} />,

          {
            Change ? <Pagination itemsPerPage={setShowItem == 6?6:showItem == 12?12:showItem == 16?16:showItem == 36?36:12} />
        : <p>Another design</p>
          }
        </div>
      </Flex>

    </Container>
    </section>
  )
}

export default Shop
