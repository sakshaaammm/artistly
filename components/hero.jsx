import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star, Users, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-purple-950/20 dark:via-background dark:to-indigo-950/20 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect with
                <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Talented Artists
                </span>
                for Your Events
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Artistly is the premier platform connecting event planners with performing artists. Browse, shortlist,
                and book the perfect talent for your next event.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/artists">
                  Explore Artists <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-2 hover:bg-accent">
                <Link href="/onboard">Join as Artist</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-muted-foreground">Artists</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">1000+</span>
                </div>
                <p className="text-muted-foreground">Events</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">4.9</span>
                </div>
                <p className="text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-600/20 dark:from-primary/10 dark:to-purple-600/10 rounded-2xl shadow-2xl overflow-hidden border border-border/50">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Artists performing on stage"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-card border border-border p-4 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-card-foreground">Live Bookings</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border p-4 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
