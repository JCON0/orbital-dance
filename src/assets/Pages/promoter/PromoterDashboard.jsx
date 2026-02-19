import React, { useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import SideNav from '../../../components/navigation/SideNav'
import DashNavbar from '../../../components/navigation/DashNavbar'
import StatsGrid from '../../../components/dashboard/StatsGrid'
import RecentEvents from '../../../components/events/RecentEvents'

const PromoterDashboard = () => {
  const { user } = useAuth()
  const [isSideNavOpen, setIsSideNavOpen] = useState(true)

  return (
    <>
      <SideNav isOpen={isSideNavOpen} />
      <div
        className={`${isSideNavOpen ? 'lg:pl-64' : 'lg:pl-0'} w-full min-h-screen bg-primary flex flex-col transition-[padding] duration-300 ease-in-out`}
      >
        <DashNavbar
          isSideNavOpen={isSideNavOpen}
          onToggleSideNav={() => setIsSideNavOpen((prev) => !prev)}
        />
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
