import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import { useToast } from '../../../contexts/ToastContext'
import SignInHeader from '../../../components/auth/SignInHeader'
import SignInForm from '../../../components/auth/SignInForm'
import SocialSignIn from '../../../components/auth/SocialSignIn'
import SignInFooter from '../../../components/auth/SignInFooter'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login, user } = useAuth()
  const navigate = useNavigate()
  const { showToast } = useToast()

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true })
    }
  }, [user, navigate])

  const handleSignIn = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await login(email, password)

      if (result.success) {
        showToast('Login successful!', 'success')
        
        // Redirect to dashboard
        navigate('/dashboard')
      } else {
        showToast(result.error || 'Login failed', 'error')
      }
    } catch (error) {
      showToast('An error occurred during login', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = () => {
    // TODO: Implement Google sign-in
    console.log('Sign in with Google')
  }

  const handleFacebookSignIn = () => {
    // TODO: Implement Facebook sign-in
    console.log('Sign in with Facebook')
  }

  return (
    <div className="min-h-screen bg-primary flex flex-col -mt-16 pt-16">
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <SignInHeader />

          {/* Sign In Form */}
          <SignInForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={handleSignIn}
          />

          {/* Social Sign In */}
          <SocialSignIn
            onGoogleSignIn={handleGoogleSignIn}
            onFacebookSignIn={handleFacebookSignIn}
          />

          {/* Footer */}
          <SignInFooter />
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default SignInPage
