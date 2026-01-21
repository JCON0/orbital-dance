import React from 'react'
import { Link } from 'react-router-dom'
import { createSlug } from '../utils/slugUtils'

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const formatPrice = (price, currency) => {
    if (price === 0) return 'Free'
    const symbols = {
      EUR: '€',
      GBP: '£',
      SEK: 'kr',
      DKK: 'kr'
    }
    return `${symbols[currency] || currency}${price}`
  }

  const slug = createSlug(event.title)

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            {event.category}
          </span>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-6">
        {/* Title */}
        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
          {event.title}
        </h3>

        {/* Location and Venue */}
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <span>📍</span>
          <span>{event.location}</span>
        </div>

        {/* Date and Time */}
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <span>📅</span>
          <span>{formatDate(event.date)} at {event.time}</span>
        </div>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
          {event.description}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
          {/* Price */}
          <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
            {formatPrice(event.price, event.currency)}
          </div>

          {/* Attendees */}
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <span>{event.attendees}/{event.maxCapacity}</span>
            <span className="ml-1">attending</span>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          to={`/events/${slug}`}
          className="mt-4 block w-full rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 py-2.5 text-center text-sm font-semibold text-white transition hover:from-cyan-500 hover:to-cyan-700"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default EventCard
