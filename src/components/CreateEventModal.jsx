import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useToast } from '../contexts/ToastContext'

const CreateEventModal = ({ onClose, onEventCreated }) => {
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

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    'Techno', 'House', 'Trance', 'Drum & Bass', 
    'Dubstep', 'Hardstyle', 'Progressive', 'Psytrance'
  ]

  const currencies = ['EUR', 'USD', 'GBP', 'CHF', 'AUD']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error')
      return
    }

    setIsSubmitting(true)

    try {
      // Fetch current events
      const response = await fetch('http://localhost:8001/events')
      const data = await response.json()
      const events = data.events || data

      // Create new event object
      const newEvent = {
        id: Math.max(...events.map(e => e.id), 0) + 1,
        title: formData.title,
        category: formData.category,
        location: formData.location,
        venue: formData.venue,
        date: formData.date,
        time: formData.time,
        price: parseFloat(formData.price),
        currency: formData.currency,
        image: formData.image || 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        description: formData.description,
        attendees: 0,
        maxCapacity: parseInt(formData.maxCapacity),
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : [],
        promoterId: user?.id,
        promoterName: `${user?.firstName} ${user?.lastName}`
      }

      // Update events in db
      const updatedEvents = [...events, newEvent]
      
      await fetch('http://localhost:8001/events', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ events: updatedEvents })
      })

      showToast('Event created successfully!', 'success')
      onEventCreated?.(newEvent)
      onClose()
    } catch (error) {
      console.error('Error creating event:', error)
      showToast('Failed to create event. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary">
        <div className="sticky top-0 bg-card border-b border-primary p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">Create New Event</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-primary transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
              rows={4}
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
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-card-hover transition"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEventModal
