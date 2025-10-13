"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth"
import { Car, Calendar, Settings, FileText, BarChart3, Clock, User, Mail, Phone, MapPin, Star, TrendingUp, Wrench, Zap, Shield, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedAction, setSelectedAction] = useState<"book" | "history" | "vehicles" | "reports" | null>(null)
  const [services, setServices] = useState<Array<{ id: string; serviceType: string; date: string; notes?: string }>>([])
  const [vehicles, setVehicles] = useState<Array<{ id: string; make: string; model: string; year: string; plate?: string }>>([])

  const storageKey = (suffix: string) => `mw:${user?.id || "guest"}:${suffix}`

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login")
    }
  }, [user, isLoading, router])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Load persisted data when user changes
  useEffect(() => {
    if (!user) return
    try {
      const storedServices = localStorage.getItem(storageKey("services"))
      const storedVehicles = localStorage.getItem(storageKey("vehicles"))
      if (storedServices) setServices(JSON.parse(storedServices))
      if (storedVehicles) setVehicles(JSON.parse(storedVehicles))
    } catch (_) {
      // ignore
    }
  }, [user])

  // Persist on changes
  useEffect(() => {
    if (!user) return
    try {
      localStorage.setItem(storageKey("services"), JSON.stringify(services))
    } catch (_) {}
  }, [services, user])

  useEffect(() => {
    if (!user) return
    try {
      localStorage.setItem(storageKey("vehicles"), JSON.stringify(vehicles))
    } catch (_) {}
  }, [vehicles, user])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center hero-gradient">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Car className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          </motion.div>
          <motion.p
            className="text-muted-foreground text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            Loading your dashboard...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const stats = [
    {
      title: "Active Services",
      value: "3",
      icon: Car,
      description: "Currently in progress",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Appointments",
      value: "2",
      icon: Calendar,
      description: "This month",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Service History",
      value: "12",
      icon: FileText,
      description: "Total completed",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Satisfaction",
      value: "98%",
      icon: BarChart3,
      description: "Average rating",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  const userProfile = {
    name: user.name,
    email: user.email,
    joinDate: "January 2024",
    totalServices: 12,
    rating: 4.9,
    memberSince: "Premium Member",
  }

  const recentActivity = [
    {
      title: "Oil Change Completed",
      description: "Your vehicle's oil change service has been completed successfully",
      time: "2 hours ago",
      status: "completed",
      icon: Wrench,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Performance Tuning Scheduled",
      description: "Performance tuning appointment set for next week",
      time: "1 day ago",
      status: "scheduled",
      icon: Zap,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Brake Inspection Reminder",
      description: "Brake inspection due in 2 weeks - book your appointment",
      time: "3 days ago",
      status: "reminder",
      icon: Shield,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Detailing Service Completed",
      description: "Full vehicle detailing service completed with premium package",
      time: "1 week ago",
      status: "completed",
      icon: Sparkles,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ]

  const quickActions = [
    {
      title: "Book Service",
      description: "Schedule a new service",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      href: "/services",
      key: "book" as const,
    },
    {
      title: "View History",
      description: "Check service records",
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      href: "/history",
      key: "history" as const,
    },
    {
      title: "My Vehicles",
      description: "Manage your vehicles",
      icon: Car,
      color: "from-purple-500 to-violet-500",
      href: "/vehicles",
      key: "vehicles" as const,
    },
    {
      title: "Reports",
      description: "View analytics",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      href: "/reports",
      key: "reports" as const,
    },
  ]

  return (
    <main className="min-h-screen hero-gradient">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-1">
              <motion.h1
                className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Welcome back, {user.name}! 👋
              </motion.h1>
              <motion.p
                className="text-muted-foreground text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Here's what's happening with your automotive services
              </motion.p>
              <motion.div
                className="flex items-center gap-4 mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-2 text-yellow-500" />
                  {userProfile.rating}/5.0 Rating
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* User Profile Card */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white">✓</span>
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{userProfile.name}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        {userProfile.email}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Member since {userProfile.joinDate}
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        {userProfile.memberSince}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                        <stat.icon className={`h-6 w-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                      </div>
                      <motion.div
                        className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {stat.value}
                      </motion.div>
                    </div>
                    <h4 className="font-semibold mb-1">{stat.title}</h4>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="h-5 w-5 mr-2 text-orange-500" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                          <activity.icon className={`h-5 w-5 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                        <div
                          className={`w-3 h-3 rounded-full mt-2 ${
                            activity.status === "completed"
                              ? "bg-green-500"
                              : activity.status === "scheduled"
                                ? "bg-blue-500"
                                : "bg-yellow-500"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {quickActions.map((action, index) => (
                      <motion.div
                        key={action.key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          className={`w-full h-20 flex-col bg-transparent border-border/50 ${
                            selectedAction === action.key
                              ? "ring-2 ring-orange-500/50 bg-gradient-to-r from-orange-500/10 to-red-500/10"
                              : "hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
                          }`}
                          onClick={() => setSelectedAction(action.key)}
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${action.color} mb-2`}>
                            <action.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">{action.title}</div>
                            <div className="text-xs text-muted-foreground">{action.description}</div>
                          </div>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Details Section */}
      {selectedAction && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedAction === "book" && (
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-orange-500" /> Book a Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BookingForm
                    onCreate={(payload) => {
                      const newItem = { id: `${Date.now()}`, ...payload }
                      setServices((prev) => [newItem, ...prev])
                      setSelectedAction("history")
                    }}
                  />
                </CardContent>
              </Card>
            )}

            {selectedAction === "history" && (
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-green-500" /> Service History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {services.length === 0 ? (
                    <p className="text-muted-foreground">No services yet. Book your first service from Quick Actions.</p>
                  ) : (
                    <div className="space-y-3">
                      {services.map((svc) => (
                        <div key={svc.id} className="p-4 rounded-lg bg-muted/30">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold">{svc.serviceType}</p>
                              <p className="text-xs text-muted-foreground">{new Date(svc.date).toLocaleString()}</p>
                            </div>
                            <Wrench className="h-5 w-5 text-orange-500" />
                          </div>
                          {svc.notes && <p className="text-sm text-muted-foreground mt-2">{svc.notes}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {selectedAction === "vehicles" && (
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Car className="h-5 w-5 mr-2 text-purple-500" /> My Vehicles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <VehicleForm
                    onAdd={(vehicle) => setVehicles((prev) => [{ id: `${Date.now()}`, ...vehicle }, ...prev])}
                  />
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {vehicles.map((v) => (
                      <div key={v.id} className="p-4 rounded-lg bg-muted/30">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{v.make} {v.model} ({v.year})</p>
                            {v.plate && <p className="text-xs text-muted-foreground">Plate: {v.plate}</p>}
                          </div>
                          <Button variant="outline" size="sm" className="bg-transparent" onClick={() => setVehicles((prev) => prev.filter(x => x.id !== v.id))}>Remove</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedAction === "reports" && (
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-red-500" /> Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ReportTile title="Total Services" value={services.length.toString()} color="from-orange-500 to-red-500" />
                    <ReportTile title="Vehicles" value={vehicles.length.toString()} color="from-purple-500 to-violet-500" />
                    <ReportTile title="Upcoming (next 14d)" value={services.filter(s => new Date(s.date).getTime() > Date.now() && new Date(s.date).getTime() < Date.now() + 14*24*3600*1000).length.toString()} color="from-green-500 to-emerald-500" />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

function BookingForm({ onCreate }: { onCreate: (data: { serviceType: string; date: string; notes?: string }) => void }) {
  const [serviceType, setServiceType] = useState("")
  const [date, setDate] = useState("")
  const [notes, setNotes] = useState("")
  const [errors, setErrors] = useState<{ serviceType?: string; date?: string }>({})

  const validate = () => {
    const e: { serviceType?: string; date?: string } = {}
    if (!serviceType.trim()) e.serviceType = "Service type is required"
    if (!date) e.date = "Date and time are required"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={(ev) => {
        ev.preventDefault()
        if (!validate()) return
        onCreate({ serviceType, date, notes: notes.trim() || undefined })
        setServiceType("")
        setDate("")
        setNotes("")
      }}
    >
      <div>
        <label className="block text-sm font-medium mb-2">Service Type</label>
        <Input
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          placeholder="e.g. Oil Change, Brake Inspection"
          className={errors.serviceType ? "border-red-500" : ""}
        />
        {errors.serviceType && <p className="text-xs text-red-500 mt-1">{errors.serviceType}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Preferred Date & Time</label>
        <Input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} className={errors.date ? "border-red-500" : ""} />
        {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-2">Notes (optional)</label>
        <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any specific issues or requests" rows={4} />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">Book Service</Button>
      </div>
    </form>
  )
}

function VehicleForm({ onAdd }: { onAdd: (data: { make: string; model: string; year: string; plate?: string }) => void }) {
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [plate, setPlate] = useState("")
  const [errors, setErrors] = useState<{ make?: string; model?: string; year?: string }>({})

  const validate = () => {
    const e: { make?: string; model?: string; year?: string } = {}
    if (!make.trim()) e.make = "Make is required"
    if (!model.trim()) e.model = "Model is required"
    if (!year.trim()) e.year = "Year is required"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
      onSubmit={(ev) => {
        ev.preventDefault()
        if (!validate()) return
        onAdd({ make, model, year, plate: plate.trim() || undefined })
        setMake("")
        setModel("")
        setYear("")
        setPlate("")
      }}
    >
      <div>
        <label className="block text-sm font-medium mb-2">Make</label>
        <Input value={make} onChange={(e) => setMake(e.target.value)} className={errors.make ? "border-red-500" : ""} />
        {errors.make && <p className="text-xs text-red-500 mt-1">{errors.make}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Model</label>
        <Input value={model} onChange={(e) => setModel(e.target.value)} className={errors.model ? "border-red-500" : ""} />
        {errors.model && <p className="text-xs text-red-500 mt-1">{errors.model}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Year</label>
        <Input value={year} onChange={(e) => setYear(e.target.value)} className={errors.year ? "border-red-500" : ""} />
        {errors.year && <p className="text-xs text-red-500 mt-1">{errors.year}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Plate (optional)</label>
        <Input value={plate} onChange={(e) => setPlate(e.target.value)} />
      </div>
      <div className="md:col-span-4">
        <Button type="submit" variant="outline" className="bg-transparent">Add Vehicle</Button>
      </div>
    </form>
  )
}

function ReportTile({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <div className="p-5 rounded-lg bg-muted/30 border border-border/50">
      <div className={`inline-flex items-center justify-center p-2 rounded-md bg-gradient-to-r ${color} mb-3`}>
        <BarChart3 className="h-4 w-4 text-white" />
      </div>
      <div className="text-sm text-muted-foreground">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}
