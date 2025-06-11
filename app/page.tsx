"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, BookOpen, Users, Globe, Camera, Mic, Bell, Trophy, Play, Menu } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const personas = [
    {
      id: "football-fan",
      title: "Fan de Football",
      description: "Conseils pour les stades et événements sportifs",
      icon: "⚽",
      color: "bg-green-100 text-green-800",
    },
    {
      id: "cultural-explorer",
      title: "Explorateur Culturel",
      description: "Découverte approfondie des traditions locales",
      icon: "🏛️",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "festive-traveler",
      title: "Voyageur Festif",
      description: "Guides pour la vie nocturne et les festivités",
      icon: "🎉",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Alertes Géolocalisées",
      description: "Conseils civiques basés sur votre position",
      href: "/location-alerts",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Modules Interactifs",
      description: "Quizz et vidéos d'apprentissage ludiques",
      href: "/learning",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Traduction Complète",
      description: "Voix, texte et images en temps réel",
      href: "/translation",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Communauté Locale",
      description: "Conseils et forum des résidents",
      href: "/community",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Maroc Guid</h1>
            </div>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/translation" className="text-gray-600 hover:text-blue-600">
                Traduction
              </Link>
              <Link href="/learning" className="text-gray-600 hover:text-blue-600">
                Apprentissage
              </Link>
              <Link href="/location-alerts" className="text-gray-600 hover:text-blue-600">
                Alertes Locales
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-blue-600">
                Communauté
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-blue-600">
                Profil
              </Link>
            </nav>

            <Button className="hidden md:block">Commencer</Button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <nav className="flex flex-col space-y-4">
              <Link href="/translation" className="text-gray-600 hover:text-blue-600 py-2">
                Traduction
              </Link>
              <Link href="/learning" className="text-gray-600 hover:text-blue-600 py-2">
                Apprentissage
              </Link>
              <Link href="/location-alerts" className="text-gray-600 hover:text-blue-600 py-2">
                Alertes Locales
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-blue-600 py-2">
                Communauté
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-blue-600 py-2">
                Profil
              </Link>
              <Button className="w-full">Commencer</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Votre Guide Culturel <span className="text-blue-600">Intelligent</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez les règles civiques, apprenez l'étiquette culturelle et communiquez sans barrières grâce à notre
            application de traduction et conseils culturels alimentée par l'IA.
          </p>

          {/* Persona Selection */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Quel type de voyageur êtes-vous ?</h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {personas.map((persona) => (
                <Card
                  key={persona.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedPersona === persona.id ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setSelectedPersona(persona.id)}
                >
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{persona.icon}</div>
                    <CardTitle className="text-lg">{persona.title}</CardTitle>
                    <CardDescription>{persona.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <Button size="lg" className="text-lg px-8 py-3">
            Commencer l'Aventure Culturelle
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Fonctionnalités Principales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">{feature.icon}</div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Outils Rapides</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Camera className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>Traduction Photo</CardTitle>
                <CardDescription>Photographiez un panneau ou menu pour traduction instantanée</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Mic className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle>Traduction Vocale</CardTitle>
                <CardDescription>Parlez et obtenez une traduction en temps réel</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Bell className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <CardTitle>Alertes Locales</CardTitle>
                <CardDescription>Recevez des conseils basés sur votre localisation</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Challenge Preview */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto text-center">
          <Trophy className="h-16 w-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Défi Culturel du Jour</h3>
          <p className="text-xl mb-6 opacity-90">
            "Apprenez la salutation traditionnelle marocaine et gagnez 50 points !"
          </p>
          <Button variant="secondary" size="lg">
            <Play className="h-5 w-5 mr-2" />
            Commencer le Défi
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6" />
                <span className="text-xl font-bold">Maroc Guid</span>
              </div>
              <p className="text-gray-400">Votre compagnon intelligent pour naviguer la culture marocaine.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Fonctionnalités</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Traduction IA</li>
                <li>Conseils Culturels</li>
                <li>Apprentissage Interactif</li>
                <li>Communauté</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Centre d'Aide</li>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Langues</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Français</Badge>
                <Badge variant="secondary">العربية</Badge>
                <Badge variant="secondary">English</Badge>
                <Badge variant="secondary">Español</Badge>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Maroc Guid. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
