import React from 'react'
import EventCard from './EventCard'

const EventsGrid = ({ events }) => {
  if (events.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-slate-600 dark:text-slate-400">
          No events found matching your criteria
        </p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
          Try adjusting your search or filters
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventsGrid
