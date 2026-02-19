import React, { useEffect, useRef } from 'react'
import { HiOutlineArrowDown } from 'react-icons/hi2'
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
    <div ref={containerRef} className="relative min-h-screen flex flex-col text-white overflow-hidden">
      <div className="fixed inset-0 top-0 -z-10 h-screen">
        <img
          src="/src/assets/Images/tyler-clemmensen-GjIOvAAdqew-unsplash.jpg"
          alt="Crowd dancing at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/60 to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full text-center bg-black/40 border border-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl rounded-2xl px-6 py-10 sm:px-10 sm:py-12">
          <div ref={badgeRef} className="mb-6">
            <span className="inline-block rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-100">
              About Orbital Dance
            </span>
          </div>
          
          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <div>For every struggle,</div>
            <div>
              <span
                ref={solutionTextRef}
                onMouseEnter={handleSolutionHover}
                onMouseLeave={handleSolutionHoverEnd}
                className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent cursor-pointer inline-block"
              >
                a solution is born
              </span>
            </div>
          </h1>
          
          <p ref={paragraphRef} className="text-xl text-slate-200 mb-8 leading-relaxed">
            We created Orbital Dance to solve a simple problem: finding authentic electronic music events shouldn't be complicated. We're here to connect artists, promoters, and music lovers in one unified platform.
          </p>

          {/* Scroll indicator */}
          <div ref={scrollRef} className="flex items-center justify-center gap-2 text-secondary">
            <HiOutlineArrowDown className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default AboutHero
