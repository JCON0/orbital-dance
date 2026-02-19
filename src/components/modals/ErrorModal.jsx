import React, { useEffect } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'

const ErrorModal = ({ isOpen, title, message, onClose, autoCloseDelay = 0 }) => {
  useEffect(() => {
    if (isOpen && autoCloseDelay > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, autoCloseDelay)
      return () => clearTimeout(timer)
    }
  }, [isOpen, autoCloseDelay, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="mx-4 rounded-2xl bg-card border border-primary p-8 shadow-2xl max-w-sm w-full">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-red-500 to-red-600">
            <HiOutlineExclamationCircle className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Title and Message */}
        <h2 className="text-2xl font-bold text-center text-primary mb-2">
          {title || 'Something Went Wrong'}
        </h2>
        <p className="text-center text-gray-400 mb-6">
          {message || 'An unexpected error occurred. Please try again.'}
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}

export default ErrorModal
