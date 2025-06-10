import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BoilerSwap - Purdue Student Freecycle",
  description:
    "The sustainable way for Purdue students to share, reuse, and reduce waste. Give away what you don't need, find what you do.",
  keywords: "Purdue, students, freecycle, sustainability, free items, college, university, waste reduction",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
