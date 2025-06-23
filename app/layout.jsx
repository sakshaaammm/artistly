import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/contexts/theme-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Artistly - Performing Artist Booking Platform",
  description:
    "Connect event planners with talented performing artists. Browse, shortlist, and book artists for your events.",
  keywords: "artist booking, event planning, performers, musicians, dancers, speakers",
  authors: [{ name: "Artistly Team" }],
  openGraph: {
    title: "Artistly - Performing Artist Booking Platform",
    description: "Connect event planners with talented performing artists",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
