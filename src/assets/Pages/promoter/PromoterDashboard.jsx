import React from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import SideNav from '../../../components/navigation/SideNav'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import StatsGrid from '../../../components/dashboard/StatsGrid'
import RecentEvents from '../../../components/events/RecentEvents'

const PromoterDashboard = () => {
  const { user } = useAuth()

  return (
    <>
      <SideNav />
      <div className="ml-64 -mt-16 min-h-screen bg-primary pt-16">
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <main className="mx-auto">
            <DashboardHeader
              userType={user?.type}
              firstName={user?.firstName}
              lastName={user?.lastName}
            />
            <StatsGrid userType={user?.type} />
            <RecentEvents />
          </main>
        </div>
      </div>
    </>
  )
}

export default PromoterDashboard
