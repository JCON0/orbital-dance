import React from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import SideNav from '../../../components/navigation/SideNav'
import DashNavbar from '../../../components/navigation/DashNavbar'
import StatsGrid from '../../../components/dashboard/StatsGrid'
import RecentEvents from '../../../components/events/RecentEvents'

const PromoterDashboard = () => {
  const { user } = useAuth()

  return (
    <>
      <SideNav />
      <div className="ml-64 min-h-screen bg-primary flex flex-col">
        <DashNavbar />
        <div className="px-4 py-8 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <main className="mx-auto flex-1 w-full">
            <StatsGrid userType={user?.type} />
            <RecentEvents />
          </main>
        </div>
      </div>
    </>
  )
}

export default PromoterDashboard
