import React, { useMemo } from 'react'
import { useSavedEvents } from '../contexts/SavedEventsContext'
import { useAuth } from '../contexts/AuthContext'
import eventsData from '../data/events.json'

const StatCard = ({ title, value }) => (
  <div className="bg-card rounded-xl p-6 border border-primary">
    <h3 className="text-secondary text-sm font-medium mb-2">{title}</h3>
    <p className="text-3xl font-bold text-primary">{value}</p>
  </div>
)

const StatsGrid = ({ userType }) => {
  const isCustomer = userType === 'customer'
  const { savedEventIds } = useSavedEvents()
  const { user } = useAuth()

  const promoterStats = useMemo(() => {
    if (!user?.id || userType !== 'promoter') return null

    const userEvents = eventsData.events.filter(
      event => event.promoterId === user.id
    )

    const now = new Date()
    const activeEvents = userEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate >= now
    }).length

    const totalAttendees = userEvents.reduce((sum, event) => {
      return sum + (event.attendees || 0)
    }, 0)

    const totalRevenue = userEvents.reduce((sum, event) => {
      const revenue = (event.price || 0) * (event.attendees || 0)
      return sum + revenue
    }, 0)

    return {
      activeEvents,
      totalAttendees,
      totalRevenue
    }
  }, [user, userType])

  if (isCustomer) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Upcoming Events" value="0" />
        <StatCard title="Past Events" value="0" />
        <StatCard title="Saved Events" value={savedEventIds.length} />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard title="Active Events" value={promoterStats?.activeEvents || 0} />
      <StatCard title="Total Sales" value={`€${(promoterStats?.totalRevenue || 0).toLocaleString()}`} />
      <StatCard title="Attendees" value={promoterStats?.totalAttendees || 0} />
    </div>
  )
}

export default StatsGrid
