"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CheckCircle, Loader2 } from "lucide-react"
import { submitArtistApplication } from "@/lib/api"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  bio: z.string().min(50, "Bio must be at least 50 characters"),
  categories: z.array(z.string()).min(1, "Please select at least one category"),
  languages: z.array(z.string()).min(1, "Please select at least one language"),
  feeRange: z.string().min(1, "Please select a fee range"),
  location: z.string().min(2, "Please enter your location"),
  experience: z.string().min(1, "Please select your experience level"),
  specialties: z.string().min(10, "Please describe your specialties"),
})

const categoryOptions = [
  { id: "singers", label: "Singer" },
  { id: "dancers", label: "Dancer" },
  { id: "speakers", label: "Speaker" },
  { id: "djs", label: "DJ" },
  { id: "musicians", label: "Musician" },
  { id: "comedians", label: "Comedian" },
]

const languageOptions = [
  { id: "english", label: "English" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "german", label: "German" },
  { id: "italian", label: "Italian" },
  { id: "portuguese", label: "Portuguese" },
  { id: "mandarin", label: "Mandarin" },
  { id: "japanese", label: "Japanese" },
]

const feeRanges = [
  { value: "$0-$500", label: "Under $500" },
  { value: "$500-$1000", label: "$500 - $1,000" },
  { value: "$1000-$2000", label: "$1,000 - $2,000" },
  { value: "$2000-$5000", label: "$2,000 - $5,000" },
  { value: "$5000+", label: "$5,000+" },
]

const experienceLevels = [
  { value: "1-2", label: "1-2 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "6-10", label: "6-10 years" },
  { value: "10+", label: "10+ years" },
]

export function ArtistOnboardingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      bio: "",
      categories: [],
      languages: [],
      feeRange: "",
      location: "",
      experience: "",
      specialties: "",
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await submitArtistApplication({
        ...data,
        image: selectedImage,
      })

      if (response.success) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto text-center">
        <CardContent className="p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Application Submitted!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for joining Artistly! We'll review your application and get back to you within 2-3 business days.
          </p>
          <Button onClick={() => (window.location.href = "/")}>Return to Homepage</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location *</FormLabel>
                    <FormControl>
                      <Input placeholder="City, State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself, your experience, and what makes you unique..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Professional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Categories */}
            <FormField
              control={form.control}
              name="categories"
              render={() => (
                <FormItem>
                  <FormLabel>Categories * (Select all that apply)</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categoryOptions.map((category) => (
                      <FormField
                        key={category.id}
                        control={form.control}
                        name="categories"
                        render={({ field }) => {
                          return (
                            <FormItem key={category.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(category.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, category.id])
                                      : field.onChange(field.value?.filter((value) => value !== category.id))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{category.label}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Languages */}
            <FormField
              control={form.control}
              name="languages"
              render={() => (
                <FormItem>
                  <FormLabel>Languages Spoken * (Select all that apply)</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {languageOptions.map((language) => (
                      <FormField
                        key={language.id}
                        control={form.control}
                        name="languages"
                        render={({ field }) => {
                          return (
                            <FormItem key={language.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(language.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, language.id])
                                      : field.onChange(field.value?.filter((value) => value !== language.id))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{language.label}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="feeRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fee Range *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your fee range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {feeRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Level *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="specialties"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specialties & Skills *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your specialties, skills, and what makes you unique..."
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Profile Image */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Image (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Label htmlFor="profile-image">Upload Profile Image</Label>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <Input
                    id="profile-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="cursor-pointer"
                  />
                </div>
                {selectedImage && (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">{selectedImage.name}</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">Recommended: Square image, at least 300x300px, max 5MB</p>
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex justify-center">
          <Button type="submit" size="lg" className="px-12" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
