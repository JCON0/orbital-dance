import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  HiOutlineSquares2X2,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlinePlusCircle,
  HiOutlineUsers,
  HiOutlineArrowRightOnRectangle,
} from 'react-icons/hi2'
import { useAuth } from '../../contexts/AuthContext'

const navItems = [
  { label: 'Dashboard', to: '/dashboard/promoter', icon: <HiOutlineSquares2X2 className="h-5 w-5" /> },
  { label: 'Events', to: '/dashboard/promoter/events', icon: <HiOutlineCalendarDays className="h-5 w-5" /> },
  { label: 'Statistics', to: '/dashboard/promoter/statistics', icon: <HiOutlineChartBar className="h-5 w-5" /> },
  { label: 'Create Event', to: '/dashboard/promoter/create-event', icon: <HiOutlinePlusCircle className="h-5 w-5" /> },
]

const SideNav = () => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  // Only show sidebar for promoters
  if (!user || user?.type !== 'promoter') {
    return null
  }

  const handleLogout = () => {
    logout()
    navigate('/sign-in')
  }

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 shrink-0 bg-slate-900 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950 lg:block overflow-y-auto">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2 px-1 pb-6 pt-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-cyan-600 text-sm font-bold text-white">
            OD
          </div>
          <div className="text-base font-semibold text-slate-900 dark:text-white">Orbital Dance</div>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/dashboard/promoter'}
              className={({ isActive: linkActive }) => {
                const active = linkActive
                return `group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition duration-150 ${
                  active
                    ? 'bg-white text-cyan-700 shadow-sm dark:bg-slate-800 dark:text-cyan-300'
                    : 'text-slate-700 hover:bg-white/60 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-200'
                }`
              }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-inherit shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition group-hover:border-cyan-200 group-hover:shadow-sm dark:border-slate-700 dark:bg-slate-800">
                {item.icon}
              </span>
              <span className="tracking-tight">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Spacer to push bottom items down */}
        <div className="grow" />

        {/* Help section */}
        <div className="rounded-2xl bg-cyan-50 px-4 py-3 dark:bg-cyan-900/20">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">Need help?</p>
          <p className="mt-1 text-xs text-cyan-600 dark:text-cyan-400">Check our documentation or contact support for assistance.</p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-700 text-white shadow-sm dark:bg-slate-700">
            <HiOutlineArrowRightOnRectangle className="h-5 w-5" />
          </span>
          <span className="tracking-tight">Log out</span>
        </button>
      </div>
    </aside>
  )
}

export default SideNav
