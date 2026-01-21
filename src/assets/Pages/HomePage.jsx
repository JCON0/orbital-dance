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
      <main className="font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        <Hero />
        <FeaturesSection />
        <HowItWorks />
        <EventCategories />
        <Testimonials />
        <CTASection />
        <CountriesCarousel />
      </main>
      <Footer />
    </>
  )
}

export default HomePage