import React, { useState } from 'react'

const CTASection = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="get-started" className="relative isolate overflow-hidden bg-primary py-24 sm:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 blur-3xl dark:opacity-5" aria-hidden>
        <div className="absolute -left-20 top-1/2 h-64 w-64 rounded-full bg-linear-to-br from-cyan-400 to-cyan-600" />
        <div className="absolute -right-20 -bottom-10 h-64 w-64 rounded-full bg-linear-to-br from-fuchsia-400 to-cyan-400" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Start Discovering Events Today
          </h2>

          {/* Subheading */}
          <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-slate-400">
            Join thousands of travelers finding authentic experiences in every corner of the world. Your next adventure is just a tap away.
          </p>

          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-lg border border-primary bg-card px-5 py-4 text-primary placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none sm:rounded-r-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-linear-to-r from-cyan-400 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl hover:from-cyan-500 hover:to-cyan-700 sm:rounded-l-none"
            >
              {submitted ? '✓ Success!' : 'Get Started'}
            </button>
          </form>

          {/* Success message */}
          {submitted && (
            <p className="mt-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Great! Check your email for next steps.
            </p>
          )}

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row">
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">150+</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Countries</p>
            </div>
            <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">24/7</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Support</p>
            </div>
            <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">Free</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">To Use</p>
            </div>
          </div>

          {/* Secondary CTA */}
          <p className="mt-10 text-sm text-slate-600 dark:text-slate-400">
            Or{' '}
            <a href="#explore" className="font-semibold text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">
              browse events now
            </a>
            {' '}without signing up.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTASection
