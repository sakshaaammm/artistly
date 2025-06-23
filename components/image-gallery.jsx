"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Singer performing on stage",
    category: "Singers",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Dancers in performance",
    category: "Dancers",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "DJ performing at event",
    category: "DJs",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Speaker at conference",
    category: "Speakers",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Female vocalist",
    category: "Singers",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Dance group performance",
    category: "Dancers",
  },
]

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Artists in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See our talented performers bringing joy and entertainment to events worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gray-200 overflow-hidden" onClick={() => setSelectedImage(image.src)}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm font-medium text-purple-600">{image.category}</p>
                <p className="text-gray-600 text-sm mt-1">{image.alt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
