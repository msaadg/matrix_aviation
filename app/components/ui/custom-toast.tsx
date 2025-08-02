'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export interface ToastData {
  id: string
  message: string
  type: 'success' | 'error'
  duration?: number
}

interface CustomToastProps {
  toast: ToastData
  onClose: (id: string) => void
}

export function CustomToast({ toast, onClose }: CustomToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onClose(toast.id), 300) // Wait for animation to complete
    }, toast.duration || 5000)

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose(toast.id), 300)
  }

  return (
    <div
      className={`flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-gray-50 divide-x divide-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
      role="alert"
    >
      {toast.type === 'success' ? (
        <svg 
          className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 18 20"
        >
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
          />
        </svg>
      ) : (
        <svg 
          className="w-5 h-5 text-red-600 dark:text-red-500" 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 20 20"
        >
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )}
      <div className="ps-4 text-sm font-normal flex-1">
        {toast.message}
      </div>
      <button
        onClick={handleClose}
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Close"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  )
}
