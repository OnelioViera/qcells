/**
 * Strapi API Utilities
 * Fetch data from Strapi CMS backend
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

/**
 * Fetch data from Strapi API
 * @param path - API endpoint path (e.g., '/api/projects')
 * @param options - Fetch options
 * @param draft - Include draft/unpublished content (for preview mode)
 */
async function fetchAPI(path: string, options: RequestInit = {}, draft: boolean = false) {
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store', // Disable cache for development
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }

  // Add publicationState parameter for draft content
  const separator = path.includes('?') ? '&' : '?'
  const draftParam = draft ? `${separator}publicationState=preview` : ''
  const url = `${STRAPI_URL}${path}${draftParam}`
  
  try {
    const response = await fetch(url, mergedOptions)
    
    if (!response.ok) {
      console.error(`Strapi API error: ${response.status} at ${url}`)
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching from Strapi:', error)
    throw error
  }
}

/**
 * Get all projects with populated relations
 */
export async function getProjects() {
  return fetchAPI('/api/projects?populate=*')
}

/**
 * Get a single project by slug
 */
export async function getProject(slug: string) {
  return fetchAPI(`/api/projects?filters[slug][$eq]=${slug}&populate[heroImage]=true&populate[manufacturing_steps][populate][0]=images`)
}

/**
 * Get all beam types
 */
export async function getBeamTypes() {
  return fetchAPI('/api/beam-types?populate=*')
}

/**
 * Get a single beam type by ID
 */
export async function getBeamType(id: string) {
  return fetchAPI(`/api/beam-types/${id}?populate=*`)
}

/**
 * Get all manufacturing steps
 */
export async function getManufacturingSteps() {
  return fetchAPI('/api/manufacturing-steps?populate=*&sort=stepNumber:asc')
}

/**
 * Get all rebar configurations
 */
export async function getRebarConfigs() {
  return fetchAPI('/api/rebar-configs?populate=*')
}

/**
 * Get all technical specifications
 */
export async function getTechnicalSpecs() {
  return fetchAPI('/api/technical-specs?populate=*')
}

/**
 * Get homepage content (Single Type)
 */
export async function getHomepage() {
  return fetchAPI('/api/homepage?populate[companyLogos1][populate][0]=logo&populate[heroImage]=true&populate[heroBackgroundImage]=true')
}

/**
 * Get global content (Single Type)
 */
export async function getGlobal() {
  return fetchAPI('/api/global?populate[lindsayLogo]=true')
}

/**
 * Helper function to get image URL from Strapi media
 */
export function getStrapiMedia(url: string | null | undefined) {
  if (!url) return null
  
  // If it's a full URL, return as is
  if (url.startsWith('http')) return url
  
  // Otherwise, prepend the Strapi URL
  return `${STRAPI_URL}${url}`
}

/**
 * Format Strapi date
 */
export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

