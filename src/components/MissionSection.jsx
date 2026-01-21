import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MissionSection = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)

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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="bg-primary py-16 sm:py-20 px-4">
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
  )
}

export default MissionSection
