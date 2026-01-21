import React from 'react'
import AboutHero from '../../components/AboutHero'
import ProblemSolution from '../../components/ProblemSolution'
import MissionSection from '../../components/MissionSection'
import ValuesSection from '../../components/ValuesSection'
import HowItWorks from '../../components/HowItWorks'
import AboutCTA from '../../components/AboutCTA'
import Footer from '../../components/Footer'

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <ProblemSolution />
      <MissionSection />
      <ValuesSection />
      <HowItWorks />
      <AboutCTA />
      <Footer />
    </>
  )
}

export default AboutPage
