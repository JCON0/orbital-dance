import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  const accountMenuRef = useRef(null)
  const dashboardMenuRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  // Keep navbar visible on promoter dashboard as well
  const hideForPromoterDashboard = false

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setIsAccountOpen(false)
      }
      if (dashboardMenuRef.current && !dashboardMenuRef.current.contains(event.target)) {
        setIsDashboardOpen(false)
      }
    }

    if (isAccountOpen || isDashboardOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isAccountOpen, isDashboardOpen])
  const handleLogout = () => {
    logout()
    navigate('/')
    setIsOpen(false)
    setIsAccountOpen(false)
  }
  

  const getDashboardLink = () => {
    return '/dashboard'
  }

  if (hideForPromoterDashboard) return null

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
                {/* Dashboard Dropdown (Desktop) - For both customers and promoters */}
                <div className="relative" ref={dashboardMenuRef}>
                  <button
                    onClick={() => setIsDashboardOpen((prev) => !prev)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition flex items-center gap-2 ${
                      location.pathname.includes('/dashboard')
                        ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={isDashboardOpen}
                  >
                    Dashboard
                    <svg className={`h-4 w-4 transition ${isDashboardOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  {isDashboardOpen && (
                    <div
                      className="absolute left-0 mt-2 w-48 rounded-lg border border-stone-200 bg-[rgb(var(--color-bg-primary))] shadow-lg dark:border-slate-700"
                      role="menu"
                    >
                      <Link
                        to="/dashboard"
                        onClick={() => setIsDashboardOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        role="menuitem"
                      >
                        Overview
                      </Link>
                      {user?.type === 'promoter' && (
                        <>
                          <Link
                            to="/dashboard/my-events"
                            onClick={() => setIsDashboardOpen(false)}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                            role="menuitem"
                          >
                            My Events
                          </Link>
                          <Link
                            to="/dashboard/statistics"
                            onClick={() => setIsDashboardOpen(false)}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                            role="menuitem"
                          >
                            Statistics
                          </Link>
                        </>
                      )}
                    </div>
                  )}
                </div>
                {/* Account Dropdown (Desktop) */}
                <div className="relative" ref={accountMenuRef}>
                  <button
                    onClick={() => setIsAccountOpen((prev) => !prev)}
                    className="ml-2 rounded-lg bg-linear-to-r from-cyan-400 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:from-cyan-500 hover:to-cyan-700"
                    aria-haspopup="menu"
                    aria-expanded={isAccountOpen}
                  >
                    {user?.firstName || user?.lastName ? `${user?.firstName} ${user?.lastName}` : 'Account'}
                  </button>
                  {isAccountOpen && (
                    <div
                      className="absolute right-0 mt-2 w-40 rounded-lg border border-stone-200 bg-[rgb(var(--color-bg-primary))] shadow-lg dark:border-slate-700"
                      role="menu"
                    >
                      <Link
                        to={getDashboardLink()}
                        onClick={() => setIsAccountOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        role="menuitem"
                      >
                        Account
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-slate-100 dark:text-red-400 dark:hover:bg-slate-800"
                        role="menuitem"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
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
                {user?.type === 'promoter' && (
                  <>
                    <Link
                      to="/dashboard/my-events"
                      onClick={() => setIsOpen(false)}
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                        location.pathname === '/dashboard/my-events'
                          ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      My Events
                    </Link>
                    <Link
                      to="/dashboard/statistics"
                      onClick={() => setIsOpen(false)}
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                        location.pathname === '/dashboard/statistics'
                          ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      Statistics
                    </Link>
                  </>
                )}
                {/* Account + Logout (Mobile) */}
                <div className="mt-2 rounded-lg border border-stone-200 bg-[rgb(var(--color-bg-primary))] dark:border-slate-700">
                  <button
                    onClick={() => navigate(getDashboardLink())}
                    className="w-full px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    {user?.firstName || user?.lastName ? `${user?.firstName} ${user?.lastName}` : 'Account'}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-slate-100 dark:text-red-400 dark:hover:bg-slate-800"
                  >
                    Logout
                  </button>
                </div>
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
