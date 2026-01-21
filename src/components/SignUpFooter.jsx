import React from 'react'
import { Link } from 'react-router-dom'

const SignUpFooter = ({ onChangeRole }) => {
  return (
    <>
      {/* Sign In Link */}
      <div className="text-center">
        <p className="text-secondary">
          Already have an account?{' '}
          <Link to="/sign-in" className="font-semibold text-cyan-500 hover:text-cyan-600 transition">
            Sign in
          </Link>
        </p>
      </div>

      {/* Back to Home */}
      <div className="mt-8 text-center">
        {onChangeRole ? (
          <button
            onClick={onChangeRole}
            className="inline-flex items-center gap-1 text-sm text-secondary hover:text-primary transition"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Change role
          </button>
        ) : (
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-secondary hover:text-primary transition"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        )}
      </div>
    </>
  )
}

export default SignUpFooter
