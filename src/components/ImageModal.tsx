'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageModalProps {
  images: Array<{ src: string; alt: string }>
  initialIndex?: number
  thumbnailClassName?: string
}

export function ImageModal({ images, initialIndex = 0, thumbnailClassName }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const currentImage = images[currentIndex]
  const hasMultipleImages = images.length > 1

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = () => {
    setCurrentIndex(initialIndex)
    setIsOpen(true)
  }

  return (
    <>
      {/* Thumbnail - Clickable */}
      <div 
        className={`relative cursor-pointer group ${thumbnailClassName}`}
        onClick={openModal}
      >
        <Image
          src={images[initialIndex].src}
          alt={images[initialIndex].alt}
          fill
          className="object-contain group-hover:opacity-80 transition-opacity"
        />
        {/* Hover overlay with text */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="text-center">
            <span className="text-white font-semibold text-sm px-3 py-1 bg-blue-600 rounded block">
              Click to enlarge
            </span>
            {hasMultipleImages && (
              <span className="text-white text-xs mt-2 block">
                {images.length} images
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modal/Lightbox with Gallery */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold z-10"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>

          {/* Previous button */}
          {hasMultipleImages && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-5xl font-bold z-10 bg-black/50 rounded-full w-16 h-16 flex items-center justify-center"
              onClick={goToPrevious}
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div className="relative w-full h-full max-w-7xl max-h-screen" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Next button */}
          {hasMultipleImages && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-5xl font-bold z-10 bg-black/50 rounded-full w-16 h-16 flex items-center justify-center"
              onClick={goToNext}
            >
              ›
            </button>
          )}

          {/* Image counter */}
          {hasMultipleImages && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  )
}

