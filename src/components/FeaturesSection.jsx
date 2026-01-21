import React from 'react'

const FeaturesSection = () => {
  const features = [
    {
      icon: '🌍',
      title: 'Discover Hidden Events',
      description: 'Find authentic gatherings and experiences that only locals know about. Skip the tourist traps and uncover real cultural moments.',
    },
    {
      icon: '⚡',
      title: 'Real-Time Updates',
      description: 'Stay in the loop with instant notifications about new events in your destination. Never miss out on spontaneous gatherings.',
    },
    {
      icon: '🎯',
      title: 'Personalized Recommendations',
      description: 'Get event suggestions tailored to your interests, location, and travel dates. Your perfect night out is just a tap away.',
    },
    {
      icon: '🤝',
      title: 'Connect with Locals',
      description: 'Build connections with event organizers and fellow travelers. Experience cities through the eyes of people who truly know them.',
    },
  ]

  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Why Choose Orbital Dance?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Everything you need to experience cities like a true local
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 transition hover:border-cyan-300 hover:shadow-lg dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:hover:border-cyan-400 dark:hover:shadow-lg dark:hover:shadow-cyan-900/20"
            >
              {/* Icon */}
              <div className="mb-4 inline-block rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 p-3 transition group-hover:from-cyan-200 group-hover:to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 dark:group-hover:from-cyan-800/40 dark:group-hover:to-cyan-700/40">
                <span className="text-3xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>

              {/* Accent line on hover */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-all duration-300 group-hover:w-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
