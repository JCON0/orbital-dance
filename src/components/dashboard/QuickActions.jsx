import React from 'react'
import { useNavigate } from 'react-router-dom'

const QuickActions = ({ userType, onViewSavedEvents }) => {
  const navigate = useNavigate()
  const isCustomer = userType === 'customer'

  return (
    <div className="bg-card rounded-xl p-6 border border-primary mb-8">
      <h2 className="text-xl font-bold text-primary mb-4">Quick Actions</h2>
      
      {isCustomer ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/events')}
            className="px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition"
          >
            Browse Events
          </button>
          <button
            onClick={onViewSavedEvents}
            className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-card-hover transition"
          >
            View Saved Events
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => navigate('/dashboard/promoter/create-event')}
            className="px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition"
          >
            Create New Event
          </button>
          <button className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-card-hover transition">
            View All Events
          </button>
          <button className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-card-hover transition">
            Sales Analytics
          </button>
        </div>
      )}
    </div>
  )
}

export default QuickActions
