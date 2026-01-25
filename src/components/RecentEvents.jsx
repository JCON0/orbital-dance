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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      {/* Main Content - Events List */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-primary">All Events</h2>
          <Link to="/dashboard/my-events" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
            View All →
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="bg-card rounded-xl p-6 border border-primary text-center py-8 text-secondary">
            No events created yet. Create your first event to get started!
          </div>
        ) : (
          <EventsList events={events} isOwnDashboard={true} />
        )}
      </div>

      {/* Sidebar - Upcoming Event Card */}
      <div className="lg:col-span-1">
        {upcomingEvent && (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4">Upcoming Event</h2>
            <div className="bg-gradient-to-r from-cyan-800 to-blue-900 rounded-xl p-6 border border-slate-700 shadow-lg sticky top-24">
              <div className="flex flex-col">
                {/* Event Image */}
                <div className="w-full h-48 overflow-hidden rounded-lg bg-black/20 backdrop-blur mb-4">
                  <img
                    src={upcomingEvent.image}
                    alt={upcomingEvent.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {upcomingEvent.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {upcomingEvent.description}
                  </p>
                  <div className="space-y-2 text-white/95 mb-6">
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span className="font-medium text-sm">{upcomingEvent.venue || upcomingEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span className="font-medium text-sm">{formatDate(upcomingEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🕐</span>
                      <span className="font-medium text-sm">{upcomingEvent.time}</span>
                    </div>
                  </div>
                  <Link
                    to={`/events/${createSlug(upcomingEvent.title)}/preview`}
                    className="block w-full text-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600 shadow-md"
                  >
                    View Event
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
        
        {!upcomingEvent && (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4">Upcoming Event</h2>
            <div className="bg-card rounded-xl p-6 border border-primary text-center py-12">
              <p className="text-secondary">No upcoming events</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default RecentEvents
