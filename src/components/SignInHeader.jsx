import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignInHeader = () => {
  const navigate = useNavigate()
  
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Welcome back</h1>
      <p className="text-secondary">Sign in to discover amazing events</p>
    </div>
  )
}

export default SignInHeader
