"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="text-center px-4">
        <div className="mb-8">
          <Car className="h-24 w-24 text-primary mx-auto mb-4" />
          <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like you've taken a wrong turn. The page you're looking for doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}
