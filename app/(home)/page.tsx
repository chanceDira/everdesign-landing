"use client"
import AboutUs from '@/components/home/AboutUs'
import Achievements from '@/components/home/Achievements'
import ContactUsPage from '@/components/home/contactUs'
import HeroPage from '@/components/home/HeroPage'
import Projects from '@/components/home/Projects'
import Services from '@/components/home/Services'
import React, { useEffect } from 'react'
import "aos/dist/aos.css";


const page = () => {
  return (
    <main className=''>
        <HeroPage/>
        <AboutUs/>
        <Services/>
        <Achievements/>
        <Projects/>
        <ContactUsPage/>
    </main>
  )
}

export default page
