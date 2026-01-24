import React from 'react'
import { Link } from 'react-router-dom'
import { createSlug } from '../utils/slugUtils'

const EventsList = ({ events, isOwnDashboard = false }) => {
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

  if (events.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-slate-600 dark:text-slate-400">
          No events found matching your criteria
        </p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
          Try adjusting your search or filters
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-4">
        {events.map((event) => {
          const slug = createSlug(event.title)

          return (
            <div
              key={event.id}
              className="flex gap-2 overflow-hidden rounded-lg border border-primary bg-card p-4 transition hover:shadow-md"
            >
              {/* Event Image */}
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-700">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  {/* Title and Category */}
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {event.title}
                    </h3>
                    <span className="flex-shrink-0 rounded-full bg-cyan-500 px-2 py-1 text-xs font-semibold text-white">
                      {event.category}
                    </span>
                  </div>

                  {/* Location, Date, Time */}
                  <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{formatDate(event.date)} at {event.time}</span>
                    </div>
                    <p className="line-clamp-1 text-xs">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section - Price and Actions */}
              <div className="flex flex-col items-end justify-between">
                <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                  {formatPrice(event.price, event.currency)}
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`/events/${slug}`}
                    className="rounded-lg bg-cyan-600 px-3 py-1 text-sm font-semibold text-white transition hover:bg-cyan-700"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default EventsList