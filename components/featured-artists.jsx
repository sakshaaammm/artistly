"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Star, MapPin } from "lucide-react"
import Link from "next/link"
import { fetchFeaturedArtists } from "@/lib/api"

export function FeaturedArtists() {
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFeaturedArtists = async () => {
      try {
        const response = await fetchFeaturedArtists()
        if (response.success) {
          setArtists(response.data)
        }
      } catch (error) {
        console.error("Error fetching featured artists:", error)
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedArtists()
  }, [])

  const LoadingSkeleton = () => (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-square" />
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <Skeleton className="h-6 w-32 mb-1" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-24 mb-3" />
        <div className="flex gap-1 mb-4">
          <Skeleton className="h-6 w-12" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-14" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-8 w-20" />
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Artists</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover some of our top-rated performers who consistently deliver exceptional experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => <LoadingSkeleton key={index} />)
            : artists.map((artist) => (
                <Card key={artist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-muted overflow-hidden">
                    <img
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{artist.name}</h3>
                        <p className="text-primary font-medium">{artist.category}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{artist.rating}</span>
                        <span className="text-sm text-muted-foreground">({artist.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{artist.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {artist.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-foreground">{artist.priceRange}</span>
                      <Button size="sm">Ask for Quote</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/artists">View All Artists</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
