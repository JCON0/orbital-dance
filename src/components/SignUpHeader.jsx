import React from 'react'
import { Link } from 'react-router-dom'

const SignUpHeader = () => {
  return (
    <div className="text-center mb-8">
      <Link to="/" className="inline-flex items-center gap-2 mb-6">

      </Link>
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Join us</h1>
      <p className="text-secondary">Create an account to get started</p>
    </div>
  )
}

export default SignUpHeader
