import React from 'react'
import Banner from '../Banner'
import IconSection from '../IconSection'
import OfferSection from '../OfferSection'
import Arrival from '../Arrival'

const Home = () => {
  return (
    <div className='w-full'>
    <Banner/>
    <IconSection/>
    <OfferSection/>
    <Arrival/>
    </div>
  )
}

export default Home