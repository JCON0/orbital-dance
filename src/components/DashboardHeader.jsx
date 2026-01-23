import React from 'react'

const DashboardHeader = ({ userType, firstName, lastName }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-primary mb-2">
        {userType === 'customer' ? 'Customer Dashboard' : 'Promoter Dashboard'}
      </h1>
      <p className="text-secondary">
        Welcome back, {firstName} {lastName}!
      </p>
    </div>
  )
}

export default DashboardHeader
