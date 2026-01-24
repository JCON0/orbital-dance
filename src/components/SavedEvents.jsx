import React, { useMemo } from 'react'
import { useSavedEvents } from '../contexts/SavedEventsContext'
import EventCard from './EventCard'
import eventsData from '../data/events.json'

const SavedEvents = ({ onClose }) => {
  const { savedEventIds } = useSavedEvents()

  const savedEvents = useMemo(() => {
    return eventsData.events.filter(event => savedEventIds.includes(event.id))
  }, [savedEventIds])

  return (
    <div className="bg-card rounded-xl p-6 border border-primary mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Your Saved Events</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-card-hover transition"
          >
            Back to Dashboard
          </button>
        )}
      </div>

      {savedEvents.length === 0 ? (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-16 w-16 text-slate-400 dark:text-slate-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-primary mb-2">No Saved Events Yet</h3>
          <p className="text-secondary mb-6">
            Start exploring events and save your favorites to see them here!
          </p>
          <a
            href="/events"
            className="inline-block px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition"
          >
            Browse Events
          </a>
        </div>
      ) : (
        <div>
          <p className="text-secondary mb-6">
            You have saved {savedEvents.length} {savedEvents.length === 1 ? 'event' : 'events'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SavedEvents
