import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      slug: "ultimate-car-maintenance-guide",
      title: "The Ultimate Car Maintenance Guide for 2024",
      excerpt: "Keep your vehicle running smoothly with our comprehensive maintenance checklist and expert tips.",
      category: "Maintenance",
      author: "Shubham ",
      date: "Dec 15, 2024",
      image: "/car-maintenance-guide.jpg",
    },
    {
      slug: "performance-tuning-basics",
      title: "Performance Tuning Basics: Where to Start",
      excerpt: "Discover the fundamentals of performance tuning and how to safely enhance your vehicle's capabilities.",
      category: "Performance",
      author: "Akshay ",
      date: "Dec 12, 2024",
      image: "/performance-car-tuning.jpg",
    },
    {
      slug: "electric-vehicle-future",
      title: "The Future of Electric Vehicles in Automotive",
      excerpt: "Exploring the latest trends and innovations shaping the electric vehicle landscape.",
      category: "Technology",
      author: "Bhavnesh",
      date: "Dec 10, 2024",
      image: "/electric-vehicle-charging.png",
    },
    {
      slug: "ceramic-coating-benefits",
      title: "Why Ceramic Coating is Worth the Investment",
      excerpt: "Learn about the long-term benefits of ceramic coating and how it protects your vehicle's paint.",
      category: "Protection",
      author: "Rohit",
      date: "Dec 8, 2024",
      image: "/ceramic-coating-car.jpg",
    },
    {
      slug: "winter-driving-tips",
      title: "Essential Winter Driving Tips and Preparation",
      excerpt: "Stay safe on winter roads with our comprehensive guide to cold weather driving preparation.",
      category: "Safety",
      author: "Dube",
      date: "Dec 5, 2024",
      image: "/winter-driving-snow.jpg",
    },
    {
      slug: "luxury-car-detailing",
      title: "Luxury Car Detailing: Techniques and Best Practices",
      excerpt: "Professional detailing techniques to maintain your luxury vehicle's pristine appearance.",
      category: "Detailing",
      author: "Ishu Thakur",
      date: "Dec 3, 2024",
      image: "/luxury-car-detailing.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, tips, and the latest automotive trends
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">{post.category}</Badge>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="flex items-center text-primary hover:underline">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
