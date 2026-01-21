import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-linear-to-br from-cyan-400 to-blue-500"></div>
              <span className="text-xl font-bold text-primary">Orbital Dance</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Welcome back</h1>
            <p className="text-secondary">Sign in to discover amazing events</p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSignIn} className="space-y-4 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-primary bg-card px-4 py-2.5 text-primary placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary mb-1.5">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-primary bg-card px-4 py-2.5 text-primary placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-primary bg-card"
                />
                <span className="text-sm text-secondary">Remember me</span>
              </label>
              <a href="#" className="text-sm text-cyan-500 hover:text-cyan-600 transition">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-2.5 font-semibold text-white transition hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-primary px-2 text-secondary">Or continue with</span>
            </div>
          </div>

          {/* Social Sign In */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={handleGoogleSignIn}
              className="rounded-lg border border-primary bg-card px-3 py-2.5 font-medium text-primary transition hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-cyan-400/50 flex items-center justify-center gap-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="hidden sm:inline">Google</span>
            </button>

            <button
              onClick={handleFacebookSignIn}
              className="rounded-lg border border-primary bg-card px-3 py-2.5 font-medium text-primary transition hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-cyan-400/50 flex items-center justify-center gap-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="hidden sm:inline">Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-secondary">
              Don't have an account?{' '}
              <a href="#" className="font-semibold text-cyan-500 hover:text-cyan-600 transition">
                Sign up
              </a>
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
