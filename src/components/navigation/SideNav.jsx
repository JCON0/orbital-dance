import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  HiOutlineSquares2X2,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineUsers,
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronDown,
} from 'react-icons/hi2'
import { useAuth } from '../../contexts/AuthContext'

const navItems = [
  { label: 'Dashboard', to: '/dashboard/promoter', icon: <HiOutlineSquares2X2 className="h-6 w-6" /> },
  { label: 'Statistics', to: '/dashboard/promoter/statistics', icon: <HiOutlineChartBar className="h-6 w-6" /> },
  { label: 'Settings', to: '/dashboard/promoter/settings', icon: <HiOutlineCog6Tooth className="h-6 w-6" /> },
]

const SideNav = ({ isOpen = true }) => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const isEventsRoute =
    location.pathname.includes('/dashboard/promoter/events') ||
    location.pathname.includes('/dashboard/promoter/create-event')
  const [isEventsOpen, setIsEventsOpen] = useState(isEventsRoute)

  useEffect(() => {
    if (isEventsRoute) {
      setIsEventsOpen(true)
    }
  }, [isEventsRoute])

  // Only show sidebar for promoters
  if (!user || user?.type !== 'promoter') {
    return null
  }

  const handleLogout = () => {
    logout()
    navigate('/sign-in')
  }

  return (
    <aside
      className={`fixed left-0 top-0 hidden h-screen w-64 shrink-0 bg-slate-900 p-5 overflow-y-auto lg:block transition-transform duration-300 ease-in-out ${
        isOpen ? 'lg:translate-x-0' : 'lg:-translate-x-full'
      }`}
     
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2 px-1 pb-6 pt-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-cyan-600 text-base font-bold text-white">
            OD
          </div>
          <div className="text-2xl font-bold text-white">Orbital Dance</div>
        </div>

        <nav className="flex flex-col gap-2">
          <h1 className="text-base font-bold text-slate-300 px-4 py-3">
            Main menu
          </h1>
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              <NavLink
                to={item.to}
                end={item.to === '/dashboard/promoter'}
                className={({ isActive: linkActive }) => {
                  const active = linkActive
                  return `group flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-semibold transition duration-150 ${
                    active
                      ? 'bg-slate-800 text-cyan-300 shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-cyan-200'
                  }`
                }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-inherit shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition group-hover:border-cyan-600 group-hover:shadow-sm">
                  {item.icon}
                </span>
                <span className="tracking-tight">{item.label}</span>
              </NavLink>

              {item.label === 'Dashboard' && (
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setIsEventsOpen((prev) => !prev)}
                    className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-semibold transition duration-150 ${
                      isEventsRoute
                        ? 'bg-slate-800 text-cyan-300 shadow-sm'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-cyan-200'
                    }`}
                    aria-expanded={isEventsOpen}
                    aria-controls="side-nav-events"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-inherit shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition group-hover:border-cyan-600 group-hover:shadow-sm">
                      <HiOutlineCalendarDays className="h-6 w-6" />
                    </span>
                    <span className="tracking-tight">Events</span>
                    <HiOutlineChevronDown
                      className={`ml-auto h-5 w-5 transition ${isEventsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isEventsOpen && (
                    <div id="side-nav-events" className="mt-1 flex flex-col gap-1 pl-14">
                      <NavLink
                        to="/dashboard/promoter/events"
                        className={({ isActive: linkActive }) =>
                          `rounded-xl px-3 py-2 text-base font-semibold transition ${
                            linkActive
                              ? 'bg-slate-800 text-cyan-300 shadow-sm'
                              : 'text-slate-400 hover:bg-slate-800 hover:text-cyan-200'
                          }`
                        }
                      >
                        Event Page
                      </NavLink>
                      <NavLink
                        to="/dashboard/promoter/create-event"
                        className={({ isActive: linkActive }) =>
                          `rounded-xl px-3 py-2 text-base font-semibold transition ${
                            linkActive
                              ? 'bg-slate-800 text-cyan-300 shadow-sm'
                              : 'text-slate-400 hover:bg-slate-800 hover:text-cyan-200'
                          }`
                        }
                      >
                        Create Event
                      </NavLink>
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Spacer to push bottom items down */}
        <div className="grow" />

        {/* Help section */}
        <div className="rounded-2xl bg-cyan-900/20 px-4 py-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Need help?</p>
          <p className="mt-1 text-sm text-cyan-400">Check our documentation or contact support for assistance.</p>
        </div>

        <button
          type="button"
          className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-base font-semibold text-slate-200 transition hover:bg-slate-700"
        >
          Support
        </button>


      </div>
    </aside>
  )
}

export default SideNav
