import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const fileId = searchParams.get('fileId')
    const filename = searchParams.get('filename')

    if (!fileId) {
      return NextResponse.json({ error: 'File ID is required' }, { status: 400 })
    }

    // Get the file asset from Sanity
    const fileAsset = await client.fetch(
      `*[_type == "sanity.fileAsset" && _id == $fileId][0]`,
      { fileId }
    )

    if (!fileAsset) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    // Fetch the file from Sanity's CDN
    const fileResponse = await fetch(fileAsset.url)
    
    if (!fileResponse.ok) {
      return NextResponse.json({ error: 'Failed to fetch file' }, { status: 500 })
    }

    const fileBuffer = await fileResponse.arrayBuffer()
    
    // Determine the content type and filename
    const contentType = fileAsset.mimeType || 'application/octet-stream'
    const downloadFilename = filename || fileAsset.originalFilename || 'download'

    // Return the file with appropriate headers for download
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${downloadFilename}"`,
        'Content-Length': fileBuffer.byteLength.toString(),
      },
    })
  } catch (error) {
    console.error('Error downloading file:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
