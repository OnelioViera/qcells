import Link from 'next/link'
import Image from 'next/image'
import { getGlobal, getFooter, getStrapiMedia } from '@/lib/strapi'

export async function Footer() {
  // Fetch global data to get Lindsay logo and footer content
  const global = await getGlobal()
  
  // Try to fetch footer data, but don't crash if it doesn't exist yet
  let footerData = null
  try {
    footerData = await getFooter()
  } catch (error) {
    console.log('Footer content type not yet available in Strapi, using defaults')
  }
  
  const lindsayLogoUrl = global?.data?.lindsayLogo?.url 
    ? getStrapiMedia(global.data.lindsayLogo.url) 
    : null
  
  const siteName = global?.data?.siteName || 'Lindsay Precast'
  const currentYear = new Date().getFullYear()
  
  // Footer content from Strapi (with fallbacks)
  const footer = footerData?.data || {}
  const linkedinUrl = footer.linkedinUrl || 'https://www.linkedin.com/company/lindsay-precast'
  const facebookUrl = footer.facebookUrl || 'https://www.facebook.com/lindsayprecast'
  const sinceBadgeText = footer.sinceBadgeText || 'SINCE 1961'
  const copyrightText = footer.copyrightText || 'Lindsay Precast'
  const designerText = footer.designerText || 'Designed by OJV Webdesign'
  const designerUrl = footer.designerUrl || 'https://ojvwebdesign.com'
  
  // Certification logos
  const npcaLogoUrl = footer.npcaLogo?.url 
    ? getStrapiMedia(footer.npcaLogo.url) 
    : null
  const pciLogoUrl = footer.pciLogo?.url 
    ? getStrapiMedia(footer.pciLogo.url) 
    : null

  return (
    <footer className="bg-lindsay-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              {lindsayLogoUrl ? (
                <Image
                  src={lindsayLogoUrl}
                  alt="Lindsay Precast"
                  width={200}
                  height={60}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center font-bold text-lindsay-navy">
                    LP
                  </div>
                  <span className="font-bold text-xl">{siteName}</span>
                </div>
              )}
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 text-sm">
            <Link href="/" className="hover:text-lindsay-red transition">
              Home
            </Link>
            <Link href="/projects" className="hover:text-lindsay-red transition">
              Projects
            </Link>
          </div>
            
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>

          {/* Since Badge */}
          <div className="flex-shrink-0 px-4 py-2 border-2 border-white rounded text-sm font-bold">
            {sinceBadgeText}
          </div>

          {/* Certification Logos */}
          {(npcaLogoUrl || pciLogoUrl) && (
            <div className="flex gap-4 items-center">
              {npcaLogoUrl && (
                <div className="bg-white rounded px-3 py-2">
                  <Image
                    src={npcaLogoUrl}
                    alt="NPCA Certified Plant"
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              )}
              {pciLogoUrl && (
                <div className="bg-white rounded px-3 py-2">
                  <Image
                    src={pciLogoUrl}
                    alt="PCI Precast Concrete Institute"
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span>© {currentYear} {copyrightText}</span>
              <span className="hidden md:inline">|</span>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="/terms" className="hover:text-white transition">
                Supplier Terms & Conditions
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="/code-of-conduct" className="hover:text-white transition">
                Supplier Code of Conduct
              </Link>
            </div>
            <div className="text-xs">
              <a 
                href={designerUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition"
              >
                {designerText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

