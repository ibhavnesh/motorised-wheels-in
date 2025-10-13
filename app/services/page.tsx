import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Zap, Shield, Sparkles, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Premium Maintenance",
      description: "Comprehensive maintenance services to keep your vehicle running at peak performance.",
      features: ["Oil Changes", "Brake Service", "Engine Diagnostics", "Transmission Service"],
      price: "Starting at ₹700",
    },
    {
      icon: Zap,
      title: "Performance Tuning",
      description: "Unlock your vehicle's true potential with our expert performance enhancement services.",
      features: ["ECU Tuning", "Exhaust Systems", "Cold Air Intakes", "Suspension Upgrades"],
      price: "Starting at ₹600",
    },
    {
      icon: Shield,
      title: "Protection Services",
      description: "Advanced protection solutions to preserve your vehicle's appearance and value.",
      features: ["Paint Protection", "Ceramic Coating", "Window Tinting", "Interior Protection"],
      price: "Starting at ₹5000",
    },
    {
      icon: Sparkles,
      title: "Detailing & Care",
      description: "Meticulous detailing services that restore and maintain your vehicle's pristine condition.",
      features: ["Full Detail", "Paint Correction", "Interior Cleaning", "Leather Treatment"],
      price: "Starting at ₹3000",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automotive solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-primary font-semibold">{service.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Learn More</Button>
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
