import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden -mt-16 pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/src/assets/Images/baptiste-merel-J_jdWPyaNDo-unsplash.jpg"
          alt="Electronic music event"
          className="w-full h-full object-cover"
          style={{
            filter: 'hue-rotate(-120deg) saturate(1.1)'
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Ombre fade effect around edges */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-32 lg:flex-row lg:items-center lg:gap-16 min-h-screen lg:min-h-96">
        <div className="space-y-6 w-full lg:w-4/5 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200" style={{textShadow: '0 2px 10px rgba(0,0,0,0.8)'}}>Event Discovery</p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Discover <span 
              className="inline-block bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent"
            >
              Dance
            </span> events anywhere in the world.
          </h1>
          <p className="text-lg leading-relaxed text-slate-100" style={{textShadow: '0 2px 10px rgba(0,0,0,0.8)'}}>
            Find authentic social experiences that only locals know about. From underground concerts to community gatherings, uncover the events that make each destination unique.
          </p>
          <div className="pt-4">
            <Link
              to="/events"
              className="inline-block rounded-full bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 transition hover:scale-105 hover:shadow-cyan-300/40"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
