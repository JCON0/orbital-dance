import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SideNav from '../../../components/navigation/SideNav'
import { useAuth } from '../../../contexts/AuthContext'
import eventsData from '../../../data/events.json'
import EventsList from '../../../components/events/EventsList'
import EventCard from '../../../components/events/EventCard'

const PromoterEventsPage = () => {
  const { user } = useAuth()
  const [viewMode, setViewMode] = useState('list')
  const events = useMemo(() => {
    if (!user?.id) return []
    return eventsData.events
      .filter(event => event.promoterId === user.id)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
  }, [user])

  const hasEvents = events.length > 0

  return (
    <>
      <SideNav />
      <div className="ml-64 -mt-16 min-h-[calc(100vh+4rem)] bg-primary pt-16 flex flex-col">
        <div className="px-4 py-12 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <main className="mx-auto flex-1 w-full">
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
          </main>
        </div>
      </div>
    </>
  )
}

export default PromoterEventsPage
