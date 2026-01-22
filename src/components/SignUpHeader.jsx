import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpHeader = () => {
  const navigate = useNavigate()
  
  return (
    <div className="text-center mb-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-1 text-sm text-secondary hover:text-primary transition mb-6">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Join us</h1>
      <p className="text-secondary">Create an account to get started</p>
    </div>
  )
}

export default SignUpHeader
