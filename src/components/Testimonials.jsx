import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      location: 'Barcelona, Spain',
      avatar: '👩',
      rating: 5,
      quote: 'I discovered this underground jazz night in Barcelona through Orbital Dance that I never would have found otherwise. Felt like a true local for the first time traveling!',
    },
    {
      name: 'Marco Rossi',
      location: 'Berlin, Germany',
      avatar: '👨',
      rating: 5,
      quote: 'The app is a game-changer. Instead of wandering around looking for things to do, I had a personalized list of events tailored to my interests. Best travel hack ever.',
    },
    {
      name: 'Amira Patel',
      location: 'Copenhagen, Denmark',
      avatar: '👩',
      rating: 5,
      quote: 'Met some amazing people at a food pop-up I found on Orbital Dance. Made memories and connections I would never have made on typical tourist tours.',
    },
    {
      name: 'Lucas Santos',
      location: 'Lisbon, Portugal',
      avatar: '👨',
      rating: 5,
      quote: 'As a frequent traveler, this is the only app I need for discovering authentic experiences. Beats any guidebook or travel blog out there.',
    },
    {
      name: 'Emma Wilson',
      location: 'Amsterdam, Netherlands',
      avatar: '👩',
      rating: 5,
      quote: 'Real events, real people, real experiences. Orbital Dance connects you with the heart of a city, not just the touristy surface.',
    },
    {
      name: 'Kai Nakamura',
      location: 'Vienna, Austria',
      avatar: '👨',
      rating: 5,
      quote: 'The notifications are so helpful. I discovered a last-minute gallery opening that became the highlight of my Vienna trip. Thank you, Orbital Dance!',
    },
  ]

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Loved by Travelers
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            See what travelers around the world are saying about Orbital Dance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-primary bg-primary p-8 shadow-sm transition hover:shadow-md"
            >
              {/* Rating Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lg">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-slate-700 dark:text-slate-300">
                "{testimonial.quote}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 border-t border-slate-200 pt-4 dark:border-slate-700">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid gap-6 rounded-2xl border border-primary bg-primary p-8 md:grid-cols-3">
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">50k+</p>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">4.9★</p>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">200k+</p>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Events Attended</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
