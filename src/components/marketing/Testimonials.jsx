import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      location: 'Barcelona, Spain',
      avatar: '👩',
      rating: 5,
      teaser: 'Thought it was another “influencer brunch” app—braced for avocado toast shots...',
      quote: 'Then it dropped a warehouse techno night with a Funktion-One rig. I ended up dancing till 6am and made friends I still go out with.',
    },
    {
      name: 'Marco Rossi',
      location: 'Berlin, Germany',
      avatar: '👨',
      rating: 5,
      teaser: 'Expected generic tourist traps. Was ready to uninstall in 5 minutes...',
      quote: 'Instead it surfaced a secret lineup at a Kreuzberg spot and a sunrise set on the Spree. I haven’t missed a weekend since.',
    },
    {
      name: 'Emma Wilson',
      location: 'Amsterdam, Netherlands',
      avatar: '👩',
      rating: 5,
      teaser: 'Was convinced it would just push overpriced festivals and VIP up-sells...',
      quote: 'It actually pinged me about a 200-cap house night with my favorite local DJ. Zero spam, all signal. Now it’s my go-to.',
    },
  ]

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Loved by Music Lovers
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            See what the electronic music community is saying about Orbital Dance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-primary bg-primary p-8 shadow-sm transition hover:shadow-md"
            >
              {/* Rating Stars with reveal effect */}
              <div className="mb-4">
                <div className="relative inline-flex items-center min-w-22.5">
                  {/* Default single star to imply 1-star */}
                  <div className="flex items-center text-slate-400">
                    <span className="text-lg">★</span>
                  </div>

                  {/* Hover reveal: full 5 stars slide in via width expansion */}
                  <div className="absolute left-0 top-0 h-full w-0 overflow-hidden transition-all duration-500 ease-out group-hover:w-full">
                    <div className="flex items-center text-cyan-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote with playful bait-and-switch */}
              <div className="relative mb-6 min-h-24">
                <p className="text-slate-300 transition-opacity duration-400 group-hover:opacity-0">
                  "{testimonial.teaser}"
                </p>
                <p className="absolute inset-0 opacity-0 text-slate-300 transition-opacity duration-400 group-hover:opacity-100">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 border-t border-slate-700 pt-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-400">
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
            <p className="text-4xl font-bold text-cyan-400">50k+</p>
            <p className="mt-2 text-slate-400">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-400">4.9★</p>
            <p className="mt-2 text-slate-400">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-400">200k+</p>
            <p className="mt-2 text-slate-400">Events Attended</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
