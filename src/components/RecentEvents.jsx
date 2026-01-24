import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import EventsList from './EventsList'
import eventsData from '../data/events.json'
import { createSlug } from '../utils/slugUtils'

const RecentEvents = () => {
  const { user } = useAuth()
  const [events, setEvents] = useState([])
  const [upcomingEvent, setUpcomingEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user?.id) {
      // Filter events by promoterId matching current user
      const filteredEvents = eventsData.events.filter(
        (event) => event.promoterId === user.id
      )
      
      // Find next upcoming event
      const now = new Date()
      const upcoming = filteredEvents
        .filter(event => {
          const eventDate = new Date(event.date)
          return eventDate >= now
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date))
      
      setUpcomingEvent(upcoming.length > 0 ? upcoming[0] : null)
      setEvents(filteredEvents)
    }
    setLoading(false)
  }, [user])
  
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

  if (loading) {
    return (
      <div className="bg-card rounded-xl p-6 border border-primary mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">Your Events</h2>
        <div className="text-center py-8 text-secondary">Loading...</div>
      </div>
    )
  }

  return (
    <div className="mb-8">
      {/* Next Upcoming Event Section */}
      {upcomingEvent && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-primary mb-4">Next Upcoming Event</h2>
          <div className="bg-gradient-to-r from-cyan-800 to-blue-900 rounded-xl p-6 border border-slate-700 shadow-lg">
            <div className="flex gap-6 items-center">
              {/* Event Image */}
              <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-black/20 backdrop-blur">
                <img
                  src={upcomingEvent.image}
                  alt={upcomingEvent.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {upcomingEvent.title}
                    </h3>
                    <div className="space-y-2 text-white/95">
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span className="font-medium">{upcomingEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span className="font-medium">{formatDate(upcomingEvent.date)} at {upcomingEvent.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-white/30 px-3 py-1 text-sm font-semibold">
                          {upcomingEvent.category}
                        </span>
                        <span className="text-lg font-bold">
                          {formatPrice(upcomingEvent.price, upcomingEvent.currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/events/${createSlug(upcomingEvent.title)}`}
                    className="rounded-lg bg-white px-6 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-200 shadow-md"
                  >
                    View Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Your Events List */}
      <h2 className="text-xl font-bold text-primary mb-4">Your Events</h2>

      {events.length === 0 ? (
        <div className="bg-card rounded-xl p-6 border border-primary text-center py-8 text-secondary">
          No events created yet. Create your first event to get started!
        </div>
      ) : (
        <EventsList events={events} isOwnDashboard={true} />
      )}
    </div>
  )
}

export default RecentEvents
