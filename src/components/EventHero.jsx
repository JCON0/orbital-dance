import React from 'react'
import { Link } from 'react-router-dom'

const EventHero = ({ event }) => {
  return (
    <div className="relative h-[480px] overflow-hidden -mt-16 pt-16">
      <img 
        src={event.image} 
        alt={event.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
      
      {/* Back Button */}
      <Link 
        to="/events"
        className="absolute left-6 top-20 flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 backdrop-blur-sm transition hover:bg-white dark:bg-slate-900/90 dark:text-white dark:hover:bg-slate-900"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Events
      </Link>

      {/* Category Badge */}
      <div className="absolute right-6 top-20 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
        {event.category}
      </div>
    </div>
  )
}

export default EventHero
