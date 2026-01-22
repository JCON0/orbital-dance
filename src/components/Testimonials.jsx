import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      location: 'Barcelona, Spain',
      avatar: '👩',
      rating: 5,
      quote: 'I discovered this underground techno night in Barcelona through Orbital Dance that I never would have found otherwise. The vibe was incredible and I made friends who are still in my life!',
    },
    {
      name: 'Marco Rossi',
      location: 'Berlin, Germany',
      avatar: '👨',
      rating: 5,
      quote: 'As a music lover, this platform is a game-changer. I found events from promoters I never knew existed. Now I\'m at a different show every weekend.',
    },
    {
      name: 'Amira Patel',
      location: 'Copenhagen, Denmark',
      avatar: '👩',
      rating: 5,
      quote: 'Met some amazing producers and DJs at events I found on Orbital Dance. This platform really connects the electronic music community.',
    },
    {
      name: 'Lucas Santos',
      location: 'Lisbon, Portugal',
      avatar: '👨',
      rating: 5,
      quote: 'Finally, a place where real events are curated by people who actually care about the scene. No spam, just authentic electronic music experiences.',
    },
    {
      name: 'Emma Wilson',
      location: 'Amsterdam, Netherlands',
      avatar: '👩',
      rating: 5,
      quote: 'Orbital Dance is my go-to for finding house and techno events. The notifications ensure I never miss a set from my favorite artists.',
    },
    {
      name: 'Kai Nakamura',
      location: 'Vienna, Austria',
      avatar: '👨',
      rating: 5,
      quote: 'Great discovery platform for electronic music events. I\'ve found some amazing underground venues and promoters that have become part of my regular scene.',
    },
  ]

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Loved by Music Lovers
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            See what the electronic music community is saying about Orbital Dance
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
