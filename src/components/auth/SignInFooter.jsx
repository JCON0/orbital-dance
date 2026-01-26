import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignInFooter = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <div className="text-center">
        <p className="text-secondary">
          Don't have an account?{' '}
          <Link to="/sign-up" className="font-semibold text-cyan-500 hover:text-cyan-600 transition">
            Sign up
          </Link>
        </p>
      </div>

      {/* Back button */}
      <div className="mt-8 text-center">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 hover:text-primary transition font-semibold border border-secondary/30 hover:border-primary/50 cursor-pointer">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
    </>
  )
}

export default SignInFooter
