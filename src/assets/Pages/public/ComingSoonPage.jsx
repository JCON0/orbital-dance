import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/navigation/Footer'

const ComingSoonPage = () => {
  return (
    <>
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 -mt-16 pt-16">
        <div className="max-w-md text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Coming Soon
          </h2>

          {/* Description */}
          <p className="text-lg text-secondary mb-8 leading-relaxed">
            We're working on something exciting. Stay tuned for updates!
          </p>

          {/* CTA Button */}
          <Link
            to="/"
            className="rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl hover:from-cyan-600 hover:to-blue-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ComingSoonPage
