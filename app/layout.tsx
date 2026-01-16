import type React from "react"
import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AuthProvider } from "@/lib/auth"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const syne = Syne({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "MOTORISED WHEELS - Premium Automotive Experience",
  description: "Experience the thrill of automotive excellence with MOTORISED WHEELS",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased`}>
        <AuthProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
