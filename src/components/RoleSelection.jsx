import React from 'react'

const RoleSelection = ({ onSelectRole }) => {
  return (
    <div className="mb-8">
      <p className="text-center text-sm font-medium text-primary mb-4">I want to sign up as a:</p>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onSelectRole('customer')}
          className="rounded-lg border-2 border-primary bg-card p-4 text-center transition hover:border-cyan-400 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
        >
          <div className="mb-2 text-2xl">👤</div>
          <p className="font-semibold text-primary">Customer</p>
          <p className="text-xs text-secondary mt-1">Discover events</p>
        </button>
        <button
          onClick={() => onSelectRole('promoter')}
          className="rounded-lg border-2 border-primary bg-card p-4 text-center transition hover:border-cyan-400 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
        >
          <div className="mb-2 text-2xl">🎤</div>
          <p className="font-semibold text-primary">Promoter</p>
          <p className="text-xs text-secondary mt-1">Create events</p>
        </button>
      </div>
    </div>
  )
}

export default RoleSelection
