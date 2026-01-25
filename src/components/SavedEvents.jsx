import React, { useMemo, useState } from 'react'
import { useSavedEvents } from '../contexts/SavedEventsContext'
import EventCard from './EventCard'
import EventsList from './EventsList'
import eventsData from '../data/events.json'

const SavedEvents = ({ onClose }) => {
  const { savedEventIds } = useSavedEvents()
  const [viewMode, setViewMode] = useState('grid')

  const savedEvents = useMemo(() => {
    return eventsData.events.filter(event => savedEventIds.includes(event.id))
  }, [savedEventIds])

  return (
    <div className="bg-card rounded-xl p-6 border border-primary mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Your Saved Events</h2>
        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-lg border border-primary overflow-hidden">
            <button
              type="button"
              aria-pressed={viewMode === 'grid'}
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 text-sm font-semibold transition flex items-center gap-1.5 ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-primary hover:bg-card-hover'}`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              Grid
            </button>
            <button
              type="button"
              aria-pressed={viewMode === 'list'}
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 text-sm font-semibold transition flex items-center gap-1.5 ${viewMode === 'list' ? 'bg-primary text-white' : 'text-primary hover:bg-card-hover'}`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" strokeLinecap="round" />
                <line x1="8" y1="12" x2="21" y2="12" strokeLinecap="round" />
                <line x1="8" y1="18" x2="21" y2="18" strokeLinecap="round" />
                <line x1="3" y1="6" x2="3.01" y2="6" strokeLinecap="round" strokeWidth="3" />
                <line x1="3" y1="12" x2="3.01" y2="12" strokeLinecap="round" strokeWidth="3" />
                <line x1="3" y1="18" x2="3.01" y2="18" strokeLinecap="round" strokeWidth="3" />
              </svg>
              List
            </button>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-card-hover transition"
            >
              Back to Dashboard
            </button>
          )}
        </div>
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
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <EventsList events={savedEvents} />
          )}
        </div>
      )}
    </div>
  )
}

export default SavedEvents
