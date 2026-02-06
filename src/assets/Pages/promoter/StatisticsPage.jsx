import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import eventsData from '../../../data/events.json'
import StatsGrid from '../../../components/dashboard/StatsGrid'
import SideNav from '../../../components/navigation/SideNav'

const StatisticsPage = () => {
  const { user } = useAuth()

  const eventStats = useMemo(() => {
    if (!user?.id) return null

    const userEvents = eventsData.events.filter(event => event.promoterId === user.id)

    const now = new Date()
    const activeEvents = userEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate >= now
    }).length

    const pastEvents = userEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate < now
    }).length

    const totalAttendees = userEvents.reduce((sum, event) => {
      return sum + (event.attendees || 0)
    }, 0)

    const totalRevenue = userEvents.reduce((sum, event) => {
      const revenue = (event.price || 0) * (event.attendees || 0)
      return sum + revenue
    }, 0)

    const averageAttendance = userEvents.length > 0
      ? Math.round(totalAttendees / userEvents.length)
      : 0

    const averageTicketPrice = userEvents.length > 0
      ? (userEvents.reduce((sum, event) => sum + (event.price || 0), 0) / userEvents.length).toFixed(2)
      : 0

    return {
      totalEvents: userEvents.length,
      activeEvents,
      pastEvents,
      totalAttendees,
      totalRevenue,
      averageAttendance,
      averageTicketPrice
    }
  }, [user?.id])

  if (!eventStats) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Loading statistics...</h1>
        </div>
      </div>
    )
  }

  const StatCard = ({ title, value, subtitle = '' }) => (
    <div className="bg-card rounded-xl p-6 border border-primary shadow-lg">
      <h3 className="text-secondary text-sm font-medium mb-2">{title}</h3>
      <p className="text-3xl font-bold text-primary mb-1">{value}</p>
      {subtitle && <p className="text-xs text-secondary">{subtitle}</p>}
    </div>
  )

  return (
    <>
      <SideNav />
      <div className="ml-64 min-h-screen bg-primary pt-8 pb-8 flex flex-col">
        <div className="px-4 py-0 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <main className="mx-auto flex-1 w-full max-w-6xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-primary mb-2">Event Statistics</h1>
              <p className="text-secondary">Track your event performance and attendee insights</p>
            </div>

          {/* Overall Stats */}
          <StatsGrid userType="promoter" />

          {/* Detailed Statistics */}
          <section className="bg-card rounded-xl border border-primary p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Detailed Performance</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StatCard
                title="Total Events"
                value={eventStats.totalEvents}
                subtitle="All events created"
              />
              <StatCard
                title="Active Events"
                value={eventStats.activeEvents}
                subtitle="Upcoming events"
              />
              <StatCard
                title="Past Events"
                value={eventStats.pastEvents}
                subtitle="Completed events"
              />
              <StatCard
                title="Average Attendance"
                value={eventStats.averageAttendance}
                subtitle="Per event"
              />
              <StatCard
                title="Average Ticket Price"
                value={`£${eventStats.averageTicketPrice}`}
                subtitle="In GBP"
              />
              <StatCard
                title="Capacity Utilization"
                value={eventStats.totalEvents > 0 ? `${Math.round((eventStats.totalAttendees / (eventStats.totalEvents * 100)) * 100)}%` : '0%'}
                subtitle="Average fill rate"
              />
            </div>
          </section>

          {/* Revenue Breakdown */}
          {eventStats.totalRevenue > 0 && (
            <section className="mt-8 bg-card rounded-xl border border-primary p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Revenue Summary</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-linear-to-br from-green-500 to-emerald-600 p-6 text-white">
                  <p className="text-sm text-green-100 mb-2">Total Revenue</p>
                  <p className="text-4xl font-bold">
                    £{new Intl.NumberFormat('en-GB', {
                      style: 'currency',
                      currency: 'GBP',
                      maximumFractionDigits: 0
                    }).format(eventStats.totalRevenue).slice(1)}
                  </p>
                </div>
                <div className="rounded-lg bg-linear-to-br from-blue-500 to-cyan-600 p-6 text-white">
                  <p className="text-sm text-blue-100 mb-2">Average Revenue Per Event</p>
                  <p className="text-4xl font-bold">
                    £{eventStats.totalEvents > 0
                      ? new Intl.NumberFormat('en-GB', {
                          style: 'currency',
                          currency: 'GBP',
                          maximumFractionDigits: 0
                        }).format(eventStats.totalRevenue / eventStats.totalEvents).slice(1)
                      : '0'}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Event List */}
          {eventStats.totalEvents > 0 && (
            <section className="mt-12 bg-card rounded-xl border border-primary p-12 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Events Overview</h2>
              <div className="space-y-4">
                {eventsData.events
                  .filter(event => event.promoterId === user?.id)
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map(event => (
                    <div key={event.id} className="flex items-center justify-between border-b border-primary pb-4 last:border-b-0">
                      <div>
                        <h3 className="font-semibold text-primary">{event.title}</h3>
                        <p className="text-sm text-secondary">{event.location} • {new Date(event.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{event.attendees}/{event.maxCapacity} attendees</p>
                        <p className="text-sm text-secondary">
                          £{new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'GBP',
                            maximumFractionDigits: 0
                          }).format((event.price || 0) * (event.attendees || 0)).slice(1)} revenue
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          )}

          {eventStats.totalEvents === 0 && (
            <div className="mt-8 rounded-xl bg-card border border-primary p-12 text-center">
              <h2 className="text-xl font-semibold text-primary mb-2">No Events Yet</h2>
              <p className="text-secondary mb-6">Create your first event to see statistics here.</p>
              <Link
                to="/dashboard/promoter/create-event"
                className="inline-block px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md transition hover:from-cyan-600 hover:to-blue-600"
              >
                Create Event
              </Link>
            </div>
          )}
          </main>
        </div>
      </div>
    </>
  )
}

export default StatisticsPage
