'use client'

import { useEffect } from 'react'

export default function AdminRedirect() {
  useEffect(() => {
    // Redirect to Strapi admin panel
    window.location.href = process.env.NEXT_PUBLIC_STRAPI_URL 
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/admin`
      : 'http://localhost:1337/admin'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="mb-6">
          <div className="inline-block">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-2xl mb-4">
              LP
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Redirecting to Admin Panel...</h1>
        <p className="text-slate-400">
          Taking you to the Strapi CMS admin panel
        </p>
        <div className="mt-8">
          <div className="inline-flex gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        <p className="text-slate-500 text-sm mt-8">
          If you're not redirected, <a href="http://localhost:1337/admin" className="text-blue-400 hover:underline">click here</a>
        </p>
      </div>
    </div>
  )
}

