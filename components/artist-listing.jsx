"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Star, MapPin, Search, Grid, List, Loader2 } from "lucide-react"
import { fetchArtists } from "@/lib/api"

const categories = [
  { value: "all", label: "All Categories" },
  { value: "singers", label: "Singers" },
  { value: "dancers", label: "Dancers" },
  { value: "speakers", label: "Speakers" },
  { value: "djs", label: "DJs" },
]

const locations = [
  { value: "all", label: "All Locations" },
  { value: "New York, NY", label: "New York, NY" },
  { value: "Los Angeles, CA", label: "Los Angeles, CA" },
  { value: "Miami, FL", label: "Miami, FL" },
  { value: "Chicago, IL", label: "Chicago, IL" },
  { value: "Austin, TX", label: "Austin, TX" },
  { value: "Seattle, WA", label: "Seattle, WA" },
  { value: "Las Vegas, NV", label: "Las Vegas, NV" },
  { value: "Boston, MA", label: "Boston, MA" },
]

const priceRanges = [
  { value: "all", label: "All Price Ranges" },
  { value: "$0-$500", label: "Under $500" },
  { value: "$500-$1000", label: "$500 - $1,000" },
  { value: "$1000-$2000", label: "$1,000 - $2,000" },
  { value: "$2000+", label: "$2,000+" },
]

export function ArtistListing() {
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  // Fetch artists with filters
  const loadArtists = async () => {
    setLoading(true)
    try {
      const filters = {
        search: searchTerm,
        category: selectedCategory,
        location: selectedLocation,
        priceRange: selectedPriceRange,
      }

      const response = await fetchArtists(filters)
      if (response.success) {
        setArtists(response.data)
      }
    } catch (error) {
      console.error("Error fetching artists:", error)
    } finally {
      setLoading(false)
    }
  }

  // Load artists on component mount and filter changes
  useEffect(() => {
    loadArtists()
  }, [searchTerm, selectedCategory, selectedLocation, selectedPriceRange])

  const ArtistCard = ({ artist }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`${viewMode === "list" ? "flex" : ""}`}>
        <div className={`${viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-square"} bg-muted overflow-hidden`}>
          <img
            src={artist.image || "/placeholder.svg"}
            alt={artist.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            }}
          />
        </div>
        <CardContent className={`${viewMode === "list" ? "flex-1" : ""} p-6`}>
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{artist.name}</h3>
              <p className="text-primary font-medium capitalize">{artist.category.replace("s", "")}</p>
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

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{artist.bio}</p>

          <div className="flex flex-wrap gap-1 mb-4">
            {artist.specialties.slice(0, 3).map((specialty) => (
              <Badge key={specialty} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
            {artist.specialties.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{artist.specialties.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-foreground">{artist.priceRange}</span>
            <Button size="sm">Ask for Quote</Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )

  const LoadingSkeleton = () => (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-square" />
      <CardContent className="p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
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
    <div className="space-y-6">
      {/* Filters */}
      <Card className="p-6">
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search artists or specialties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading artists...
            </span>
          ) : (
            `Showing ${artists.length} artists`
          )}
        </p>
      </div>

      {/* Artist Grid/List */}
      <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
        {loading ? (
          // Loading skeletons
          Array.from({ length: 6 }).map((_, index) => <LoadingSkeleton key={index} />)
        ) : artists.length > 0 ? (
          // Artist cards
          artists.map((artist) => <ArtistCard key={artist.id} artist={artist} />)
        ) : (
          // No results
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground text-lg">No artists found matching your criteria.</p>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  )
}
