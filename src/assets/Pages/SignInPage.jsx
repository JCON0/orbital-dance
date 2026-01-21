import React, { useState } from 'react'
import SignInHeader from '../../components/SignInHeader'
import SignInForm from '../../components/SignInForm'
import SocialSignIn from '../../components/SocialSignIn'
import SignInFooter from '../../components/SignInFooter'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e) => {
    e.preventDefault()
    // TODO: Implement sign-in logic
    console.log('Sign in with email:', email, password)
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
