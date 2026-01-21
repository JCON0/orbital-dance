import React, { useEffect } from 'react'

const Toast = ({ message, type = 'default', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  const bgColor = type === 'success' ? 'bg-green-500/60' : type === 'error' ? 'bg-red-500/60' : 'bg-slate-900/60'

  return (
    <div className="fixed top-20 right-4 z-50 animate-in fade-in slide-in-from-top-2">
      <div className={`rounded-lg ${bgColor} px-6 py-3 text-white shadow-lg`}>
        {message}
      </div>
    </div>
  )
}

export default Toast
