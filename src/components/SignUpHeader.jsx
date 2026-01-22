import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpHeader = () => {
  const navigate = useNavigate()
  
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Join us</h1>
      <p className="text-secondary">Create an account to get started</p>
    </div>
  )
}

export default SignUpHeader
