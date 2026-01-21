import React from 'react'

const AboutHero = () => {
  return (
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
  )
}

export default AboutHero
