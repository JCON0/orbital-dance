import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import PromoterDashboard from './promoter/PromoterDashboard'
import UserDashboard from './customer/UserDashboard'

const Dashboard = () => {
  const { user, loading } = useAuth()

  if (loading) return null

  if (!user) return null

  if (user.type === 'promoter') {
    return <PromoterDashboard />
  }

  return <UserDashboard />
}

export default Dashboard
