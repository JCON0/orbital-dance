import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const AboutHero = () => {
  const containerRef = useRef(null)
  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const scrollRef = useRef(null)
  const solutionTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create animation timeline
      const timeline = gsap.timeline()

      // Animate badge - fade in and slide down
      timeline.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power2.out'
      }, 0)

      // Animate heading - fade in and slide down with stagger
      timeline.from(
        headingRef.current?.querySelectorAll('*') || [],
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        },
        0.2
      )

      // Animate paragraph - fade in
      timeline.from(paragraphRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out'
      }, 0.4)

      // Animate scroll indicator - fade in with bounce
      timeline.from(scrollRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, 0.6)

      // Add continuous bounce animation to scroll indicator
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleSolutionHover = () => {
    gsap.to(solutionTextRef.current, {
      scale: 1.1,
      duration: 0.4,
      ease: 'power2.out',
      textShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
    })
  }

  const handleSolutionHoverEnd = () => {
    gsap.to(solutionTextRef.current, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out',
      textShadow: '0 0 0px rgba(6, 182, 212, 0)'
    })
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-primary flex flex-col -mt-16 pt-16">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          <div ref={badgeRef} className="mb-6">
            <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              About Orbital Dance
            </span>
          </div>
          
          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            <div>For every struggle,</div>
            <div>
              <span
                ref={solutionTextRef}
                onMouseEnter={handleSolutionHover}
                onMouseLeave={handleSolutionHoverEnd}
                className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent cursor-pointer inline-block"
              >
                a solution is born
              </span>
            </div>
          </h1>
          
          <p ref={paragraphRef} className="text-xl text-secondary mb-8 leading-relaxed">
            We created Orbital Dance to solve a simple problem: finding authentic electronic music events shouldn't be complicated. We're here to connect artists, promoters, and music lovers in one unified platform.
          </p>

          {/* Scroll indicator */}
          <div ref={scrollRef} className="flex items-center justify-center gap-2 text-secondary">
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
