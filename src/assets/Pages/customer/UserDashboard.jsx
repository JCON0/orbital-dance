import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import StatsGrid from '../../../components/dashboard/StatsGrid'
import Footer from '../../../components/navigation/Footer'
import SavedEvents from '../../../components/events/SavedEvents'

const UserDashboard = () => {
  const { user } = useAuth()

  return (
    <>
      <div className="-mt-16 min-h-screen bg-primary pt-16">
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <main className="mx-auto max-w-6xl">
            <DashboardHeader
              userType={user?.type}
              firstName={user?.firstName}
              lastName={user?.lastName}
            />
            <StatsGrid userType={user?.type} />
            <div className="mb-8 rounded-xl border border-primary bg-card p-6 shadow-sm">
              <div className="mb-3">
                <p className="text-2xl font-bold uppercase tracking-wide text-primary mb-2">Upcoming</p>
                <h2 className="text-sm font-semibold text-secondary mb-6">Next Event</h2>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border border-dashed border-primary/50 bg-card-hover px-4 py-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
                <div>
                  <h3 className="text-lg font-semibold text-primary">No upcoming event</h3>
                  <p className="text-secondary">Purchase tickets to see your next event here.</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
                  <Link
                    to="/events"
                    className="rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-cyan-600 hover:to-blue-600"
                  >
                    Browse Events
                  </Link>
                </div>
              </div>
            </div>
            <SavedEvents />
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserDashboard
