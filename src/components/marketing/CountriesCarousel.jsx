import React from 'react'

const CountriesCarousel = () => {
  const countries = [
    { name: 'United Kingdom', code: 'gb' },
    { name: 'France', code: 'fr' },
    { name: 'Germany', code: 'de' },
    { name: 'Spain', code: 'es' },
    { name: 'Denmark', code: 'dk' },
    { name: 'Netherlands', code: 'nl' },
    { name: 'Italy', code: 'it' },
    { name: 'Portugal', code: 'pt' },
    { name: 'Belgium', code: 'be' },
    { name: 'Sweden', code: 'se' },
    { name: 'Norway', code: 'no' },
    { name: 'Finland', code: 'fi' },
    { name: 'Austria', code: 'at' },
  ]

  // Duplicate the array for seamless infinite scroll
  const duplicatedCountries = [...countries, ...countries]

  return (
    <section className="overflow-hidden bg-primary py-12">
      <div className="mx-auto max-w-5xl px-6 pb-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Available Worldwide
        </h2>
        <p className="mt-2 text-slate-400">
          Discover events in major cities across these countries and more
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll space-x-8">
          {duplicatedCountries.map((country, index) => (
            <div
              key={`${country.name}-${index}`}
              className="flex min-w-50 shrink-0 flex-col items-center gap-3 rounded-xl border border-primary bg-card px-8 py-6 shadow-sm"
            >
              <img 
                src={`https://flagcdn.com/w80/${country.code}.png`}
                srcSet={`https://flagcdn.com/w160/${country.code}.png 2x`}
                alt={`${country.name} flag`}
                className="h-12 w-auto object-contain"
              />
              <span className="text-lg font-medium text-white">{country.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }

      `}</style>
    </section>
  )
}

export default CountriesCarousel
