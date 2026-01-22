import React from 'react'
import { Link } from 'react-router-dom'

const AboutCTA = () => {
  return (
    <div className="bg-secondary py-16 sm:py-20 px-4">
      <div className="mx-auto max-w-full px-8">
        <div className="rounded-3xl border border-primary bg-primary p-8 sm:p-12 text-center shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Join the Orbital Dance Movement</h2>
        <p className="text-lg text-secondary mb-8 leading-relaxed">
          Whether you're a passionate music lover, an emerging artist, or an event organizer, there's a place for you in our community. Let's dance together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/events"
            className="rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl hover:from-cyan-600 hover:to-blue-600"
          >
            Explore Events
          </Link>
          <Link
            to="/sign-up"
            className="rounded-lg border border-primary bg-card px-8 py-3 font-semibold text-primary transition hover:bg-secondary"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutCTA
