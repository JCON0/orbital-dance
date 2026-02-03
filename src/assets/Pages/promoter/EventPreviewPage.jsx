import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import Footer from '../../../components/navigation/Footer'
import EventHero from '../../../components/events/EventHero'
import EventInfoGrid from '../../../components/events/EventInfoGrid'
import EventTags from '../../../components/events/EventTags'
import DeleteConfirmationModal from '../../../components/modals/DeleteConfirmationModal'
import ErrorModal from '../../../components/modals/ErrorModal'
import eventsData from '../../../data/events.json'
import { findEventBySlug } from '../../../utils/slugUtils'

const EventPreviewPage = () => {
  const { slug } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const event = findEventBySlug(eventsData.events, slug)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [errorModal, setErrorModal] = useState({ isOpen: false, title: '', message: '' })

  // Redirect to regular event page if user is not the event's promoter
  React.useEffect(() => {
    if (event && user && event.promoterId !== user.id) {
      navigate(`/events/${slug}`)
    }
  }, [event, user, slug, navigate])

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    setIsDeleting(true)
    try {
      // Make API call to delete the event
      const deleteResponse = await fetch(`http://localhost:8000/events/${event.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (!deleteResponse.ok) {
        throw new Error('Failed to delete event')
      }

      // Navigate back to dashboard after successful deletion
      setTimeout(() => {
        navigate('/dashboard/promoter/events')
      }, 100)
    } catch (error) {
      console.error('Failed to delete event:', error)
      setIsDeleting(false)
      setIsDeleteModalOpen(false)
      setErrorModal({
        isOpen: true,
        title: 'Unable to Delete Event',
        message: 'Sorry, something went wrong while deleting your event. Please try again.'
      })
    }
  }

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false)
  }

  const handleCloseErrorModal = () => {
    setErrorModal({ isOpen: false, title: '', message: '' })
  }

  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Event Not Found</h1>
          <Link to="/dashboard" className="mt-4 inline-block text-cyan-500 hover:text-cyan-600">
            Back to Dashboard
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
      <div className="min-h-screen bg-primary">
        {/* Preview Mode Banner */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-6 shadow-lg relative z-10">
          <div className="mx-auto max-w-4xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-semibold">Preview Mode</span>
              <span className="text-cyan-100">This is how your event appears to customers</span>
            </div>
            <Link 
              to="/dashboard/my-events" 
              className="text-sm font-medium hover:text-cyan-100 transition flex items-center gap-1 px-4 py-2 rounded hover:bg-white/10 cursor-pointer"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>

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

          {/* Preview Mode Actions */}
          <div className="mb-8 space-y-4">
            <div className="rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Event Management</h3>
              <div className="flex gap-4">
                {/* <Link
                  to={`/events/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-cyan-600 px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:bg-cyan-700"
                >
                  View Public Event Page
                </Link> */}
                <button 
                  className="flex-1 rounded-lg border border-slate-300 dark:border-slate-600 px-6 py-3 font-semibold text-slate-700 dark:text-slate-300 transition hover:bg-slate-200 dark:hover:bg-slate-700"
                  onClick={() => {/* TODO: Implement edit functionality */}}
                >
                  Edit Event
                </button>
                <button 
                  className="rounded-lg border border-red-300 dark:border-red-600 px-6 py-3 font-semibold text-red-600 dark:text-red-400 transition hover:bg-red-50 dark:hover:bg-red-900/20"
                  onClick={handleDeleteClick}
                >
                  Delete Event
                </button>
              </div>
            </div>

            {/* Event Stats (Preview) */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 p-6 text-white shadow-lg">
                <div className="text-3xl font-bold">0</div>
                <div className="text-sm text-cyan-100">RSVPs</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg">
                <div className="text-3xl font-bold">0</div>
                <div className="text-sm text-blue-100">Views</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white shadow-lg">
                <div className="text-3xl font-bold">0</div>
                <div className="text-sm text-purple-100">Shares</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        eventTitle={event?.title}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        isLoading={isDeleting}
      />
      <ErrorModal
        isOpen={errorModal.isOpen}
        title={errorModal.title}
        message={errorModal.message}
        onClose={handleCloseErrorModal}
      />
    </>
  )
}

export default EventPreviewPage
