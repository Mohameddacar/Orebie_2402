import React from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/counterSlice'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'
import Flex from '../components/Flex'
import data from '../data'

console.log(data)

const Shop = () => {
  let data = useSelector((state) => state.breadcrumb.prevalue)

  // const handleIncrement = () => {
  //   dispatch(increment(1)) // payload = 1
  // }

  return (
    <section className='py-[128px]'>
    <Container>
     <p> <Link to={data == "Home"?"/":`/${data}`}></Link> {data} > shop </p>
      <h1>Counter: {data}</h1>

      <Flex className='pt-[130px]'>
        <div className='w-3/12'>Category</div>
        <div className='w-9/12'>
            <Pagination itemsPerPage={12} />,
        </div>
      </Flex>

    </Container>
    </section>
  )
}

export default Shop
