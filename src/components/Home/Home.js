import React from 'react'
import Banner from './Banner/Banner'
import JoinNetwork from './JoinNetwork/JoinNetwork'
import ContactSection from './Contact/Contact'
import Services from './services/Sevices'
import AboutUs from '../about'

function HomeMain() {
  return (
    <div>
      <Banner/>
      <JoinNetwork/>
      <Services/>
      <ContactSection/>
      <AboutUs/>
    </div>
  )
}

export default HomeMain
