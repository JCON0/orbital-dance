import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpHeader = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <button onClick={() => navigate(-1)} className="fixed top-20 left-4 sm:left-6 lg:left-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 hover:text-primary transition font-semibold border border-secondary/30 hover:border-primary/50 cursor-pointer z-40">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Join us</h1>
        <p className="text-secondary">Create an account to get started</p>
      </div>
    </>
  )
}

export default SignUpHeader
