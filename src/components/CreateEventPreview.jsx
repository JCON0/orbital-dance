import React from 'react'
import EventCard from './EventCard'

const CreateEventPreview = ({ formData, onEdit, onConfirm, isSubmitting }) => {
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">Review Your Event</h2>
        <p className="text-gray-400">Double-check all details before publishing your event</p>
      </div>

      {/* Preview Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Event Details */}
        <div className="rounded-2xl border border-primary bg-primary/40 p-6">
          <h3 className="text-xl font-semibold text-primary mb-4">Event Information</h3>
          <dl className="space-y-3 text-primary">
            <div className="flex justify-between">
              <dt className="text-gray-400">Title</dt>
              <dd className="font-semibold">{formData.title || 'Untitled event'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-400">Category</dt>
              <dd className="font-semibold">{formData.category}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-400">Location</dt>
              <dd className="font-semibold">{formData.location || 'Location TBC'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-400">Venue</dt>
              <dd className="font-semibold">{formData.venue || 'Venue TBC'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-400">Date & Time</dt>
              <dd className="font-semibold">{formData.date || 'TBD'} at {formData.time || 'TBD'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-400">Price</dt>
              <dd className="font-semibold">{formData.price ? `${formData.currency} ${formData.price}` : 'Free / not set'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-400">Capacity</dt>
              <dd className="font-semibold">{formData.maxCapacity || 'Not set'}</dd>
            </div>
            {formData.tags && (
              <div className="flex justify-between">
                <dt className="text-gray-400">Tags</dt>
                <dd className="font-semibold text-right max-w-[60%]">{formData.tags}</dd>
              </div>
            )}
          </dl>
          {formData.description && (
            <div className="mt-4 pt-4 border-t border-primary">
              <dt className="text-gray-400 mb-2">Description</dt>
              <dd className="text-primary text-sm">{formData.description}</dd>
            </div>
          )}
        </div>

        {/* Card Preview */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">How it will appear</h3>
          <div className="max-w-md w-full mx-auto">
            <EventCard event={buildPreviewEvent()} />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          onClick={onEdit}
          className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-card-hover transition"
          disabled={isSubmitting}
        >
          Edit Information
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating Event...' : 'Confirm & Create'}
        </button>
      </div>
    </div>
  )
}

export default CreateEventPreview
