import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProject, getStrapiMedia } from '@/lib/strapi'
import type { Project, StrapiEntity } from '@/lib/types'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ImageModal } from '@/components/ImageModal'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

async function getProjectData(slug: string) {
  try {
    const response = await getProject(slug)
    if (!response.data || response.data.length === 0) {
      return null
    }
    return response.data[0]
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProjectData(slug)

  if (!project) {
    notFound()
  }

  const imageUrl = project.heroImage?.url
    ? getStrapiMedia(project.heroImage.url)
    : null

  // Extract text from rich text description
  const descriptionText = project.description?.[0]?.children?.[0]?.text || ''

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar 
        rightContent={
          <Link 
            href="/projects" 
            className="text-sm text-lindsay-navy hover:text-lindsay-red font-semibold transition"
          >
            ← All Projects
          </Link>
        }
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {imageUrl && (
            <div className="mb-12">
              <ImageModal
                images={[{
                  src: imageUrl,
                  alt: project.title || 'Project image'
                }]}
                initialIndex={0}
                thumbnailClassName="relative h-96 rounded-lg overflow-hidden bg-slate-100 cursor-pointer hover:opacity-95 transition-opacity"
              />
            </div>
          )}

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {project.featured && (
                <span className="px-3 py-1 bg-lindsay-red/10 text-lindsay-red text-sm font-semibold rounded">
                  Featured Project
                </span>
              )}
              {project.projectStatus && (
                <span className={`px-3 py-1 text-sm font-semibold rounded ${
                  project.projectStatus === 'active' ? 'bg-green-100 text-green-700' :
                  project.projectStatus === 'completed' ? 'bg-lindsay-navy/10 text-lindsay-navy' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {project.projectStatus.charAt(0).toUpperCase() + project.projectStatus.slice(1)}
                </span>
              )}
            </div>
            <h1 className="text-5xl font-bold mb-4 text-lindsay-navy">{project.title}</h1>
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="text-gray-600 text-sm mb-1">Customer</div>
              <div className="text-xl font-semibold text-lindsay-navy">{project.customer}</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="text-gray-600 text-sm mb-1">Fabricator</div>
              <div className="text-xl font-semibold text-lindsay-navy">{project.fabricator}</div>
            </div>
            {project.totalQuantity && project.totalQuantity > 0 && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="text-gray-600 text-sm mb-1">Total Quantity</div>
                <div className="text-xl font-semibold text-lindsay-navy">{project.totalQuantity} beams</div>
              </div>
            )}
          </div>

          {/* Beam Quantities */}
          {(project.centerBeams || project.endBeams || project.totalWeight) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {project.centerBeams && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="text-gray-600 text-sm mb-1">Center Beams</div>
                  <div className="text-xl font-semibold text-lindsay-navy">{project.centerBeams}</div>
                </div>
              )}
              {project.endBeams && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="text-gray-600 text-sm mb-1">End Beams</div>
                  <div className="text-xl font-semibold text-lindsay-navy">{project.endBeams}</div>
                </div>
              )}
              {project.totalWeight && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="text-gray-600 text-sm mb-1">Total Weight</div>
                  <div className="text-xl font-semibold text-lindsay-navy">{project.totalWeight.toLocaleString()} lbs</div>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          {descriptionText && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-lindsay-navy">Project Description</h2>
              <div className="text-gray-700 whitespace-pre-wrap">
                {descriptionText}
              </div>
            </div>
          )}

          {/* Manufacturing Steps */}
          {project.manufacturing_steps && Array.isArray(project.manufacturing_steps) && project.manufacturing_steps.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-lindsay-navy">Manufacturing Process</h2>
              <div className="space-y-6">
                {project.manufacturing_steps
                  .sort((a: any, b: any) => (a.stepNumber || 0) - (b.stepNumber || 0))
                  .map((step: any) => {
                    const stepDescription = step.description?.[0]?.children?.[0]?.text || ''
                    const stepImages = Array.isArray(step.images) ? step.images : []
                    
                    return (
                      <div 
                        key={step.id}
                        className="flex gap-6 items-start bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-lindsay-red rounded-lg flex items-center justify-center font-bold text-lg text-white">
                          {step.stepNumber || '?'}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold mb-2 text-lindsay-navy">{step.title || 'Step'}</h3>
                          {stepDescription && (
                            <p className="text-gray-700 mb-4">{stepDescription}</p>
                          )}
                          {step.duration && (
                            <div className="text-sm text-gray-600 mb-2">
                              <span className="font-semibold">Duration:</span> {step.duration}
                            </div>
                          )}
                          {step.equipment && (
                            <div className="text-sm text-gray-600 mb-2">
                              <span className="font-semibold">Equipment:</span> {step.equipment}
                            </div>
                          )}
                          {stepImages.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                              {(() => {
                                // Convert all step images to the format needed by ImageModal
                                const allStepImages = stepImages
                                  .filter(image => image && image.url)
                                  .map((image, idx) => ({
                                    src: getStrapiMedia(image.url) || '',
                                    alt: image.alternativeText || `Step ${step.stepNumber || '?'} image ${idx + 1}`
                                  }))
                                  .filter(img => img.src)

                                // Render thumbnails that all open the same gallery
                                return allStepImages.map((image, idx) => (
                                  <ImageModal
                                    key={idx}
                                    images={allStepImages}
                                    initialIndex={idx}
                                    thumbnailClassName="h-32 rounded overflow-hidden bg-slate-800"
                                  />
                                ))
                              })()}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          )}

          {/* Back to Projects */}
          <div className="pt-8">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-lindsay-navy hover:text-lindsay-red transition font-semibold"
            >
              ← Back to all projects
            </Link>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

