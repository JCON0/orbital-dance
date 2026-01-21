import React, { useRef } from 'react'
import gsap from 'gsap'

const ValuesSection = () => {
  const cardsRef = useRef([])

  const values = [
    {
      icon: '🎯',
      title: 'Discovery',
      description: 'We believe discovering authentic events should be effortless, not an endless scroll through noise.',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500',
      shadowColor: 'rgba(6, 182, 212, 0.3)'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'At our core, we\'re building a global community where music lovers find their tribe.',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500',
      shadowColor: 'rgba(59, 130, 246, 0.3)'
    },
    {
      icon: '✨',
      title: 'Authenticity',
      description: 'Every event on our platform is real, curated, and ready to create unforgettable moments.',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500',
      shadowColor: 'rgba(168, 85, 247, 0.3)'
    },
    {
      icon: '🌍',
      title: 'Accessibility',
      description: 'Great events should be accessible to everyone, no matter where you are or what genre you love.',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500',
      shadowColor: 'rgba(16, 185, 129, 0.3)'
    }
  ]

  const handleMouseEnter = (index) => {
    const card = cardsRef.current[index]
    gsap.to(card, {
      y: -15,
      scale: 1.05,
      boxShadow: `0 20px 40px ${values[index].shadowColor}`,
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index]
    gsap.to(card, {
      y: 0,
      scale: 1,
      boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  return (
    <div className="bg-secondary py-16 sm:py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Values</h2>
          <p className="text-lg text-secondary">What drives us every day</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`rounded-xl ${value.bgColor} bg-primary p-6 text-center cursor-pointer`}
            >
              <div className="mb-4 text-4xl">{value.icon}</div>
              <h3 className="mb-2 text-lg font-bold text-primary">{value.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValuesSection
