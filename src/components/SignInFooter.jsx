import React from 'react'
import { Link } from 'react-router-dom'

const SignInFooter = () => {
  return (
    <>
      {/* Sign Up Link */}
      <div className="text-center">
        <p className="text-secondary">
          Don't have an account?{' '}
          <Link to="/sign-up" className="font-semibold text-cyan-500 hover:text-cyan-600 transition">
            Sign up
          </Link>
        </p>
      </div>

      {/* Back to Home */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-secondary hover:text-primary transition"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
      </div>
    </>
  )
}

export default SignInFooter
