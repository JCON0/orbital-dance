import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import DashboardHeader from '../../components/DashboardHeader'
import StatsGrid from '../../components/StatsGrid'
import QuickActions from '../../components/QuickActions'
import RecentEvents from '../../components/RecentEvents'
import AccountInfo from '../../components/AccountInfo'
import Footer from '../../components/Footer'

const Dashboard = () => {
  const { user } = useAuth()
  const isPromoter = user?.type === 'promoter'

  return (
    <>
    <div className="min-h-screen bg-primary -mt-16 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <DashboardHeader 
          userType={user?.type}
          firstName={user?.firstName}
          lastName={user?.lastName}
        />
        
        <StatsGrid userType={user?.type} />
        
        <QuickActions userType={user?.type} />
        
        {isPromoter && <RecentEvents />}
        
        <AccountInfo user={user} />
      </div>
    </div>
    < Footer />
    </>
  )
}

export default Dashboard
