import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './contexts/ToastContext'
import { AuthProvider } from './contexts/AuthContext'
import { SavedEventsProvider } from './contexts/SavedEventsContext'
import Navbar from './components/navigation/Navbar'
import ScrollToTop from './components/navigation/ScrollToTop'
import ProtectedRoute from './components/auth/ProtectedRoute'
import HomePage from './assets/Pages/public/HomePage'
import EventsPage from './assets/Pages/customer/EventsPage'
import AboutPage from './assets/Pages/public/AboutPage'
import EventDetailPage from './assets/Pages/promoter/EventDetailPage'
import EventPreviewPage from './assets/Pages/promoter/EventPreviewPage'
import SignInPage from './assets/Pages/public/SignInPage'
import SignUpPage from './assets/Pages/public/SignUpPage'
import Dashboard from './assets/Pages/Dashboard'
import CreateEventPage from './assets/Pages/promoter/CreateEventPage'
import NotFoundPage from './assets/Pages/public/NotFoundPage'
import ComingSoonPage from './assets/Pages/public/ComingSoonPage'
import PromoterEventsPage from './assets/Pages/promoter/PromoterEventsPage'
import StatisticsPage from './assets/Pages/promoter/StatisticsPage'
import CustomerTicketsPage from './assets/Pages/customer/CustomerTicketsPage'

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme ? savedTheme === 'dark' : true
    }
    return true
  })

  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDark) {
      htmlElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      htmlElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <ToastProvider>
      <AuthProvider>
        <SavedEventsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar isDark={isDark} setIsDark={setIsDark} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events/:slug" element={<EventDetailPage />} />
              <Route path="/events/:slug/preview" element={
                <ProtectedRoute allowedRoles={['promoter']}>
                  <EventPreviewPage />
                </ProtectedRoute>
              } />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              
              {/* Protected Dashboard Route */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute allowedRoles={['customer', 'promoter']}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/tickets"
                element={
                  <ProtectedRoute allowedRoles={['customer']}>
                    <CustomerTicketsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/my-events"
                element={
                  <ProtectedRoute allowedRoles={['promoter']}>
                    <PromoterEventsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/statistics"
                element={
                  <ProtectedRoute allowedRoles={['promoter']}>
                    <StatisticsPage />
                  </ProtectedRoute>
                }
              />
              
              {/* Protected Create Event Route */}
              <Route
                path="/create-event"
                element={
                  <ProtectedRoute allowedRoles={['promoter']}>
                    <CreateEventPage />
                  </ProtectedRoute>
                }
              />
              
              <Route path="/blog" element={<ComingSoonPage />} />
              <Route path="/careers" element={<ComingSoonPage />} />
              <Route path="/press" element={<ComingSoonPage />} />
              <Route path="/pricing" element={<ComingSoonPage />} />
              <Route path="/security" element={<ComingSoonPage />} />
              <Route path="/privacy" element={<ComingSoonPage />} />
              <Route path="/terms" element={<ComingSoonPage />} />
              <Route path="/cookies" element={<ComingSoonPage />} />
              <Route path="/contact" element={<ComingSoonPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </SavedEventsProvider>
      </AuthProvider>
    </ToastProvider>
  )
}

export default App