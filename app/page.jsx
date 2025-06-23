import { Hero } from "@/components/hero"
import { ArtistCategories } from "@/components/artist-categories"
import { FeaturedArtists } from "@/components/featured-artists"
import { ImageGallery } from "@/components/image-gallery"
import { Testimonials } from "@/components/testimonials"
import { HowItWorks } from "@/components/how-it-works"

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <ArtistCategories />
      <FeaturedArtists />
      <ImageGallery />
      <Testimonials />
      <HowItWorks />
    </div>
  )
}
