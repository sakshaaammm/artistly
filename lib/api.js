// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Mock API data
const mockApiData = {
  artists: [
    {
      id: 1,
      name: "Sarah Johnson",
      category: "singers",
      location: "New York, NY",
      priceRange: "$500-$1500",
      rating: 4.9,
      reviews: 45,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Professional jazz and pop vocalist with 10+ years of experience performing at weddings, corporate events, and concerts.",
      languages: ["English", "Spanish"],
      specialties: ["Jazz", "Pop", "Soul", "Wedding Songs"],
      experience: "10+ years",
      availability: "available",
    },
    {
      id: 2,
      name: "Dance Fusion Crew",
      category: "dancers",
      location: "Los Angeles, CA",
      priceRange: "$800-$2000",
      rating: 4.8,
      reviews: 32,
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Award-winning dance crew specializing in contemporary fusion and hip-hop choreography for events and competitions.",
      languages: ["English"],
      specialties: ["Hip Hop", "Contemporary", "Breakdance", "Choreography"],
      experience: "8+ years",
      availability: "available",
    },
    {
      id: 3,
      name: "DJ Mike Stevens",
      category: "djs",
      location: "Miami, FL",
      priceRange: "$400-$1200",
      rating: 4.9,
      reviews: 67,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Professional DJ with expertise in electronic music, weddings, and corporate events. State-of-the-art equipment included.",
      languages: ["English", "Portuguese"],
      specialties: ["Electronic", "House", "Wedding", "Corporate Events"],
      experience: "12+ years",
      availability: "available",
    },
    {
      id: 4,
      name: "Marcus Thompson",
      category: "speakers",
      location: "Chicago, IL",
      priceRange: "$1000-$3000",
      rating: 4.7,
      reviews: 28,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Motivational speaker and business coach with expertise in leadership development and team building.",
      languages: ["English"],
      specialties: ["Motivational Speaking", "Leadership", "Team Building", "Corporate Training"],
      experience: "15+ years",
      availability: "busy",
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      category: "singers",
      location: "Austin, TX",
      priceRange: "$600-$1800",
      rating: 4.8,
      reviews: 39,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Bilingual singer specializing in Latin music, pop, and acoustic performances for intimate and large-scale events.",
      languages: ["English", "Spanish"],
      specialties: ["Latin", "Pop", "Acoustic", "Bilingual"],
      experience: "7+ years",
      availability: "available",
    },
    {
      id: 6,
      name: "The Rhythm Collective",
      category: "dancers",
      location: "Seattle, WA",
      priceRange: "$700-$1800",
      rating: 4.6,
      reviews: 24,
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Professional dance troupe specializing in cultural dances and modern choreography for festivals and events.",
      languages: ["English"],
      specialties: ["Cultural Dance", "Modern", "Festival Performances", "Group Choreography"],
      experience: "6+ years",
      availability: "available",
    },
    {
      id: 7,
      name: "DJ Luna",
      category: "djs",
      location: "Las Vegas, NV",
      priceRange: "$500-$1500",
      rating: 4.9,
      reviews: 52,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Female DJ specializing in EDM, pop, and party music. Perfect for clubs, parties, and high-energy events.",
      languages: ["English"],
      specialties: ["EDM", "Pop", "Party Music", "Club Events"],
      experience: "9+ years",
      availability: "available",
    },
    {
      id: 8,
      name: "Dr. Amanda Foster",
      category: "speakers",
      location: "Boston, MA",
      priceRange: "$1200-$4000",
      rating: 4.8,
      reviews: 35,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Keynote speaker and author focusing on innovation, technology, and women in leadership.",
      languages: ["English"],
      specialties: ["Keynote Speaking", "Innovation", "Technology", "Women in Leadership"],
      experience: "20+ years",
      availability: "available",
    },
  ],
  submissions: [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      category: "Singer",
      location: "New York, NY",
      feeRange: "$500-$1500",
      status: "approved",
      submittedAt: "2024-01-15",
      experience: "10+ years",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      email: "mike.rodriguez@email.com",
      category: "DJ",
      location: "Miami, FL",
      feeRange: "$400-$1200",
      status: "pending",
      submittedAt: "2024-01-14",
      experience: "8+ years",
    },
    {
      id: 3,
      name: "Dance Fusion Crew",
      email: "info@dancefusion.com",
      category: "Dancers",
      location: "Los Angeles, CA",
      feeRange: "$800-$2000",
      status: "approved",
      submittedAt: "2024-01-13",
      experience: "6+ years",
    },
    {
      id: 4,
      name: "Dr. Amanda Foster",
      email: "amanda.foster@email.com",
      category: "Speaker",
      location: "Boston, MA",
      feeRange: "$1200-$4000",
      status: "pending",
      submittedAt: "2024-01-12",
      experience: "15+ years",
    },
    {
      id: 5,
      name: "Elena Martinez",
      email: "elena.martinez@email.com",
      category: "Singer",
      location: "Austin, TX",
      feeRange: "$600-$1800",
      status: "rejected",
      submittedAt: "2024-01-11",
      experience: "5+ years",
    },
    {
      id: 6,
      name: "The Rhythm Collective",
      email: "contact@rhythmcollective.com",
      category: "Dancers",
      location: "Seattle, WA",
      feeRange: "$700-$1800",
      status: "approved",
      submittedAt: "2024-01-10",
      experience: "7+ years",
    },
  ],
}

// API Functions
export const fetchArtists = async (filters = {}) => {
  await delay(800) // Simulate network delay

  let artists = [...mockApiData.artists]

  // Apply filters
  if (filters.category && filters.category !== "all") {
    artists = artists.filter((artist) => artist.category === filters.category)
  }

  if (filters.location && filters.location !== "all") {
    artists = artists.filter((artist) => artist.location === filters.location)
  }

  if (filters.search) {
    artists = artists.filter(
      (artist) =>
        artist.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        artist.specialties.some((specialty) => specialty.toLowerCase().includes(filters.search.toLowerCase())),
    )
  }

  return {
    data: artists,
    total: artists.length,
    success: true,
  }
}

export const fetchFeaturedArtists = async () => {
  await delay(500)

  const featured = mockApiData.artists.slice(0, 3).map((artist) => ({
    ...artist,
    category: artist.category.charAt(0).toUpperCase() + artist.category.slice(1, -1),
  }))

  return {
    data: featured,
    success: true,
  }
}

export const fetchSubmissions = async (filters = {}) => {
  await delay(600)

  let submissions = [...mockApiData.submissions]

  if (filters.status && filters.status !== "all") {
    submissions = submissions.filter((sub) => sub.status === filters.status)
  }

  if (filters.category && filters.category !== "all") {
    submissions = submissions.filter((sub) => sub.category.toLowerCase() === filters.category)
  }

  if (filters.search) {
    submissions = submissions.filter(
      (sub) =>
        sub.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        sub.email.toLowerCase().includes(filters.search.toLowerCase()) ||
        sub.location.toLowerCase().includes(filters.search.toLowerCase()),
    )
  }

  return {
    data: submissions,
    total: submissions.length,
    success: true,
  }
}

export const submitArtistApplication = async (formData) => {
  await delay(1000)

  // Simulate form submission
  console.log("Submitting artist application:", formData)

  return {
    success: true,
    message: "Application submitted successfully!",
    id: Date.now(),
  }
}

export const updateSubmissionStatus = async (id, status) => {
  await delay(300)

  // Find and update submission
  const submission = mockApiData.submissions.find((sub) => sub.id === id)
  if (submission) {
    submission.status = status
  }

  return {
    success: true,
    message: `Status updated to ${status}`,
  }
}
