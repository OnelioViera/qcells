/**
 * TypeScript Types for Strapi CMS Data (Strapi 5)
 */

// Base Strapi response structure
export interface StrapiResponse<T> {
  data: T[]
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiSingleResponse<T> {
  data: T | null
}

// Base Strapi entity (Strapi 5 - flat structure)
export type StrapiEntity<T> = T & {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

// Media/Upload type (Strapi 5 - flat structure)
export interface StrapiMedia {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: any
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

// Project (Strapi 5 format)
export interface Project {
  title: string
  slug: string
  customer: string
  fabricator: string
  description: any // Rich text format
  totalQuantity?: number
  centerBeams?: number
  endBeams?: number
  totalWeight?: number
  interiorBeamWeight?: string
  pounds1?: number
  exteriorBeamWeight?: string
  pounds2?: number
  projectStatus?: 'draft' | 'active' | 'completed' | 'archived'
  featured?: boolean
  heroImage?: StrapiMedia | null
  beam_types?: StrapiEntity<BeamType>[]
  manufacturing_steps?: StrapiEntity<ManufacturingStep>[]
  rebar_configs?: StrapiEntity<RebarConfig>[]
  technical_specs?: StrapiEntity<TechnicalSpec>[]
}

// Beam Type
export interface BeamType {
  name: string
  type: 'center' | 'end'
  length?: number
  width?: number
  height?: number
  weight?: number
  description?: any
  technicalDrawing?: StrapiMedia | null
}

// Manufacturing Step
export interface ManufacturingStep {
  title: string
  stepNumber: number
  description?: any
  duration?: string
  equipment?: string
  images?: StrapiMedia[]
}

// Rebar Configuration
export interface RebarConfig {
  name: string
  barSize?: string
  spacing?: string
  cover?: string
  totalLinearFeet?: number
  drawings?: StrapiMedia[]
}

// Technical Specification
export interface TechnicalSpec {
  name: string
  category?: string
  value: string
  unit?: string
  standard?: string
}

// Company Logo (Component)
export interface CompanyLogo {
  id?: number
  name?: string
  logo?: StrapiMedia | null
  url?: string
}

// Homepage (Single Type)
export interface Homepage {
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  heroImage?: StrapiMedia | null
  heroBackgroundImage?: StrapiMedia | null
  companyLogos1?: CompanyLogo[]
  stat1Value: string
  stat1Label: string
  stat2Value: string
  stat2Label: string
  stat3Value: string
  stat3Label: string
}

// Global (Single Type)
export interface Global {
  siteName: string
  lindsayLogo?: StrapiMedia | null
  footerDescription: string
  copyrightText: string
}

