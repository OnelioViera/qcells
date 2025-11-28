import Link from 'next/link'
import Image from 'next/image'
import { getGlobal, getStrapiMedia } from '@/lib/strapi'

interface NavbarProps {
  rightContent?: React.ReactNode
}

export async function Navbar({ rightContent }: NavbarProps) {
  // Fetch global data to get Lindsay logo
  const global = await getGlobal()
  
  const lindsayLogoUrl = global?.data?.lindsayLogo?.url 
    ? getStrapiMedia(global.data.lindsayLogo.url) 
    : null
  
  const siteName = global?.data?.siteName || 'Lindsay Precast'

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {lindsayLogoUrl ? (
            <Image
              src={lindsayLogoUrl}
              alt="Lindsay Precast"
              width={280}
              height={70}
              className="h-16 w-auto object-contain"
            />
          ) : (
            <>
              <div className="w-12 h-12 bg-lindsay-navy rounded flex items-center justify-center font-bold text-white">
                LP
              </div>
              <span className="ml-3 text-xl font-bold text-lindsay-navy">{siteName}</span>
            </>
          )}
        </Link>
        <div className="flex items-center gap-6">
          {rightContent}
        </div>
      </div>
    </nav>
  )
}

