import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
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
      <div className="-mt-16 min-h-screen bg-primary pt-16">
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <main className="mx-auto max-w-6xl">
            <DashboardHeader
              userType={user?.type}
              firstName={user?.firstName}
              lastName={user?.lastName}
            />
            <StatsGrid userType={user?.type} />
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
