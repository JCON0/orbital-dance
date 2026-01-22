import React from 'react'
import { Link } from 'react-router-dom'

const SignUpFooter = ({ onChangeRole }) => {
  return (
    <div className="text-center">
      <p className="text-secondary">
        Already have an account?{' '}
        <Link to="/sign-in" className="font-semibold text-cyan-500 hover:text-cyan-600 transition">
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default SignUpFooter
