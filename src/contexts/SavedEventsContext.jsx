import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'

const SavedEventsContext = createContext()

export const useSavedEvents = () => {
  const context = useContext(SavedEventsContext)
  if (!context) {
    throw new Error('useSavedEvents must be used within a SavedEventsProvider')
  }
  return context
}

export const SavedEventsProvider = ({ children }) => {
  const { user } = useAuth()
  const [savedEventIds, setSavedEventIds] = useState([])

  // Load saved events from localStorage on mount and when user changes
  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(`saved-events-${user.id}`)
      if (stored) {
        try {
          setSavedEventIds(JSON.parse(stored))
        } catch (e) {
          console.error('Failed to parse saved events:', e)
          setSavedEventIds([])
        }
      } else {
        setSavedEventIds([])
      }
    } else {
      setSavedEventIds([])
    }
  }, [user])

  const toggleSavedEvent = (eventId) => {
    if (!user) return

    setSavedEventIds(prev => {
      const updated = prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
      
      localStorage.setItem(`saved-events-${user.id}`, JSON.stringify(updated))
      return updated
    })
  }

  const isSaved = (eventId) => savedEventIds.includes(eventId)

  const value = {
    savedEventIds,
    toggleSavedEvent,
    isSaved
  }

  return (
    <SavedEventsContext.Provider value={value}>
      {children}
    </SavedEventsContext.Provider>
  )
}
