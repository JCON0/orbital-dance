import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import eventsData from '../../data/events.json'
import EventsList from '../../components/EventsList'
import EventCard from '../../components/EventCard'

const PromoterEventsPage = () => {
  const { user } = useAuth()
  const [viewMode, setViewMode] = useState('list')
  const events = useMemo(() => {
    if (!user?.id) return []
    return eventsData.events.filter(event => event.promoterId === user.id)
  }, [user])

  const hasEvents = events.length > 0

  return (
    <div className="-mt-16 min-h-screen bg-primary pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Your Events</h1>
          </div>
          <Link
            to="/create-event"
            className="px-5 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md transition hover:from-cyan-600 hover:to-blue-600"
          >
            Create New Event
          </Link>
        </div>

        {!hasEvents ? (
          <div className="bg-card rounded-xl p-8 border border-primary text-center shadow-lg">
            <h2 className="text-xl font-semibold text-primary mb-2">No events yet</h2>
            <p className="text-secondary mb-6">
              Create your first event to start promoting and tracking performance.
            </p>
            <Link
              to="/create-event"
              className="inline-block px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md transition hover:from-cyan-600 hover:to-blue-600"
            >
              Create Event
            </Link>
          </div>
        ) : (
          <section className="bg-card rounded-xl border border-primary p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-primary">Your Events</h2>
                <span className="text-secondary text-sm">{events.length} total</span>
              </div>
              <div className="inline-flex rounded-lg border border-primary overflow-hidden">
                <button
                  type="button"
                  aria-pressed={viewMode === 'grid'}
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 text-sm font-semibold transition ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-primary hover:bg-card-hover'}`}
                >
                  Grid
                </button>
              <button
                type="button"
                aria-pressed={viewMode === 'list'}
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 text-sm font-semibold transition ${viewMode === 'list' ? 'bg-primary text-white' : 'text-primary hover:bg-card-hover'}`}
              >
                List
              </button>
              </div>
            </div>

            {viewMode === 'list' ? (
              <EventsList events={events} isOwnDashboard={true} />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  )
}

export default PromoterEventsPage
