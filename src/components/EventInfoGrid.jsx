import React from 'react'

const EventInfoGrid = ({ event, formatDate, formatPrice }) => {
  return (
    <div className="mb-12 grid gap-6 sm:grid-cols-2">
      {/* Date & Time */}
      <div className="rounded-xl border border-primary bg-card p-6">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Date & Time
        </div>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          {formatDate(event.date)}
        </p>
        <p className="text-slate-600 dark:text-slate-400">{event.time}</p>
      </div>

      {/* Location */}
      <div className="rounded-xl border border-primary bg-card p-6">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Location
        </div>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          {event.venue}
        </p>
        <p className="text-slate-600 dark:text-slate-400">{event.location}</p>
      </div>

      {/* Price */}
      <div className="rounded-xl border border-primary bg-card p-6">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Price
        </div>
        <p className="text-2xl font-bold text-cyan-500">
          {formatPrice(event.price, event.currency)}
        </p>
      </div>

      {/* Capacity */}
      <div className="rounded-xl border border-primary bg-card p-6">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Attendance
        </div>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          {event.attendees} / {event.maxCapacity} attending
        </p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div 
            className="h-full bg-cyan-500"
            style={{ width: `${(event.attendees / event.maxCapacity) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default EventInfoGrid
