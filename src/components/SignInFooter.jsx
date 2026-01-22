import React from 'react'
import { Link } from 'react-router-dom'

const SignInFooter = () => {
  return (
    <div className="text-center">
      <p className="text-secondary">
        Don't have an account?{' '}
        <Link to="/sign-up" className="font-semibold text-cyan-500 hover:text-cyan-600 transition">
          Sign up
        </Link>
      </p>
    </div>
  )
}

export default SignInFooter
