import { Card, CardContent } from "@/components/ui/card"
import { Search, UserCheck, Calendar, Star } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse & Filter",
    description: "Search through our curated list of talented artists using our advanced filtering system",
  },
  {
    icon: UserCheck,
    title: "Review Profiles",
    description: "Check artist portfolios, reviews, and pricing to find the perfect match for your event",
  },
  {
    icon: Calendar,
    title: "Book & Schedule",
    description: "Send booking requests and coordinate directly with artists for your event dates",
  },
  {
    icon: Star,
    title: "Enjoy & Review",
    description: "Experience amazing performances and leave reviews to help other event planners",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with Artistly is simple. Follow these easy steps to book your perfect artist
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={index} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
