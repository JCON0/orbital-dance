import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import EventsList from './EventsList'
import eventsData from '../data/events.json'

const RecentEvents = () => {
  const { user } = useAuth()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user?.id) {
      // Filter events by promoterId matching current user
      const filteredEvents = eventsData.events.filter(
        (event) => event.promoterId === user.id
      )
      setEvents(filteredEvents)
    }
    setLoading(false)
  }, [user])

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
