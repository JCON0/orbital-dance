import React from 'react'
import AboutHero from '../../components/AboutHero'
import MissionAndApproach from '../../components/MissionAndApproach'
import ValuesSection from '../../components/ValuesSection'
import HowItWorks from '../../components/HowItWorks'
import AboutCTA from '../../components/AboutCTA'
import Footer from '../../components/Footer'

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutHero />
      <MissionAndApproach />
      <ValuesSection />
      <HowItWorks />
      <AboutCTA />
      <Footer />
    </div>
  )
}

export default AboutPage
