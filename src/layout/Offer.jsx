import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import phoneSale from '../assets/phoneSale.jpg'
import watchSale from '../assets/watchSale.png'
import fanitureSale from '../assets/fanitureSale.jpg'
import Image from '../components/Image'
const Offer = () => {
  return (
    <section>
        <Container>
            <Flex>
                <div className='w-1/2'>
                 <Image src={phoneSale} />
                </div>
                <Flex className='w-1/2 flex-col items-center justify-between'>
                    <Image src={watchSale} />
                    <Image src={fanitureSale} />
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default Offer