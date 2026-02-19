import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const DashNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const accountMenuRef = useRef(null)
  const notificationsRef = useRef(null)
  const settingsRef = useRef(null)
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setIsAccountMenuOpen(false)
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false)
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // TODO: Implement search functionality
      console.log('Searching for:', searchQuery)
    }
  }

  return (
    <nav className="sticky top-0 z-40 border-b border-stone-200 bg-[rgb(var(--color-bg-primary))]/95 backdrop-blur-md transition dark:border-slate-700">
      <div className="mx-auto flex max-w-full items-center gap-8 px-6 py-3 sm:px-8">
        {/* Dashboard Title */}
        <h1 className="text-xl font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Dashboard
        </h1>

        {/* Search Bar - Centered */}
        <form onSubmit={handleSearch} className="flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search events, customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-stone-300 bg-white py-2 pl-4 pr-4 text-sm text-slate-900 placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center gap-2">
          {/* Notifications Button */}
          <div className="relative" ref={notificationsRef}>
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative rounded-lg p-2 text-slate-600 transition hover:bg-stone-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* Notification Badge */}
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 rounded-lg border border-stone-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="border-b border-stone-200 px-4 py-3 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="px-4 py-8 text-center text-slate-500 dark:text-slate-400">
                    No new notifications
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Settings Button */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="rounded-lg p-2 text-slate-600 transition hover:bg-stone-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="Settings"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>

            {/* Settings Dropdown */}
            {isSettingsOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-stone-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="p-2">
                  <button
                    onClick={() => {
                      navigate('/dashboard/settings')
                      setIsSettingsOpen(false)
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm text-slate-700 transition hover:bg-stone-100 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Event Settings
                  </button>
                  <button
                    onClick={() => {
                      navigate('/dashboard/preferences')
                      setIsSettingsOpen(false)
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm text-slate-700 transition hover:bg-stone-100 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                    </svg>
                    Preferences
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Account Button */}
          <div className="relative" ref={accountMenuRef}>
            <button
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-stone-100 dark:hover:bg-slate-800"
              aria-label="Account menu"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 to-cyan-600 text-xs font-bold text-white">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <svg
                className="h-5 w-5 text-slate-600 dark:text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>

            {/* Account Dropdown */}
            {isAccountMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg border border-stone-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="border-b border-stone-200 px-4 py-3 dark:border-slate-700">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {user?.name || 'User Account'}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {user?.email}
                  </p>
                </div>
                <div className="p-2">
                  <button
                    onClick={() => {
                      navigate('/dashboard/profile')
                      setIsAccountMenuOpen(false)
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm text-slate-700 transition hover:bg-stone-100 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    View Profile
                  </button>
                  <button
                    onClick={() => {
                      navigate('/dashboard/account')
                      setIsAccountMenuOpen(false)
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm text-slate-700 transition hover:bg-stone-100 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                    </svg>
                    Account Settings
                  </button>
                  <hr className="my-2 border-stone-200 dark:border-slate-700" />
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default DashNavbar