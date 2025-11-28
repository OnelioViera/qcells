import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const contentType = searchParams.get('contentType')

  // Check the secret and next parameters
  if (secret !== process.env.STRAPI_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // Enable Draft Mode
  const draft = await draftMode()
  draft.enable()

  // Redirect to the appropriate page based on content type
  if (contentType === 'project' && slug) {
    redirect(`/projects/${slug}`)
  } else if (contentType === 'homepage') {
    redirect('/')
  } else {
    redirect('/')
  }
}

