'use client'
import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import { Button } from './button'

interface DownloadButtonProps {
  url: string
  filename?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  children?: React.ReactNode
}

export function DownloadButton({ 
  url, 
  filename, 
  variant = 'outline', 
  size = 'lg',
  className,
  children 
}: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (!url || isDownloading) return

    setIsDownloading(true)
    
    try {
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error('Download failed')
      }

      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = filename || 'download'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error('Download error:', error)
      // You could add toast notification here
      alert('Download failed. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button 
      variant={variant} 
      size={size}
      className={className}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? (
        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
      ) : (
        <Download className="mr-2 w-5 h-5" />
      )}
      {isDownloading ? 'Downloading...' : (children || 'Datasheet')}
    </Button>
  )
}
