import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const navItems = [
  { label: 'Dashboard', to: '/dashboard', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 13h7V4H4v9zm0 7h7v-5H4v5zm9 0h7V11h-7v9zm0-18v4h7V2h-7z" />
    </svg>
  ) },
  { label: 'Events', to: '/dashboard/promoter/events', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 6h14v12H5z" />
      <path d="M9 10h6" />
      <path d="M9 14h4" />
    </svg>
  ) },
  { label: 'Statistics', to: '/dashboard/promoter/statistics', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 18h16" />
      <path d="M6 14l4-5 4 3 4-6" />
      <circle cx="6" cy="14" r="1.3" />
      <circle cx="10" cy="9" r="1.3" />
      <circle cx="14" cy="12" r="1.3" />
      <circle cx="18" cy="6" r="1.3" />
    </svg>
  ) },
  { label: 'Create Event', to: '/dashboard/promoter/create-event', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ) },
]

const SideNav = () => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  // Only show sidebar for promoters
  if (!user || user?.type !== 'promoter') {
    return null
  }

  const isActive = (itemTo) => {
    if (itemTo === '/dashboard') {
      return location.pathname === '/dashboard'
    }
    return location.pathname === itemTo || location.pathname.startsWith(itemTo)
  }

  const handleLogout = () => {
    logout()
    navigate('/sign-in')
  }

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 shrink-0 border-r border-stone-200 bg-slate-900 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950 lg:block overflow-y-auto">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2 px-1 pb-6 pt-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-cyan-600 text-sm font-bold text-white">
            OD
          </div>
          <div className="text-base font-semibold text-slate-900 dark:text-white">Orbital Dance</div>
        </div>

        {/* Promoter info section
        <div className="mb-6 rounded-2xl bg-white/40 px-4 py-3 dark:bg-slate-800/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Promoter Account</p>
          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{user?.firstName} {user?.lastName}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
        </div> */}

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/dashboard'}
              className={({ isActive: linkActive }) => {
                const active = isActive(item.to) || linkActive
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
        <div className="flex-grow" />

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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
              <path d="M9 5H5v14h4" />
              <path d="M16 17l4-5-4-5" />
              <path d="M7 12h13" />
            </svg>
          </span>
          <span className="tracking-tight">Log out</span>
        </button>
      </div>
    </aside>
  )
}

export default SideNav
