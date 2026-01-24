import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', to: '/dashboard', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 13h7V4H4v9zm0 7h7v-5H4v5zm9 0h7V11h-7v9zm0-18v4h7V2h-7z" />
    </svg>
  ) },
  { label: 'Bookings', to: '/dashboard?view=bookings', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 4h12a2 2 0 012 2v12l-4-3-4 3-4-3-4 3V6a2 2 0 012-2z" />
    </svg>
  ) },
  { label: 'Invoices', to: '/dashboard?view=invoices', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M7 4h10a1 1 0 011 1v14l-3-2-3 2-3-2-3 2V5a1 1 0 011-1z" />
      <path d="M9 9h6M9 12h4" />
    </svg>
  ) },
  { label: 'Inbox', to: '/dashboard?view=inbox', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 6h16l-2 12H6L4 6z" />
      <path d="M9 11l3 3 3-3" />
    </svg>
  ) },
  { label: 'Calendar', to: '/dashboard?view=calendar', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M7 4v3m10-3v3M5 8h14v11H5z" />
      <path d="M9 12h2v2H9z" />
    </svg>
  ) },
  { label: 'Events', to: '/events', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 6h14v12H5z" />
      <path d="M9 10h6" />
      <path d="M9 14h4" />
    </svg>
  ) },
  { label: 'Financials', to: '/dashboard?view=financials', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 18h12M6 6h12M6 12h5" />
      <path d="M13 12a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  ) },
  { label: 'Gallery', to: '/dashboard?view=gallery', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 6h16v12H4z" />
      <path d="M8 13l2.5-2.5 3 3L16 12l2 3" />
    </svg>
  ) },
  { label: 'Feedback', to: '/dashboard?view=feedback', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 5h14v10H7l-2 3V5z" />
      <path d="M9 9h6" />
      <path d="M9 12h4" />
    </svg>
  ) },
]

const SideNav = () => {
  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-6rem)] w-64 shrink-0 rounded-3xl border border-stone-200 bg-[rgb(var(--color-bg-card))] p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 lg:block">
      <div className="flex items-center gap-2 px-1 pb-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-cyan-600 text-sm font-bold text-white">
          OD
        </div>
        <div className="text-base font-semibold text-slate-900 dark:text-white">Orbital Dance</div>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => `group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition duration-150 ${isActive ? 'bg-white text-cyan-700 shadow-sm dark:bg-slate-800 dark:text-cyan-300' : 'text-slate-700 hover:bg-white/60 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-200'}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-inherit shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition group-hover:border-cyan-200 group-hover:shadow-sm dark:border-slate-700 dark:bg-slate-800">
              {item.icon}
            </span>
            <span className="tracking-tight">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default SideNav
