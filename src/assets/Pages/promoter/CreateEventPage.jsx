import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import { useToast } from '../../../contexts/ToastContext'
import Footer from '../../../components/navigation/Footer'
import CreateEventPreview from '../../../components/events/CreateEventPreview'
import EventCreationResultModal from '../../../components/modals/EventCreationResultModal'

const CreateEventPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { showToast } = useToast()
  
  const [formData, setFormData] = useState({
    title: '',
    category: 'Techno',
    location: '',
    venue: '',
    date: '',
    time: '',
    price: '',
    currency: 'EUR',
    image: '',
    description: '',
    maxCapacity: '',
    tags: ''
  })

  // Load draft on mount
  useEffect(() => {
    const draftKey = `eventDraft_${user?.id}`
    const savedDraft = localStorage.getItem(draftKey)
    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft)
        setFormData(draft)
        showToast('Draft loaded', 'success')
      } catch (error) {
        console.error('Error loading draft:', error)
      }
    }
  }, [user?.id])

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [showResultModal, setShowResultModal] = useState(false)
  const [creationSuccess, setCreationSuccess] = useState(false)

  const categories = [
    'Techno', 'House', 'Trance', 'Drum & Bass', 
    'Dubstep', 'Hardstyle', 'Progressive', 'Psytrance'
  ]

  const currencies = ['EUR', 'USD', 'GBP', 'CHF', 'AUD']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field and hide preview to avoid stale data
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (showPreview) setShowPreview(false)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) newErrors.title = 'Event title is required'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    if (!formData.venue.trim()) newErrors.venue = 'Venue is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'
    if (!formData.price || formData.price < 0) newErrors.price = 'Valid price is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.maxCapacity || formData.maxCapacity < 1) newErrors.maxCapacity = 'Valid capacity is required'

    // Validate date is in the future
    if (formData.date) {
      const eventDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (eventDate < today) {
        newErrors.date = 'Event date must be in the future'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const buildPreviewEvent = () => ({
    id: -1,
    title: formData.title || 'Untitled event',
    category: formData.category,
    location: formData.location || 'Location TBC',
    venue: formData.venue || 'Venue TBC',
    date: formData.date || new Date().toISOString().split('T')[0],
    time: formData.time || '21:00',
    price: formData.price ? parseFloat(formData.price) : 0,
    currency: formData.currency,
    image: formData.image || 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    description: formData.description || 'Description coming soon.',
    attendees: 0,
    maxCapacity: formData.maxCapacity ? parseInt(formData.maxCapacity, 10) : 0,
    tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(Boolean) : []
  })

  const buildEventPayload = (events) => {
    const nextId = Math.max(...events.map(e => e.id), 0) + 1
    const preview = buildPreviewEvent()

    return {
      ...preview,
      id: nextId,
      promoterId: user?.id,
      promoterName: `${user?.firstName} ${user?.lastName}`
    }
  }

  const saveDraft = () => {
    const draftKey = `eventDraft_${user?.id}`
    localStorage.setItem(draftKey, JSON.stringify(formData))
    showToast('Draft saved successfully', 'success')
  }

  const handleContinue = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error')
      return
    }

    setShowPreview(true)
    showToast('Preview ready. Confirm to create.', 'success')
  }

  const handleCreate = async () => {
    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error')
      setShowPreview(false)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:8000/events')
      const data = await response.json()
      const events = Array.isArray(data) ? data : data.events || []

      const newEvent = buildEventPayload(events)

      const createResponse = await fetch('http://localhost:8000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent)
      })

      if (!createResponse.ok) {
        throw new Error('Failed to create event')
      }

      const draftKey = `eventDraft_${user?.id}`
      localStorage.removeItem(draftKey)
      
      // Show success modal
      setCreationSuccess(true)
      setShowResultModal(true)

      // Redirect to dashboard after modal closes
      setTimeout(() => {
        navigate('/dashboard')
      }, 2600) // Slightly longer than modal timeout
    } catch (error) {
      console.error('Error creating event:', error)
      // Show failure modal
      setCreationSuccess(false)
      setShowResultModal(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResultModalClose = () => {
    setShowResultModal(false)
    if (creationSuccess) {
      navigate('/dashboard')
    }
  }

  return (
    <>
      <div className="min-h-screen bg-primary -mt-16 pt-16">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center text-gray-400 hover:text-primary transition mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </button>
            {!showPreview && (
              <>
                <h1 className="text-4xl font-bold text-primary mb-2">Create New Event</h1>
                <p className="text-gray-400">Fill in the details to create your electronic music event</p>
              </>
            )}
          </div>

          {/* Form or Preview */}
          <div className="bg-card rounded-2xl p-8 border border-primary">
            {showPreview ? (
              <CreateEventPreview
                formData={formData}
                onEdit={() => setShowPreview(false)}
                onConfirm={handleCreate}
                isSubmitting={isSubmitting}
              />
            ) : (
            <form onSubmit={handleContinue} className="space-y-6">
              {/* Event Title */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Event Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-primary border ${
                    errors.title ? 'border-red-500' : 'border-primary'
                  } text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  placeholder="e.g., Techno Underground - Berlin Edition"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              {/* Category and Currency Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-primary border border-primary text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Currency *
                  </label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-primary border border-primary text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {currencies.map(curr => (
                      <option key={curr} value={curr}>{curr}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location and Venue Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-primary border ${
                      errors.location ? 'border-red-500' : 'border-primary'
                    } text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder="e.g., Berlin, Germany"
                  />
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Venue *
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-primary border ${
                      errors.venue ? 'border-red-500' : 'border-primary'
                    } text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder="e.g., Berghain"
                  />
                  {errors.venue && <p className="text-red-500 text-sm mt-1">{errors.venue}</p>}
                </div>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-primary border ${
                      errors.date ? 'border-red-500' : 'border-primary'
                    } text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-primary border ${
                      errors.time ? 'border-red-500' : 'border-primary'
                    } text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  />
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>
              </div>

              {/* Price and Capacity Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Ticket Price *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className={`w-full px-4 py-3 rounded-lg bg-primary border ${
                      errors.price ? 'border-red-500' : 'border-primary'
                    } text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder="e.g., 20"
                  />
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Max Capacity *
                  </label>
                  <input
                    type="number"
                    name="maxCapacity"
                    value={formData.maxCapacity}
                    onChange={handleChange}
                    min="1"
                    className={`w-full px-4 py-3 rounded-lg bg-primary border ${
                      errors.maxCapacity ? 'border-red-500' : 'border-primary'
                    } text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder="e.g., 1500"
                  />
                  {errors.maxCapacity && <p className="text-red-500 text-sm mt-1">{errors.maxCapacity}</p>}
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Event Image URL
                  <span className="text-gray-400 text-xs font-normal ml-2">(Optional - will use default if empty)</span>
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-primary border border-primary text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="https://images.unsplash.com/photo-..."
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-primary border ${
                    errors.description ? 'border-red-500' : 'border-primary'
                  } text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none`}
                  placeholder="Describe your event, what attendees can expect, special features, etc."
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Tags
                  <span className="text-gray-400 text-xs font-normal ml-2">(Optional - comma separated)</span>
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-primary border border-primary text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="e.g., techno, underground, berlin, nightlife"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-card-hover transition"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveDraft}
                  className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-500 font-semibold hover:bg-cyan-500/10 transition"
                  disabled={isSubmitting}
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Preparing preview...' : 'Preview & Continue'}
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <EventCreationResultModal
        isOpen={showResultModal}
        success={creationSuccess}
        onClose={handleResultModalClose}
      />
    </>
  )
}

export default CreateEventPage
