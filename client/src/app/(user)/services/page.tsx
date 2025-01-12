import Footer from '@/components/Footer'
import Mission from '@/components/Mission'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Vision from '@/components/Vision'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Services/>
        <Mission/>
        <Vision/>
        <Footer/>
      
    </div>
  )
}
