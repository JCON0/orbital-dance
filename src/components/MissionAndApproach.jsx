import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MissionAndApproach = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading on scroll
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      })

      // Split paragraph text into lines and animate each one
      const paragraph = paragraphRef.current
      const text = paragraph.textContent
      // Split by sentence (period followed by space) to create logical lines
      const lines = text.split(/(?<=[.!?])\s+/).filter(line => line.trim())
      
      // Create span elements for each line
      paragraph.innerHTML = lines
        .map(line => `<div class="line block">${line}</div>`)
        .join('')

      // Get all line divs
      const lineDivs = paragraph.querySelectorAll('.line')

      // Animate lines one by one on scroll
      gsap.from(lineDivs, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      })

      // Animate cards
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      {/* Mission Section */}
      <div className="bg-secondary py-8 sm:py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl font-bold text-primary mb-6 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              Our Mission
            </h2>
            <p ref={paragraphRef} className="text-lg text-secondary leading-relaxed">
              To empower the global electronic music community by creating the most intuitive, reliable, and vibrant platform for discovering, sharing, and experiencing authentic events. We're committed to breaking down barriers between artists and fans, promoters and attendees, and creating a world where every music lover can find their next unforgettable experience.
            </p>
          </div>
        </div>
      </div>

      {/* Problem & Solution Section */}
      <div className="bg-secondary py-8 sm:py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* The Struggle */}
            <div ref={el => cardsRef.current[0] = el} className="rounded-2xl bg-primary p-8">
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
            <div ref={el => cardsRef.current[1] = el} className="rounded-2xl bg-primary p-8">
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
    </div>
  )
}

export default MissionAndApproach
