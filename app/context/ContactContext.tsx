'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getContactInfo } from '@/app/lib/sanity-service'
import { Contact } from '@/app/lib/types'

interface ContactContextType {
  contact: Contact | null
  loading: boolean
  error: string | null
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [contact, setContact] = useState<Contact | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const fetchContact = async () => {
      try {
        setLoading(true)
        setError(null)
        const contactData = await getContactInfo()
        
        if (mounted) {
          setContact(contactData)
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch contact info')
          console.error('Error fetching contact info:', err)
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchContact()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <ContactContext.Provider value={{ contact, loading, error }}>
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext)
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider')
  }
  return context
}
