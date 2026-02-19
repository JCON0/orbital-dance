import React from 'react'
import { useToast } from '../../contexts/ToastContext'

const EventActions = ({ isSaved, onSave }) => {
  const { addToast } = useToast()

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      addToast('Link copied to clipboard!', 'success')
    } catch (err) {
      addToast('Failed to copy link', 'error')
    }
  }

  return (
    <div className="flex gap-4">
      <button className="flex-1 rounded-lg bg-linear-to-r from-cyan-400 to-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl hover:from-cyan-500 hover:to-cyan-700">
        RSVP to Event
      </button>
      <button 
        onClick={handleShare}
        className="rounded-lg border border-slate-700 px-6 py-4 text-slate-300 transition hover:bg-slate-800"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
      <button 
        onClick={onSave}
        className="rounded-lg border border-slate-700 px-6 py-4 text-slate-300 transition hover:bg-slate-800"
        aria-label={isSaved ? 'Remove from saved' : 'Save for later'}
      >
        {isSaved ? (
          <svg className="h-6 w-6 fill-red-500" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="h-6 w-6 stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default EventActions
