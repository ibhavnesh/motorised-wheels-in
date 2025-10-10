import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Mock post data - in real app, this would come from a CMS or database
  const post = {
    title: "The Ultimate Car Maintenance Guide for 2024",
    excerpt: "Keep your vehicle running smoothly with our comprehensive maintenance checklist and expert tips.",
    category: "Maintenance",
    author: "Alex Johnson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "/car-maintenance-guide-detailed.jpg",
    content: `
      <p>Regular maintenance is the key to keeping your vehicle running smoothly and extending its lifespan. In this comprehensive guide, we'll cover everything you need to know about maintaining your car in 2024.</p>
      
      <h2>Essential Maintenance Tasks</h2>
      <p>Here are the most important maintenance tasks every car owner should know:</p>
      
      <h3>Oil Changes</h3>
      <p>Regular oil changes are crucial for engine health. Most modern vehicles require oil changes every 5,000-7,500 miles, but always check your owner's manual for specific recommendations.</p>
      
      <h3>Tire Maintenance</h3>
      <p>Proper tire maintenance includes regular pressure checks, rotation, and alignment. This ensures even wear and optimal performance.</p>
      
      <h3>Brake System</h3>
      <p>Your brakes are critical for safety. Have them inspected regularly and replace brake pads when they show signs of wear.</p>
      
      <h2>Seasonal Considerations</h2>
      <p>Different seasons require different maintenance approaches. Winter preparations include checking antifreeze levels and battery health, while summer maintenance focuses on cooling system performance.</p>
      
      <h2>Professional vs. DIY</h2>
      <p>While some maintenance tasks can be done at home, others require professional expertise. Know your limits and don't hesitate to consult with qualified technicians.</p>
    `,
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Back Button */}
      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance">{post.title}</h1>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <span>{post.readTime}</span>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
