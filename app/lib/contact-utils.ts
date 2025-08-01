import { Contact, PhoneNumber, EmailAddress } from './types'

// Get primary phone number
export function getPrimaryPhone(contact: Contact | null): PhoneNumber | null {
  if (!contact || !contact.phones) return null
  return contact.phones.find(phone => phone.isPrimary) || contact.phones[0] || null
}

// Get primary email
export function getPrimaryEmail(contact: Contact | null): EmailAddress | null {
  if (!contact || !contact.emails) return null
  return contact.emails.find(email => email.isPrimary) || contact.emails[0] || null
}

// Get phone by label
export function getPhoneByLabel(contact: Contact | null, label: string): PhoneNumber | null {
  if (!contact || !contact.phones) return null
  return contact.phones.find(phone => phone.label === label) || null
}

// Get email by label
export function getEmailByLabel(contact: Contact | null, label: string): EmailAddress | null {
  if (!contact || !contact.emails) return null
  return contact.emails.find(email => email.label === label) || null
}

// Format address as string
export function formatAddress(contact: Contact | null): string {
  if (!contact || !contact.address) return ''
  
  const { street, city, state, postalCode, country } = contact.address
  return `${street}, ${city}, ${state}, Post code: ${postalCode} ${country}`
}

// Format address as multi-line HTML
export function formatAddressMultiline(contact: Contact | null): string {
  if (!contact || !contact.address) return ''
  
  const { street, city, state, postalCode, country } = contact.address
  return `${street}<br />${city}, ${state}<br />Post code: ${postalCode} ${country}`
}

// Get formatted phone link
export function getPhoneLink(phone: PhoneNumber | null): string {
  if (!phone) return '#'
  return `tel:${phone.number}`
}

// Get formatted email link
export function getEmailLink(email: EmailAddress | null): string {
  if (!email) return '#'
  return `mailto:${email.email}`
}

// Get social media links
export function getSocialLinks(contact: Contact | null) {
  if (!contact || !contact.socialMedia) {
    return {
      linkedin: '#',
      facebook: '#',
      instagram: '#',
      youtube: '#'
    }
  }
  
  return {
    linkedin: contact.socialMedia.linkedin || '#',
    facebook: contact.socialMedia.facebook || '#',
    instagram: contact.socialMedia.instagram || '#',
    youtube: contact.socialMedia.youtube || '#'
  }
}
