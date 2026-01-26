import React from 'react'
import AboutHero from '../../../components/marketing/AboutHero'
import MissionAndApproach from '../../../components/marketing/MissionAndApproach'
import ValuesSection from '../../../components/marketing/ValuesSection'
import HowItWorks from '../../../components/marketing/HowItWorks'
import AboutCTA from '../../../components/marketing/AboutCTA'
import Footer from '../../../components/navigation/Footer'

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
