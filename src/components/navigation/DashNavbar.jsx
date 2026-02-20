import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineBars3,
  HiOutlineBell,
  HiOutlineCog6Tooth,
  HiOutlineInformationCircle,
  HiOutlineUser,
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronDown,
} from 'react-icons/hi2'

const DashNavbar = ({ isSideNavOpen = true, onToggleSideNav }) => {
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
    <nav className="sticky top-0 z-40 bg-slate-950 backdrop-blur-md transition border-slate-700">
      <div className="mx-auto flex max-w-full items-center gap-8 px-6 pt-5 sm:px-8">
        {/* Dashboard Title */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <button
            type="button"
            onClick={onToggleSideNav}
            aria-label={isSideNavOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            aria-pressed={!isSideNavOpen}
            className="rounded-lg p-2 text-white transition bg-slate-900 hover:bg-slate-800"
          >
            <HiOutlineBars3 className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">
            Dashboard
          </h1>
        </div>

        {/* Search Bar - Centered */}
        <form onSubmit={handleSearch} className="flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search events, customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 py-2 pl-4 pr-4 text-base text-white placeholder-slate-400 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
            >
              <HiOutlineMagnifyingGlass className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center gap-2">
          {/* Notifications Button */}
          <div className="relative" ref={notificationsRef}>
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative rounded-lg p-2 text-slate-300 transition bg-slate-900 hover:bg-slate-800 hover:text-white"
              aria-label="Notifications"
            >
              <HiOutlineBell className="h-6 w-6" />
              {/* Notification Badge */}
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 rounded-lg border border-slate-700 bg-slate-800 shadow-lg">
                <div className="border-b border-slate-700 px-4 py-3">
                  <h3 className="text-base font-semibold text-white">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="px-4 py-8 text-center text-sm text-slate-400">
                    No new notifications
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Account Button */}
          <div className="relative" ref={accountMenuRef}>
            <button
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              className="flex max-w-[240px] items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-slate-800"
              aria-label="Account menu"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-cyan-600 text-sm font-bold text-white">
                {user?.firstName?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="min-w-0 flex-1 text-left">
                <div className="truncate text-base font-semibold text-white">
                  {(user?.firstName || user?.lastName)
                    ? `${user?.firstName || ''} ${user?.lastName || ''}`.trim()
                    : 'User'}
                </div>
                <div className="truncate text-sm text-slate-400">
                  {user?.type ? user.type.charAt(0).toUpperCase() + user.type.slice(1) : 'Admin'}
                </div>
              </div>
              <HiOutlineChevronDown className="h-5 w-5 text-slate-300" />
            </button>

            {/* Account Dropdown */}
            {isAccountMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg border border-slate-700 bg-slate-800 shadow-lg">
                <div className="border-b border-slate-700 px-4 py-3">
                  <p className="text-base font-semibold text-white">
                    {user?.firstName + " " + user?.lastName|| 'User Account'}
                  </p>
                  <p className="text-sm text-slate-400">
                    {user?.email}
                  </p>
                </div>
                <div className="p-2">
                  <button
                    onClick={() => {
                      navigate('/dashboard/profile')
                      setIsAccountMenuOpen(false)
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-base text-slate-300 transition hover:bg-slate-700"
                  >
                    <HiOutlineUser className="h-5 w-5" />
                    View Profile
                  </button>
                  <button
                    onClick={() => {
                      navigate('/dashboard/account')
                      setIsAccountMenuOpen(false)
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-base text-slate-300 transition hover:bg-slate-700"
                  >
                    <HiOutlineCog6Tooth className="h-5 w-5" />
                    Account Settings
                  </button>
                  <hr className="my-2 border-slate-700" />
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-base text-red-400 transition hover:bg-red-950/20"
                  >
                    <HiOutlineArrowRightOnRectangle className="h-5 w-5" />
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