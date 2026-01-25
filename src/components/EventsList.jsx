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
              className="rounded-xl p-6 border border-primary bg-card shadow-lg"
            >
              <div className="flex gap-6 items-center">
                {/* Event Image */}
                <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-700">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {event.title}
                      </h3>
                      <div className="space-y-2 text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <span>📍</span>
                          <span className="font-medium">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📅</span>
                          <span className="font-medium">{formatDate(event.date)} at {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-cyan-500 px-3 py-1 text-sm font-semibold text-white">
                            {event.category}
                          </span>
                          <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                            {formatPrice(event.price, event.currency)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      to={isOwnDashboard ? `/events/${slug}/preview` : `/events/${slug}`}
                      className="rounded-lg bg-cyan-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 shadow-md"
                    >
                      View Event
                    </Link>
                  </div>
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