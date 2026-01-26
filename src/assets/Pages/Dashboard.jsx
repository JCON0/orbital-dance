import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import SideNav from '../../components/SideNav'
import DashboardHeader from '../../components/DashboardHeader'
import StatsGrid from '../../components/StatsGrid'
import RecentEvents from '../../components/RecentEvents'
import Footer from '../../components/Footer'
import SavedEvents from '../../components/SavedEvents'

const Dashboard = () => {
  const { user } = useAuth()
  const isPromoter = user?.type === 'promoter'

  return (
    <>
      <SideNav />
      <div className={`${isPromoter ? 'ml-64' : ''} -mt-16 min-h-screen bg-primary pt-16`}>
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <main className={isPromoter ? 'mx-auto' : 'mx-auto max-w-6xl'}>
            <DashboardHeader
              userType={user?.type}
              firstName={user?.firstName}
              lastName={user?.lastName}
            />
            <StatsGrid userType={user?.type} />
            {!isPromoter && (
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
            )}
            {!isPromoter && <SavedEvents />}
            {isPromoter && <RecentEvents />}
          </main>
        </div>
      </div>
      {!isPromoter && <Footer />}
    </>
  )
}

export default Dashboard
