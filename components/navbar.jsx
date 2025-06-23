"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Music } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Music className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Artistly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Home
              </Button>
            </Link>
            <Link href="/artists">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Browse Artists
              </Button>
            </Link>
            <Link href="/onboard">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Join as Artist
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Button>
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 px-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/40 bg-background/95 backdrop-blur">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                  Home
                </Button>
              </Link>
              <Link href="/artists" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                  Browse Artists
                </Button>
              </Link>
              <Link href="/onboard" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                  Join as Artist
                </Button>
              </Link>
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                  Dashboard
                </Button>
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border/40">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
