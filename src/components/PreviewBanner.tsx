import { draftMode } from 'next/headers'
import Link from 'next/link'

export async function PreviewBanner() {
  const { isEnabled } = await draftMode()

  if (!isEnabled) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-yellow-500 text-black py-3 px-6 z-50 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <strong>Preview Mode:</strong>
        <span>You are viewing draft/unpublished content</span>
      </div>
      <Link
        href="/api/disable-preview"
        className="px-4 py-2 bg-black text-yellow-500 rounded font-semibold hover:bg-gray-800 transition"
      >
        Exit Preview
      </Link>
    </div>
  )
}

