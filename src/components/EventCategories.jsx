import React from 'react'

const EventCategories = () => {
  const categories = [
    {
      icon: '🏠',
      name: 'Techno & House',
      description: 'Deep underground beats, industrial sounds, and hypnotic grooves from Berlin to Amsterdam.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '⚡',
      name: 'Trance & Progressive',
      description: 'Uplifting melodies, epic buildups, and euphoric journeys through sound.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🔊',
      name: 'Bass Music',
      description: 'Drum & Bass, Dubstep, and heavy basslines that shake the floor.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: '🌀',
      name: 'Psytrance & Goa',
      description: 'Mind-bending psychedelic experiences with progressive and full-power sets.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: '⚠️',
      name: 'Hardstyle & Hardcore',
      description: 'Raw kicks, euphoric anthems, and maximum energy for the hardcore family.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '✨',
      name: 'Future Bass & Melodic',
      description: 'Emotional journeys with beautiful melodies meeting heavy drops.',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="categories" className="bg-primary py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Event Categories
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            From techno to trance, discover every genre of electronic music
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-primary bg-card p-8 transition"
            >
              {/* Background gradient accent */}
              <div
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-20 bg-linear-to-br ${category.color}`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 text-5xl">{category.icon}</div>

                {/* Category Name */}
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center text-sm font-medium text-slate-700 transition group-hover:translate-x-1 dark:text-slate-300">
                  Explore →
                </div>
              </div>

              {/* Border accent on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition group-hover:border-slate-300 dark:group-hover:border-slate-600" />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            See all events happening in your city
          </p>
          <a
            href="#explore"
            className="inline-block rounded-full border-2 border-slate-300 px-8 py-3 font-semibold text-slate-900 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-600 dark:text-white dark:hover:border-cyan-400 dark:hover:bg-slate-800"
          >
            Browse All Events
          </a>
        </div>
      </div>
    </section>
  )
}

export default EventCategories
