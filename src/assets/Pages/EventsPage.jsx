import React, { useState, useEffect } from 'react'
import SearchComponent from '../../components/SearchComponent'
import ExploreHeader from '../../components/ExploreHeader'
import ResultsCount from '../../components/ResultsCount'
import EventsGrid from '../../components/EventsGrid'
import Footer from '../../components/Footer'
import eventsData from '../../data/events.json'

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('All Locations')
  const [categories, setCategories] = useState(['All'])
  const [filteredEvents, setFilteredEvents] = useState(eventsData.events)

  useEffect(() => {
    let filtered = eventsData.events

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
  }, [searchQuery, location, categories])

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-950 -mt-16 pt-16">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <ExploreHeader />

          <SearchComponent 
            onSearchChange={setSearchQuery}
            onLocationChange={setLocation}
            onCategoryChange={setCategories}
          />

          <ResultsCount count={filteredEvents.length} />

          <EventsGrid events={filteredEvents} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EventsPage
