import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { RegisterServiceWorker } from "../components/service-worker-registration"
import { AppInstallBanner } from "../components/app-install-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maroc Guid - Votre Guide Culturel Intelligent",
  description: "Application de traduction et conseils culturels avec IA pour voyageurs",
  generator: 'v0.dev'
}

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <RegisterServiceWorker />
        <AppInstallBanner />
        {children}
      </body>
    </html>
  )
}
