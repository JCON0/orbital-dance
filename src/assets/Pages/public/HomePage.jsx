import React from 'react'
import Hero from '../../../components/marketing/Hero'
import CountriesCarousel from '../../../components/marketing/CountriesCarousel'
import FeaturesSection from '../../../components/marketing/FeaturesSection'
import HomeHowItWorks from '../../../components/marketing/HomeHowItWorks'
import EventCategories from '../../../components/events/EventCategories'
import Testimonials from '../../../components/marketing/Testimonials'
import CTASection from '../../../components/marketing/CTASection'
import Footer from '../../../components/navigation/Footer'

const HomePage = () => {
  return (
    <>
      <main className="font-sans bg-primary text-primary">
        <Hero />
        <FeaturesSection />
        <CountriesCarousel />
        <HomeHowItWorks />
        <EventCategories />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default HomePage