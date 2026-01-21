import React from 'react'

const ValuesSection = () => {
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
  )
}

export default ValuesSection
