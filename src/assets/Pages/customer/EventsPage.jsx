import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useSavedEvents } from '../../contexts/SavedEventsContext'
import SearchComponent from '../../components/SearchComponent'
import ExploreHeader from '../../components/ExploreHeader'
import ResultsCount from '../../components/ResultsCount'
import EventsGrid from '../../components/EventsGrid'
import Footer from '../../components/Footer'

const EventsPage = () => {
  const [searchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('All Locations')
  const [categories, setCategories] = useState(['All'])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showSavedOnly, setShowSavedOnly] = useState(false)
  const { isAuthenticated } = useAuth()
  const { savedEventIds } = useSavedEvents()

  // Fetch events from localhost:8000
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:8000/events')
        if (!response.ok) {
          throw new Error('Failed to fetch events')
        }
        const data = await response.json()
        setEvents(data.events || data)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching events:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Initialize categories from URL params
  useEffect(() => {
    const categoriesParam = searchParams.get('categories')
    if (categoriesParam) {
      try {
        const parsedCategories = JSON.parse(categoriesParam)
        setCategories(parsedCategories)
      } catch (e) {
        setCategories(['All'])
      }
    }
  }, [searchParams])

  useEffect(() => {
    let filtered = events

    // Filter by saved events first if showSavedOnly is true
    if (showSavedOnly) {
      filtered = filtered.filter(event => savedEventIds.includes(event.id))
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by location
    if (location !== 'All Locations') {
      filtered = filtered.filter(event => event.location === location)
    }

    // Filter by category (multiple selections)
    if (!categories.includes('All')) {
      filtered = filtered.filter(event => categories.includes(event.category))
    }

    setFilteredEvents(filtered)
  }, [searchQuery, location, categories, events, showSavedOnly, savedEventIds])

  return (
    <>
      <div className="min-h-screen bg-primary -mt-16 pt-16">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <ExploreHeader />

          {isAuthenticated && (
            <div className="mb-6 flex items-center gap-3">
              <button
                onClick={() => setShowSavedOnly(!showSavedOnly)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  showSavedOnly
                    ? 'bg-linear-to-r from-cyan-400 to-cyan-600 text-white shadow-md'
                    : 'border border-primary text-slate-700 hover:bg-secondary dark:text-slate-300'
                }`}
              >
                <svg className="h-5 w-5" fill={showSavedOnly ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {showSavedOnly ? 'Showing Saved Events' : 'View Saved Events'}
              </button>
              {showSavedOnly && (
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {savedEventIds.length === 0 ? 'No saved events yet' : `${savedEventIds.length} saved`}
                </span>
              )}
            </div>
          )}

          <SearchComponent 
            onSearchChange={setSearchQuery}
            onLocationChange={setLocation}
            onCategoryChange={setCategories}
            initialCategories={categories}
          />

          {loading && <p className="text-center text-lg text-gray-500 py-8">Loading events...</p>}
          {error && <p className="text-center text-lg text-red-500 py-8">Error: {error}</p>}
          {!loading && !error && (
            <>
              <ResultsCount count={filteredEvents.length} />
              <EventsGrid events={filteredEvents} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EventsPage
