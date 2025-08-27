import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Orebie from '../../src/assets/orebie.png'
import Lists from '../components/Lists'
import breadcrumb, { activeButton } from '../slices/breadcrumb'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Navber = () => {
    let dispatch = useDispatch()
    let handleClick =(name) =>{
        dispatch(activeButton(name))
    }
  return (
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-4/12'>
                    <Image src={Orebie} />
                </div>
                <div className='w-8/12'>
                    <ul className='flex gap-x-10'>
                        <Link onClick={()=>{handleClick("Home")}} to = "/"><Lists text='Home'/></Link>
                        <Link onClick={()=>{handleClick("Shop")}} to = "/shop"><Lists text='Shop'/></Link>
                        <Link onClick={()=>{handleClick("About")}} to = "/about"><Lists text='About'/></Link>
                        <Link onClick={()=>{handleClick("Contact")}} to = "/contact"><Lists text='Contacts'/></Link>
                        <Link onClick={()=>{handleClick("Journal")}} to = "/journal"><Lists text='Journal'/></Link>
                        
                    </ul>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navber