import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineXMark } from 'react-icons/hi2'

const AuthPromptModal = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isOpen) return
    // Focus the dialog when opened
    const prevActive = document.activeElement
    dialogRef.current?.focus()
    return () => {
      // Restore focus to previous element when closing
      prevActive?.focus()
    }
  }, [isOpen])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose?.()
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.()
  }

  const goTo = (path) => {
    onClose?.()
    navigate(path)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={handleBackdropClick}
      aria-hidden="false"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-prompt-title"
        aria-describedby="auth-prompt-desc"
        tabIndex={-1}
        ref={dialogRef}
        onKeyDown={handleKeyDown}
        className="w-full max-w-md rounded-2xl border border-primary bg-card p-6 shadow-xl"
      >
        <div className="flex items-start justify-between">
          <h2 id="auth-prompt-title" className="text-xl font-semibold text-white">
            Sign in to save events
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-2 text-slate-400 hover:bg-slate-800"
          >
            <HiOutlineXMark className="h-5 w-5" />
          </button>
        </div>

        <p id="auth-prompt-desc" className="mt-3 text-sm text-slate-400">
          You need an account to save events and get notified about updates. Continue to sign in or create a free account.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => goTo('/sign-in')}
            className="flex-1 rounded-lg bg-linear-to-r from-cyan-400 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-cyan-500 hover:to-cyan-700"
          >
            Sign In
          </button>
          <button
            onClick={() => goTo('/sign-up')}
            className="flex-1 rounded-lg border border-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-4 text-center">
          <Link to="/events" className="text-xs text-slate-400 underline hover:text-slate-300" onClick={onClose}>
            Continue browsing events
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthPromptModal
