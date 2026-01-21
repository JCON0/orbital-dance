import React from 'react'
import Hero from '../../components/Hero'
import CountriesCarousel from '../../components/CountriesCarousel'
import FeaturesSection from '../../components/FeaturesSection'
import HowItWorks from '../../components/HowItWorks'
import EventCategories from '../../components/EventCategories'
import Testimonials from '../../components/Testimonials'
import CTASection from '../../components/CTASection'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <>
      <main className="font-sans bg-primary text-primary">
        <Hero />
        <FeaturesSection />
        <CountriesCarousel />
        <HowItWorks />
        <EventCategories />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default HomePage