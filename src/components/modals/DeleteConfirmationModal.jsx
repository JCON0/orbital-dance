import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

const DeleteConfirmationModal = ({ isOpen, eventTitle, onConfirm, onCancel, isLoading }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="mx-4 w-full max-w-sm rounded-xl bg-card border border-primary shadow-lg z-51">
        <div className="p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-900/30">
            <HiOutlineTrash className="h-6 w-6 text-red-400" />
          </div>
          
          <h3 className="text-lg font-bold text-primary mb-2">Delete Event</h3>
          <p className="text-secondary mb-6">
            Are you sure you want to delete <span className="font-semibold text-primary">"{eventTitle}"</span>? This action cannot be undone.
          </p>

          <div className="flex gap-3">
            <button
              onClick={onCancel}
              disabled={isLoading}
              className="flex-1 rounded-lg border border-primary px-4 py-2 font-semibold text-primary transition hover:bg-card-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="flex-1 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25" />
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Deleting...
                </>
              ) : (
                'Delete Event'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmationModal
