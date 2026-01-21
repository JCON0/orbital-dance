import React from 'react'
import HowItWorks from '../../components/HowItWorks'
import Footer from '../../components/Footer'

const HowItWorksPage = () => {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-950 -mt-16 pt-16">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <HowItWorks />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HowItWorksPage
