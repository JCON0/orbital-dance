import React from 'react'
import HowItWorks from '../../components/HowItWorks'
import Footer from '../../components/Footer'

const AboutPage = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Discovery',
      description: 'We believe discovering authentic events should be effortless, not an endless scroll through noise.'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'At our core, we\'re building a global community where music lovers find their tribe.'
    },
    {
      icon: '✨',
      title: 'Authenticity',
      description: 'Every event on our platform is real, curated, and ready to create unforgettable moments.'
    },
    {
      icon: '🌍',
      title: 'Accessibility',
      description: 'Great events should be accessible to everyone, no matter where you are or what genre you love.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-primary flex flex-col -mt-16 pt-16">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                About Orbital Dance
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              For every struggle,<br />
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">a solution is born</span>
            </h1>
            
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              We created Orbital Dance to solve a simple problem: finding authentic electronic music events shouldn't be complicated. We're here to connect artists, promoters, and music lovers in one unified platform.
            </p>

            {/* Scroll indicator */}
            <div className="flex items-center justify-center gap-2 text-secondary animate-bounce">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* The Problem & Solution Section */}
      <div className="bg-secondary py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* The Struggle */}
            <div className="rounded-2xl border border-primary bg-primary p-8">
              <div className="mb-4 text-4xl">😫</div>
              <h3 className="mb-4 text-2xl font-bold text-primary">The Struggle</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Events scattered across unreliable sources</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>No connection between promoters and attendees</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Hard to discover new venues and artists</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Community fragmented across platforms</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Missing out on local electronic music scene</span>
                </li>
              </ul>
            </div>

            {/* Our Solution */}
            <div className="rounded-2xl border border-primary bg-primary p-8">
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="mb-4 text-2xl font-bold text-primary">Our Solution</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>One platform for all electronic music events</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Direct connection with event organizers</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Discover emerging venues and talented artists</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Build your network with the global EDM community</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Never miss an event in your city again</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-primary py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-lg text-secondary leading-relaxed">
              To empower the global electronic music community by creating the most intuitive, reliable, and vibrant platform for discovering, sharing, and experiencing authentic events. We're committed to breaking down barriers between artists and fans, promoters and attendees, and creating a world where every music lover can find their next unforgettable experience.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-secondary py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-secondary">What drives us every day</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="rounded-xl border border-primary bg-primary p-6 text-center hover:shadow-lg transition">
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-primary">{value.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <HowItWorks />

      {/* CTA Section */}
      <div className="bg-primary py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Join the Orbital Dance Movement</h2>
          <p className="text-lg text-secondary mb-8 leading-relaxed">
            Whether you're a passionate music lover, an emerging artist, or an event organizer, there's a place for you in our community. Let's dance together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events"
              className="rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl hover:from-cyan-600 hover:to-blue-600"
            >
              Explore Events
            </a>
            <a
              href="/sign-up"
              className="rounded-lg border border-primary bg-card px-8 py-3 font-semibold text-primary transition hover:bg-secondary"
            >
              Create an Account
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AboutPage
