import React from 'react'
import { Link } from 'react-router-dom'

const SignInHeader = () => {
  return (
    <div className="text-center mb-8">
      <Link to="/" className="inline-flex items-center gap-2 mb-6">
        <div className="h-8 w-8 rounded-lg bg-linear-to-br from-cyan-400 to-blue-500"></div>
        <span className="text-xl font-bold text-primary">Orbital Dance</span>
      </Link>
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Welcome back</h1>
      <p className="text-secondary">Sign in to discover amazing events</p>
    </div>
  )
}

export default SignInHeader
