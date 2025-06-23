import { ArtistListing } from "@/components/artist-listing"

export const metadata = {
  title: "Browse Artists - Artistly",
  description: "Discover talented performing artists for your events. Filter by category, location, and price range.",
}

export default function ArtistsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Artists</h1>
        <p className="text-gray-600">Discover talented performers for your next event</p>
      </div>
      <ArtistListing />
    </div>
  )
}
