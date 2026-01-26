import React from 'react'

const AccountInfo = ({ user }) => {
  const isPromoter = user?.type === 'promoter'

  return (
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
        {isPromoter && (
          <div>
            <span className="text-secondary text-sm">Business Name:</span>
            <p className="text-primary font-medium">
              {user?.firstName} {user?.lastName} Events
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AccountInfo
