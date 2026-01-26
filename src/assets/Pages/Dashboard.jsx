import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Dashboard = () => {
  const { user, loading } = useAuth()

  if (loading) return null

  if (!user) return <Navigate to="/login" />

  if (user.type === 'promoter') {
    return <Navigate to="/dashboard/promoter" />
  }

  return <Navigate to="/dashboard/customer" />
}

export default Dashboard
