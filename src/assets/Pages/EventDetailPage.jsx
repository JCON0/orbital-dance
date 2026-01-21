import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import EventHero from '../../components/EventHero'
import EventInfoGrid from '../../components/EventInfoGrid'
import EventTags from '../../components/EventTags'
import EventActions from '../../components/EventActions'
import eventsData from '../../data/events.json'
import { findEventBySlug } from '../../utils/slugUtils'

const EventDetailPage = () => {
  const { slug } = useParams()
  const event = findEventBySlug(eventsData.events, slug)

  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Event Not Found</h1>
          <Link to="/explore" className="mt-4 inline-block text-cyan-500 hover:text-cyan-600">
            Back to Explore
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const formatPrice = (price, currency) => {
    if (price === 0) return 'Free'
    const symbols = { EUR: '€', GBP: '£', DKK: 'kr', SEK: 'kr' }
    return `${symbols[currency] || currency}${price}`
  }

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <EventHero event={event} />

        {/* Event Details */}
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              {event.title}
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
              {event.description}
            </p>
          </div>

          <EventInfoGrid event={event} formatDate={formatDate} formatPrice={formatPrice} />

          <EventTags tags={event.tags} />

          <EventActions />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EventDetailPage
