import React from 'react'
import { Link } from 'react-router-dom'
import { createSlug } from '../../utils/slugUtils'
import { useAuth } from '../../contexts/AuthContext'
import { useSavedEvents } from '../../contexts/SavedEventsContext'
import AuthPromptModal from '../modals/AuthPromptModal'

const EventCard = ({ event, isOwnDashboard = false }) => {
  const { isAuthenticated } = useAuth()
  const { isSaved, toggleSavedEvent } = useSavedEvents()
  const [showAuthPrompt, setShowAuthPrompt] = React.useState(false)

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
  const eventUrl = isOwnDashboard ? `/events/${slug}/preview` : `/events/${slug}`

  const handleSaveEvent = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isAuthenticated) {
      setShowAuthPrompt(true)
      return
    }
    toggleSavedEvent(event.id)
  }

  const eventIsSaved = isSaved(event.id)

  const CardWrapper = isOwnDashboard ? Link : 'div'
  const wrapperProps = isOwnDashboard ? { to: eventUrl } : {}

  return (
    <>
      <CardWrapper {...wrapperProps} className="group overflow-hidden rounded-2xl border border-primary bg-card transition hover:shadow-lg block">
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
        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white truncate">
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
        {!isOwnDashboard && (
          <div className="mt-4 flex gap-2">
            <Link
              to={eventUrl}
              className="flex-1 block rounded-lg bg-linear-to-r from-cyan-400 to-cyan-600 py-2.5 text-center text-sm font-semibold text-white transition hover:from-cyan-500 hover:to-cyan-700"
            >
              View Details
            </Link>
            <button
              onClick={handleSaveEvent}
              className="rounded-lg border border-primary px-4 py-2.5 text-secondary transition hover:bg-secondary"
              aria-label={eventIsSaved ? 'Remove from saved' : 'Save for later'}
            >
              {eventIsSaved ? (
                <svg className="h-5 w-5 fill-red-500" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </CardWrapper>
    <AuthPromptModal isOpen={showAuthPrompt} onClose={() => setShowAuthPrompt(false)} />
    </>
  )
}

export default EventCard
