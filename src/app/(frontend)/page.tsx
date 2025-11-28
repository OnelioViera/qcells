import Link from 'next/link'
import Image from 'next/image'
import { getHomepage, getStrapiMedia } from '@/lib/strapi'
import type { Homepage } from '@/lib/types'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { renderRichText } from '@/lib/richtext'

async function getHomepageData() {
  try {
    const response = await getHomepage()
    return response.data || null
  } catch (error) {
    console.error('Error fetching homepage:', error)
    return null
  }
}

export default async function HomePage() {
  const homepage = await getHomepageData()

  // Fallback content if CMS not configured yet
  const heroTitle = homepage?.heroTitle || 'Tesla Megapack 2'
  const heroSubtitle = homepage?.heroSubtitle || 'Grade Beams'
  const heroDescription = homepage?.heroDescription || 
    "Custom precast concrete foundation beams engineered and manufactured for QCELL's Tesla Megapack 2 battery energy storage systems"
  
  const partnersTitle = homepage?.partnersTitle || ''
  const partnersSubtitle = homepage?.partnersSubtitle || ''
  
  const stat1Value = homepage?.stat1Value || '69'
  const stat1Label = homepage?.stat1Label || 'Total Beams Manufactured'
  const stat2Value = homepage?.stat2Value || '354.5"'
  const stat2Label = homepage?.stat2Label || 'Maximum Beam Length'
  const stat3Value = homepage?.stat3Value || '4500'
  const stat3Label = homepage?.stat3Label || 'PSI Concrete Strength'

  const heroImageUrl = homepage?.heroImage?.url 
    ? getStrapiMedia(homepage.heroImage.url) 
    : null

  // Get Lindsay Precast logo from company logos
  const lindsayLogo = homepage?.companyLogos1?.find(
    (company: any) => company.name?.toLowerCase().includes('lindsay')
  )
  const lindsayLogoUrl = lindsayLogo?.logo?.url 
    ? getStrapiMedia(lindsayLogo.logo.url) 
    : null

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar 
        rightContent={
          <Link 
            href="/projects" 
            className="px-6 py-2.5 bg-lindsay-red hover:bg-lindsay-red-700 text-white rounded font-semibold transition text-sm shadow-md hover:shadow-lg"
          >
            Explore the Process
          </Link>
        }
      />

      {/* Main Content */}
      <main className="flex-1">
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-lindsay-navy">
            {heroTitle}
            <br />
            <span className="text-lindsay-red">{heroSubtitle}</span>
          </h1>

          <div className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {homepage?.heroDescription ? renderRichText(homepage.heroDescription) : heroDescription}
          </div>

          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-lindsay-red hover:bg-lindsay-red-700 text-white rounded font-semibold transition shadow-md hover:shadow-lg"
          >
            Explore the Process →
          </Link>

          {/* Hero Image */}
          {heroImageUrl && (
            <div className="mt-16 relative">
              <Image
                src={heroImageUrl}
                alt={heroTitle}
                width={1200}
                height={600}
                className="rounded-lg shadow-2xl border border-gray-200"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Company Logos Section */}
      {homepage?.companyLogos1 && homepage.companyLogos1.length > 0 && (
        <section className="py-12 px-6 border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto">
            {partnersTitle && <h2 className="text-2xl font-bold mb-2 text-center text-lindsay-navy">{partnersTitle}</h2>}
            {partnersSubtitle && <p className="text-center text-gray-600 mb-8">{partnersSubtitle}</p>}
            {!partnersTitle && !partnersSubtitle && <div className="mb-8"></div>}
            <div className="flex flex-wrap justify-center items-center gap-12">
              {homepage.companyLogos1.map((company: any, index: number) => {
                const logoUrl = company.logo ? getStrapiMedia(company.logo.url) : null
                const companyUrl = company.url
                
                if (!logoUrl) return null

                const logoImage = (
                  <Image
                    src={logoUrl}
                    alt={company.name || company.logo?.alternativeText || `Partner logo ${index + 1}`}
                    width={160}
                    height={80}
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                )

                return (
                  <div key={company.id || index} className="relative w-48 h-32 flex items-center justify-center bg-white rounded-lg hover:shadow-md transition-all border border-gray-200">
                    {companyUrl ? (
                      <a 
                        href={companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full"
                      >
                        {logoImage}
                      </a>
                    ) : (
                      logoImage
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Quick Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-lindsay-navy">Our Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-hover bg-gray-50 border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow hover:border-lindsay-red">
              <div className="text-4xl font-bold text-lindsay-red mb-2">{stat1Value}</div>
              <p className="text-gray-700">{stat1Label}</p>
            </div>
            
            <div className="card-hover bg-gray-50 border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow hover:border-lindsay-navy">
              <div className="text-4xl font-bold text-lindsay-navy mb-2">{stat2Value}</div>
              <p className="text-gray-700">{stat2Label}</p>
            </div>
            
            <div className="card-hover bg-gray-50 border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow hover:border-lindsay-red">
              <div className="text-4xl font-bold text-lindsay-red mb-2">{stat3Value}</div>
              <p className="text-gray-700">{stat3Label}</p>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-lindsay-navy">Ready to Learn More?</h2>
          <p className="text-gray-600 mb-8">
            Explore our detailed project documentation and technical specifications
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/projects"
              className="px-6 py-3 bg-lindsay-red hover:bg-lindsay-red-700 text-white rounded font-semibold transition shadow-md hover:shadow-lg"
            >
              Explore the Process
            </Link>
            <a 
              href="/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white hover:bg-gray-50 text-lindsay-navy border border-lindsay-navy rounded font-semibold transition shadow-md hover:shadow-lg"
            >
              Admin Login
            </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

