import React from 'react'
import Banner from '../Banner'
import IconSection from '../IconSection'
import OfferSection from '../OfferSection'
import Arrival from '../Arrival'
import BestSeller from '../BestSeller'
import AdsSection from '../AdsSection'
import SpeicalOffer from '../SpeicalOffer'

const Home = () => {
  return (
    <div className='w-full'>
    <Banner/>
    <IconSection/>
    <OfferSection/>
    <Arrival/>
    <BestSeller/>
    <AdsSection/>
    <SpeicalOffer/>
    </div>
  )
}

export default Home