import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import { useToast } from '../../../contexts/ToastContext'
import Footer from '../../../components/navigation/Footer'
import EventHero from '../../../components/events/EventHero'
import EventInfoGrid from '../../../components/events/EventInfoGrid'
import EventTags from '../../../components/events/EventTags'
import EventActions from '../../../components/events/EventActions'
import eventsData from '../../../data/events.json'
import { findEventBySlug } from '../../../utils/slugUtils'

const EventDetailPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [isSaved, setIsSaved] = useState(false)
  const { addToast } = useToast()
  const event = findEventBySlug(eventsData.events, slug)

  // Redirect promoters to preview page if viewing their own event
  React.useEffect(() => {
    if (event && user && user.type === 'promoter' && event.promoterId === user.id) {
      navigate(`/preview/${slug}`)
    }
  }, [event, user, slug, navigate])

  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Event Not Found</h1>
          <Link to="/events" className="mt-4 inline-block text-cyan-500 hover:text-cyan-600">
            Back to Events
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

  const handleSaveEvent = () => {
    const willBeSaved = !isSaved
    setIsSaved(willBeSaved)
    const message = willBeSaved ? `✓ ${event.title} saved!` : `✗ ${event.title} removed from saved`
    const type = willBeSaved ? 'success' : 'error'
    addToast(message, type)
  }

  return (
    <>
      <div className="min-h-screen bg-primary">
        <EventHero event={event} />

        {/* Event Details */}
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {event.title}
            </h1>
            <p className="mt-4 text-xl text-slate-400">
              {event.description}
            </p>
          </div>

          <EventInfoGrid event={event} formatDate={formatDate} formatPrice={formatPrice} />

          <EventTags tags={event.tags} />

          <div className="mb-8">
            <EventActions isSaved={isSaved} onSave={handleSaveEvent} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EventDetailPage
