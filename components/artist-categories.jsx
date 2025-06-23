import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Music, Users, Headphones } from "lucide-react"

const categories = [
  {
    id: "singers",
    name: "Singers",
    description: "Vocal artists for all genres and events",
    icon: Mic,
    count: "150+ Artists",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "dancers",
    name: "Dancers",
    description: "Professional dancers and choreographers",
    icon: Users,
    count: "120+ Artists",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "speakers",
    name: "Speakers",
    description: "Motivational and keynote speakers",
    icon: Music,
    count: "80+ Artists",
    color: "bg-green-100 text-green-600",
  },
  {
    id: "djs",
    name: "DJs",
    description: "Professional DJs for all occasions",
    icon: Headphones,
    count: "100+ Artists",
    color: "bg-purple-100 text-purple-600",
  },
]

export function ArtistCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect artist for your event from our diverse categories of talented performers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.id} href={`/artists?category=${category.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-3">{category.description}</p>
                    <p className="text-sm font-medium text-purple-600">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
