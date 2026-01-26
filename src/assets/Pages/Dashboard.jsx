import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import PromoterDashboard from './promoter/PromoterDashboard'
import UserDashboard from './customer/UserDashboard'

const Dashboard = () => {
  const { user } = useAuth()
  const isPromoter = user?.type === 'promoter'

  return isPromoter ? <PromoterDashboard /> : <UserDashboard />
}

export default Dashboard
