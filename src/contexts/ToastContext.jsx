import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'

const ToastContext = createContext()

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const addToast = useCallback((message, type = 'default') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
    }, 3000)
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className={`fixed right-4 z-[51] flex flex-col gap-2 ${isScrolled ? 'top-4' : 'top-20'}`}>
        {toasts.map((toast, index) => {
          const bgColor = toast.type === 'success' ? 'bg-emerald-600/90' : toast.type === 'error' ? 'bg-rose-600/90' : 'bg-slate-900/90'
          return (
            <div
              key={toast.id}
              className="animate-in fade-in slide-in-from-top-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`rounded-lg ${bgColor} px-6 py-3 text-white shadow-lg`}>
                {toast.message}
              </div>
            </div>
          )
        })}
      </div>
    </ToastContext.Provider>
  )
}
