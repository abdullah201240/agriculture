import AboutUs from '@/components/AboutUs'
import Experiance from '@/components/Experiance'
import Footer from '@/components/Footer'
import Mission from '@/components/Mission'
import Navbar from '@/components/Navbar'
import Vision from '@/components/Vision'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        <AboutUs/>

        <Experiance/>
        <Mission/>
        <Vision/>

        <Footer/>
      
    </div>
  )
}
