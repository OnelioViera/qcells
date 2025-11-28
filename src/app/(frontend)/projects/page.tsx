import Link from 'next/link'
import { getProjects as fetchProjects, getStrapiMedia } from '@/lib/strapi'
import type { Project, StrapiEntity } from '@/lib/types'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

async function getProjects(): Promise<StrapiEntity<Project>[]> {
  try {
    const response = await fetchProjects()
    return response.data || []
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar 
        rightContent={
          <Link 
            href="/" 
            className="text-sm text-slate-700 hover:text-slate-900 font-medium transition"
          >
            Home
          </Link>
        }
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Projects Section */}
        <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Our Projects</h1>
          <p className="text-gray-600 mb-12">
            Explore our portfolio of precision-engineered precast concrete projects
          </p>

          {projects.length === 0 ? (
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-12 text-center">
              <div className="mb-4">
                <svg 
                  className="w-16 h-16 text-gray-400 mx-auto" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">No Projects Yet</h3>
              <p className="text-gray-600 mb-6">
                Get started by adding your first project in the admin panel
              </p>
              <Link 
                href="/admin"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition shadow-md"
              >
                Go to Admin Panel →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => {
                const imageUrl = project.heroImage?.url
                  ? getStrapiMedia(project.heroImage.url)
                  : null

                // Extract text from rich text description
                const descriptionText = project.description?.[0]?.children?.[0]?.text || ''

                return (
                  <Link 
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    className="card-hover bg-white border border-gray-200 rounded-lg overflow-hidden group hover:shadow-xl transition-shadow"
                  >
                    {imageUrl && (
                      <div className="relative h-48 bg-gray-100">
                        <Image
                          src={imageUrl}
                          alt={project.title || 'Project image'}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-3">
                        {project.featured && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                            Featured
                          </span>
                        )}
                        {project.projectStatus && (
                          <span className={`px-2 py-1 text-xs font-semibold rounded ${
                            project.projectStatus === 'active' ? 'bg-green-100 text-green-700' :
                            project.projectStatus === 'completed' ? 'bg-purple-100 text-purple-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {project.projectStatus.charAt(0).toUpperCase() + project.projectStatus.slice(1)}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                      {descriptionText && (
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {descriptionText}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <span>Customer: <strong className="text-gray-700">{project.customer}</strong></span>
                        {project.totalQuantity && project.totalQuantity > 0 && (
                          <>
                            <span>•</span>
                            <span>Qty: <strong className="text-gray-700">{project.totalQuantity}</strong></span>
                          </>
                        )}
                      </div>
                      <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

