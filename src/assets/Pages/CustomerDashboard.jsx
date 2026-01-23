import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const CustomerDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/sign-in')
  }

  return (
    <div className="min-h-screen bg-primary -mt-16 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              Customer Dashboard
            </h1>
            <p className="text-secondary">
              Welcome back, {user?.firstName} {user?.lastName}!
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-xl p-6 border border-primary">
            <h3 className="text-secondary text-sm font-medium mb-2">
              Upcoming Events
            </h3>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-primary">
            <h3 className="text-secondary text-sm font-medium mb-2">
              Past Events
            </h3>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-primary">
            <h3 className="text-secondary text-sm font-medium mb-2">
              Saved Events
            </h3>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl p-6 border border-primary mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/events')}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition"
            >
              Browse Events
            </button>
            <button
              onClick={() => navigate('/events')}
              className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-card-hover transition"
            >
              View Saved Events
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-card rounded-xl p-6 border border-primary">
          <h2 className="text-xl font-bold text-primary mb-4">
            Account Information
          </h2>
          <div className="space-y-3">
            <div>
              <span className="text-secondary text-sm">Email:</span>
              <p className="text-primary font-medium">{user?.email}</p>
            </div>
            <div>
              <span className="text-secondary text-sm">Account Type:</span>
              <p className="text-primary font-medium capitalize">{user?.type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard
