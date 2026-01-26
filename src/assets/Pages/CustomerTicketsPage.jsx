import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const CustomerTicketsPage = () => {
  const { user } = useAuth()

  return (
    <div className="-mt-16 min-h-screen bg-primary pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary">My Tickets</h1>
          <p className="text-secondary pt-5">All tickets linked to your account</p>
        </div>


        <div className="rounded-2xl border border-primary bg-card p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 2.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-primary mb-2">No tickets yet</h2>
          <p className="text-secondary mb-6">Book an event to see your tickets here. Ticket purchasing coming soon!</p>
          <Link
            to="/events"
            className="inline-flex items-center justify-center rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-cyan-600 hover:to-blue-600"
          >
            Browse Events
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CustomerTicketsPage
