'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, AlertCircle, Info } from 'lucide-react'

type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: number
  message: string
  type: ToastType
}

let toastId = 0
const toasts: Toast[] = []
let listeners: ((toasts: Toast[]) => void)[] = []

export function toast(message: string, type: ToastType = 'info') {
  const id = toastId++
  const newToast: Toast = { id, message, type }
  toasts.push(newToast)
  listeners.forEach(listener => listener([...toasts]))
  
  setTimeout(() => {
    const index = toasts.findIndex(t => t.id === id)
    if (index !== -1) {
      toasts.splice(index, 1)
      listeners.forEach(listener => listener([...toasts]))
    }
  }, 5000)
}

export function Toaster() {
  const [activeToasts, setActiveToasts] = useState<Toast[]>([])

  useEffect(() => {
    const listener = (updatedToasts: Toast[]) => {
      setActiveToasts(updatedToasts)
    }
    listeners.push(listener)
    return () => {
      const index = listeners.indexOf(listener)
      if (index !== -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  const removeToast = (id: number) => {
    const index = toasts.findIndex(t => t.id === id)
    if (index !== -1) {
      toasts.splice(index, 1)
      setActiveToasts([...toasts])
    }
  }

  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <Check className="w-4 h-4" />
      case 'error':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Info className="w-4 h-4" />
    }
  }

  const getStyles = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'border-green-500 text-green-500'
      case 'error':
        return 'border-red-500 text-red-500'
      default:
        return 'border-luxe-gold text-luxe-gold'
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {activeToasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={`flex items-center gap-3 px-4 py-3 bg-white shadow-lg border ${getStyles(
              t.type
            )} backdrop-blur-sm min-w-[300px]`}
          >
            <span className="flex-shrink-0">{getIcon(t.type)}</span>
            <p className="text-sm text-luxe-charcoal flex-1">{t.message}</p>
            <button
              onClick={() => removeToast(t.id)}
              className="flex-shrink-0 text-luxe-slate hover:text-luxe-charcoal transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}