import React from 'react'

const HomeHowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: '📍',
      title: 'Tell Us Where',
      description: 'Enter your destination city or current location to discover events happening nearby.',
    },
    {
      number: '02',
      icon: '🔍',
      title: 'Browse Events',
      description: 'Explore a curated feed of authentic social events, from underground concerts to local meetups.',
    },
    {
      number: '03',
      icon: '❤️',
      title: 'Save Favorites',
      description: 'Save events that catch your eye and get notified about updates, availability, and last-minute changes.',
    },
    {
      number: '04',
      icon: '🎟️',
      title: 'RSVP & Attend',
      description: 'Reserve your spot, connect with other attendees, and experience the city like a true local.',
    },
  ]

  return (
    <section id="how-it-works" className="bg-secondary py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Four simple steps to discover authentic events around the world
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="group rounded-2xl border border-primary bg-primary p-8 hover:shadow-lg transition-shadow duration-300">
                {/* Step Number Badge */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-cyan-900/30 to-cyan-800/30 text-lg font-bold text-cyan-400 transition-all duration-300 group-hover:from-cyan-500 group-hover:to-cyan-500 group-hover:text-cyan-900">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 text-4xl">{step.icon}</div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-secondary">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-1 w-8 bg-linear-to-r from-cyan-300 to-transparent md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-secondary">
            Ready to discover your next favorite event?
          </p>
          <a
            href="/events"
            className="inline-block rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl hover:from-cyan-600 hover:to-blue-600"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeHowItWorks
