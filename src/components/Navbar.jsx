import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsOpen(false)
  }

  const getDashboardLink = () => {
    if (!user) return null
    return user.type === 'customer' ? '/dashboard/customer' : '/dashboard/promoter'
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[rgb(var(--color-bg-primary))]/80 backdrop-blur-md transition dark:border-slate-700">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-cyan-600 text-sm font-bold text-white">
            OD
          </span>
          <span className="hidden sm:inline">Orbital Dance</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <Link
              to="/"
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                location.pathname === '/'
                  ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                location.pathname === '/events'
                  ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              Events
            </Link>
            <Link
              to="/about"
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                location.pathname === '/about'
                  ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              About
            </Link>
            {user ? (
              <>
                <Link
                  to={getDashboardLink()}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    location.pathname.includes('/dashboard')
                      ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="ml-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/sign-in"
                className="ml-2 rounded-lg bg-linear-to-r from-cyan-400 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:from-cyan-500 hover:to-cyan-700"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 w-5 bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-stone-200 bg-primary px-4 py-4 dark:border-slate-700 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                location.pathname === '/'
                  ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                location.pathname === '/events'
                  ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              Events
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                location.pathname === '/about'
                  ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              About
            </Link>
            {user ? (
              <>
                <Link
                  to={getDashboardLink()}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    location.pathname.includes('/dashboard')
                      ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="mt-2 rounded-lg bg-red-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/sign-in"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-lg bg-linear-to-r from-cyan-400 to-cyan-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
