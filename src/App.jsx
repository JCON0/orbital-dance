import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

/* Context Providers */
import { ToastProvider } from './contexts/ToastContext'
import { AuthProvider } from './contexts/AuthContext'
import { SavedEventsProvider } from './contexts/SavedEventsContext'

/* Layout / UI */
import Navbar from './components/navigation/Navbar'
import ScrollToTop from './components/navigation/ScrollToTop'
import ProtectedRoute from './components/auth/ProtectedRoute'

/* Public Pages */
import HomePage from './assets/Pages/public/HomePage'
import AboutPage from './assets/Pages/public/AboutPage'
import SignInPage from './assets/Pages/public/SignInPage'
import SignUpPage from './assets/Pages/public/SignUpPage'
import ComingSoonPage from './assets/Pages/public/ComingSoonPage'
import NotFoundPage from './assets/Pages/public/NotFoundPage'

/* Dashboard Redirect */
import Dashboard from './assets/Pages/Dashboard'

/* Customer Pages */
import UserDashboard from './assets/Pages/customer/UserDashboard'
import EventsPage from './assets/Pages/customer/EventsPage'
import CustomerTicketsPage from './assets/Pages/customer/CustomerTicketsPage'

/* Promoter Pages */
import PromoterDashboard from './assets/Pages/promoter/PromoterDashboard'
import CreateEventPage from './assets/Pages/promoter/CreateEventPage'
import EventDetailPage from './assets/Pages/promoter/EventDetailPage'
import EventPreviewPage from './assets/Pages/promoter/EventPreviewPage'
import PromoterEventsPage from './assets/Pages/promoter/PromoterEventsPage'
import StatisticsPage from './assets/Pages/promoter/StatisticsPage'

const ConditionalNavbar = ({ isDark, setIsDark }) => {
  const location = useLocation()
  const hideNavbar = location.pathname.startsWith('/dashboard/promoter')
  
  if (hideNavbar) return null
  return <Navbar isDark={isDark} setIsDark={setIsDark} />
}

const App = () => {
  /* Dark Mode - always set to dark until scope requires change.*/
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme ? savedTheme === 'dark' : true
    }
    return true
  })

  useEffect(() => {
    const html = document.documentElement

    if (isDark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <ToastProvider>
      <AuthProvider>
        <SavedEventsProvider>
          <BrowserRouter>
            <ConditionalNavbar isDark={isDark} setIsDark={setIsDark} />
            <ScrollToTop />

            <Routes>

              {/* ========== PUBLIC ROUTES ========== */}

              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events" element={<EventsPage />} />

              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />

              {/* Static Pages */}
              <Route path="/blog" element={<ComingSoonPage />} />
              <Route path="/careers" element={<ComingSoonPage />} />
              <Route path="/press" element={<ComingSoonPage />} />
              <Route path="/pricing" element={<ComingSoonPage />} />
              <Route path="/security" element={<ComingSoonPage />} />
              <Route path="/privacy" element={<ComingSoonPage />} />
              <Route path="/terms" element={<ComingSoonPage />} />
              <Route path="/cookies" element={<ComingSoonPage />} />
              <Route path="/contact" element={<ComingSoonPage />} />


              {/* ========== DASHBOARD ENTRY ========== */}

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute allowedRoles={['customer', 'promoter']}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />


              {/* ========== CUSTOMER DASHBOARD ========== */}

              <Route
                path="/dashboard/customer"
                element={
                  <ProtectedRoute allowedRoles={['customer']}>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/dashboard/customer/tickets"
                element={
                  <ProtectedRoute allowedRoles={['customer']}>
                    <CustomerTicketsPage />
                  </ProtectedRoute>
                }
              />


              {/* ========== PROMOTER DASHBOARD ========== */}

              <Route
                path="/dashboard/promoter"
                element={
                  <ProtectedRoute allowedRoles={['promoter']}>
                    <PromoterDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/dashboard/promoter/events"
                element={
                  <ProtectedRoute allowedRoles={['promoter']}>
                    <PromoterEventsPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/dashboard/promoter/statistics"
                element={
                  <ProtectedRoute allowedRoles={['promoter']}>
                    <StatisticsPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/dashboard/promoter/create-event"
                element={
                  <ProtectedRoute allowedRoles={['promoter']}>
                    <CreateEventPage />
                  </ProtectedRoute>
                }
              />


              {/* ========== EVENT ROUTES ========== */}

              <Route
                path="/events/:slug"
                element={<EventDetailPage />}
              />

              <Route
                path="/events/:slug/preview"
                element={
                  <ProtectedRoute allowedRoles={['promoter']}>
                    <EventPreviewPage />
                  </ProtectedRoute>
                }
              />


              {/* ========== 404 ========== */}

              <Route path="*" element={<NotFoundPage />} />

            </Routes>
          </BrowserRouter>
        </SavedEventsProvider>
      </AuthProvider>
    </ToastProvider>
  )
}

export default App
