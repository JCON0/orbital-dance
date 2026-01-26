import React, { useEffect } from 'react'

const EventCreationResultModal = ({ isOpen, success, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 2500) // 2.5 seconds before auto-closing
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="mx-4 rounded-2xl bg-card border border-primary p-8 shadow-2xl max-w-sm w-full animate-fade-in">
        {success ? (
          <>
            {/* Success State */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                <svg className="h-10 w-10 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-primary mb-2">Event Created!</h2>
            <p className="text-center text-gray-400 mb-6">
              Your event has been successfully published and is now live.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>Redirecting to dashboard...</span>
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Failure State */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-red-500 to-red-600">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-primary mb-2">Creation Failed</h2>
            <p className="text-center text-gray-400 mb-6">
              We encountered an issue creating your event. Please try again.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>Returning to form...</span>
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="h-2 w-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-2 w-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default EventCreationResultModal
