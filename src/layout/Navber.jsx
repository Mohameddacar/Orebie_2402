import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Orebie from '../../src/assets/orebie.png'
import Lists from '../components/Lists'

const Navber = () => {
  return (
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-4/12'>
                    <Image src={Orebie} />
                </div>
                <div className='w-8/12'>
                    <ul className='flex gap-x-10'>
                        <Lists text='Home'/>
                        <Lists text='Shop'/>
                        <Lists text='About'/>
                        <Lists text='Contacts'/>
                        <Lists text='Journal'/>
                    </ul>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navber