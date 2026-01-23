import React from 'react'

const StatCard = ({ title, value }) => (
  <div className="bg-card rounded-xl p-6 border border-primary">
    <h3 className="text-secondary text-sm font-medium mb-2">{title}</h3>
    <p className="text-3xl font-bold text-primary">{value}</p>
  </div>
)

const StatsGrid = ({ userType }) => {
  const isCustomer = userType === 'customer'

  if (isCustomer) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Upcoming Events" value="0" />
        <StatCard title="Past Events" value="0" />
        <StatCard title="Saved Events" value="0" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <StatCard title="Active Events" value="0" />
      <StatCard title="Total Sales" value="$0" />
      <StatCard title="Attendees" value="0" />
      <StatCard title="Revenue" value="$0" />
    </div>
  )
}

export default StatsGrid
