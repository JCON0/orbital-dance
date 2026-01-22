import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card individually as it scrolls into view
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          y: 50,
          duration: 0.9,
          ease: 'power2.out'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-secondary py-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Your journey to discovering authentic events in four simple steps
          </p>
        </div>

        {/* Timeline Journey */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-linear-to-b from-cyan-500 via-blue-500 to-purple-500" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  ref={el => cardsRef.current[index] = el}
                  className={`flex items-center gap-8 ${isEven ? '' : 'flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <div className="rounded-2xl border border-primary bg-secondary p-8 shadow-lg hover:shadow-xl transition">
                      {/* Step Number Badge */}
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-cyan-100 to-cyan-50 text-lg font-bold text-cyan-600 dark:from-cyan-900/30 dark:to-cyan-800/30 dark:text-cyan-400">
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
                  </div>

                  {/* Timeline dot */}
                  <div className="flex justify-center">
                    <div className="h-6 w-6 rounded-full bg-cyan-500 ring-4 ring-secondary" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-lg text-secondary">
            Ready to discover your next favorite event?
          </p>
          <a
            href="#get-started"
            className="inline-block rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl hover:from-cyan-600 hover:to-blue-600"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
