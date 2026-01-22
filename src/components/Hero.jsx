import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-black text-white -mt-16 pt-16">
      <div className="absolute inset-0 opacity-30 blur-3xl" aria-hidden>
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/60" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-fuchsia-500/50" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:gap-16">
        <div className="space-y-6 lg:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Event Discovery</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Discover local events anywhere in the world.
          </h1>
          <p className="text-lg leading-relaxed text-slate-200">
            Find authentic social experiences that only locals know about. From underground concerts to community gatherings, uncover the events that make each destination unique.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/events"
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 transition hover:scale-[1.01] hover:shadow-cyan-300/40"
            >
              Explore Events
            </Link>
            <a
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
              href="#how-it-works"
            >
              How It Works
            </a>
          </div>
        </div>

        <div className="grid flex-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm uppercase tracking-wide text-cyan-200">Cities</p>
            <p className="mt-2 text-3xl font-bold">150+</p>
            <p className="text-sm text-slate-200">Major cities and hidden gems across the globe.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm uppercase tracking-wide text-cyan-200">Events</p>
            <p className="mt-2 text-3xl font-bold">10k+</p>
            <p className="text-sm text-slate-200">Social gatherings, concerts, meetups, and local experiences.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:col-span-2">
            <p className="text-sm uppercase tracking-wide text-cyan-200">For Travelers</p>
            <p className="mt-2 text-lg font-semibold">Beyond the Tourist Trail</p>
            <p className="text-sm text-slate-200">Access events you'd only hear about through word of mouth or by being a local.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
