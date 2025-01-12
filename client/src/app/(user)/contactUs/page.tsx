import ContactInfo from '@/components/ContactInfo'
import ContactMap from '@/components/ContactMap'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        
      <ContactInfo/>
      <ContactMap/>
      
      <Footer/>
      
    </div>
  )
}
