'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { CustomToast, ToastData } from './custom-toast'

interface ToastContextType {
  showToast: (message: string, type: 'success' | 'error', duration?: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const showToast = (message: string, type: 'success' | 'error', duration = 5000) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: ToastData = { id, message, type, duration }
    
    setToasts(prev => [...prev, newToast])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(toast => (
          <CustomToast
            key={toast.id}
            toast={toast}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useCustomToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useCustomToast must be used within a ToastProvider')
  }
  return context
}
