import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

const SignInPage = () => {
  // Simple translation fallback since i18n is not set up
  
  const [mode, setMode] = useState('signin') // 'signin' or 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = (e) => {
    e.preventDefault()
    setError('')
    
    if (!email || !password) {
      setError(t('signIn.errors.fillFields'))
      return
    }
    
    // Mock sign in
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setPassword('')
      setSubmitted(false)
    }, 2000)
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    setError('')
    
    if (!fullName || !email || !password || !confirmPassword) {
      setError(t('signIn.errors.fillFields'))
      return
    }
    
    if (password !== confirmPassword) {
      setError(t('signIn.errors.passwordMismatch'))
      return
    }
    
    if (password.length < 8) {
      setError(t('signIn.errors.passwordLength'))
      return
    }
    
    // Mock sign up
    setSubmitted(true)
    setTimeout(() => {
      setFullName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setSubmitted(false)
    }, 2000)
  }

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
        {/* Back to home link */}
        <div className="px-4 py-3 sm:px-6 sm:py-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('signIn.backToHome')}
          </Link>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-4 pt-6 pb-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="w-full max-w-sm sm:max-w-md">
            {/* Header */}
            <div className="mb-6 sm:mb-8 text-center">
              <Link to="/" className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-sm sm:text-lg font-bold text-white">
                  OD
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Orbital Dance</span>
              </Link>
              
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {mode === 'signin' ? t('signIn.title') : t('signIn.createAccount')}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                {mode === 'signin' 
                  ? t('signIn.subtitle') 
                  : t('signIn.createSubtitle')}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={mode === 'signin' ? handleSignIn : handleSignUp} className="space-y-4 sm:space-y-4">
              {/* Full Name (Sign Up only) */}
              {mode === 'signup' && (
                <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                  {t('signIn.fullName')}
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={t('signIn.fullNamePlaceholder')}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                  {t('signIn.email')}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('signIn.emailPlaceholder')}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                  {t('signIn.password')}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('signIn.passwordPlaceholder')}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                />
              </div>

              {/* Confirm Password (Sign Up only) */}
              {mode === 'signup' && (
                <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                  {t('signIn.confirmPassword')}
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t('signIn.passwordPlaceholder')}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                />
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="rounded-lg bg-red-50 p-3 sm:p-4 dark:bg-red-900/20">
                  <p className="text-xs sm:text-sm font-medium text-red-700 dark:text-red-400">{error}</p>
                </div>
              )}

              {/* Success message */}
              {submitted && (
                <div className="rounded-lg bg-emerald-50 p-3 sm:p-4 dark:bg-emerald-900/20">
                  <p className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400">
                    {mode === 'signin' ? t('signIn.signInSuccess') : t('signIn.signUpSuccess')}
                  </p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition hover:shadow-xl hover:from-cyan-500 hover:to-cyan-700 disabled:opacity-50"
              >
                {mode === 'signin' ? t('signIn.signInButton') : t('signIn.createButton')}
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 sm:my-6 flex items-center gap-3 sm:gap-4">
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{t('signIn.or')}</span>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            </div>

            {/* Social sign in buttons */}
            <div className="flex gap-2 sm:gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 sm:gap-3 rounded-lg border border-slate-300 bg-white px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="hidden sm:inline">{t('signIn.google')}</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 sm:gap-3 rounded-lg border border-slate-300 bg-white px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="hidden sm:inline">{t('signIn.facebook')}</span>
              </button>
            </div>

            {/* Toggle mode */}
            <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {mode === 'signin' ? (
                <>
                  {t('signIn.noAccount')}{' '}
                  <button
                    onClick={() => {
                      setMode('signup')
                      setError('')
                      setEmail('')
                      setPassword('')
                      setFullName('')
                    }}
                    className="font-medium text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                  >
                    {t('signIn.createOne')}
                  </button>
                </>
              ) : (
                <>
                  {t('signIn.hasAccount')}{' '}
                  <button
                    onClick={() => {
                      setMode('signin')
                      setError('')
                      setEmail('')
                      setPassword('')
                    }}
                    className="font-medium text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                  >
                    {t('signIn.signInLink')}
                  </button>
                </>
              )}
            </p>

            {/* Terms and Privacy */}
            <p className="mt-5 sm:mt-6 text-center text-xs text-slate-500 dark:text-slate-500">
              {mode === 'signin' ? t('signIn.termsSignIn') : t('signIn.termsSignUp')}{' '}
              <a href="#" className="underline hover:text-slate-600 dark:hover:text-slate-400">{t('signIn.termsOfService')}</a>
              {' '}{t('signIn.and')}{' '}
              <a href="#" className="underline hover:text-slate-600 dark:hover:text-slate-400">{t('signIn.privacyPolicy')}</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInPage
