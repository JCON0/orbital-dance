import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi2'

const EventHero = ({ event }) => {
  return (
    <div className="relative h-120 overflow-hidden -mt-16 pt-16">
      <img 
        src={event.image} 
        alt={event.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
      
      {/* Back Button */}
      <Link 
        to="/events"
        className="absolute left-6 top-20 flex items-center gap-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition"
      >
        <HiOutlineArrowLeft className="h-5 w-5" />
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
