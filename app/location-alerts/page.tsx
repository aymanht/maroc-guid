"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, AlertTriangle, Info, Volume2, Settings } from "lucide-react"
import Link from "next/link"

export default function LocationAlertsPage() {
  const [currentLocation, setCurrentLocation] = useState("Médina de Marrakech")
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "cultural",
      priority: "high",
      title: "Mosquée à proximité",
      message: "Vous approchez de la Mosquée Koutoubia. Habillez-vous modestement et maintenez le silence.",
      distance: "50m",
      icon: "🕌",
    },
    {
      id: 2,
      type: "civic",
      priority: "medium",
      title: "Zone de souk",
      message: "Vous entrez dans le souk. Le marchandage est attendu - commencez à 30% du prix initial.",
      distance: "100m",
      icon: "🏪",
    },
    {
      id: 3,
      type: "event",
      priority: "low",
      title: "Match de football ce soir",
      message: "Raja vs Wydad à 20h. Évitez le centre-ville après 18h ou portez des couleurs neutres.",
      distance: "2km",
      icon: "⚽",
    },
  ])

  const upcomingEvents = [
    {
      title: "Appel à la prière",
      time: "18:30",
      advice: "Les commerces peuvent fermer temporairement",
    },
    {
      title: "Heure de pointe",
      time: "19:00",
      advice: "Transports publics bondés, prévoyez plus de temps",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-500 bg-red-50"
      case "medium":
        return "border-orange-500 bg-orange-50"
      case "low":
        return "border-blue-500 bg-blue-50"
      default:
        return "border-gray-500 bg-gray-50"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "medium":
        return <Info className="h-5 w-5 text-orange-500" />
      case "low":
        return <Info className="h-5 w-5 text-blue-500" />
      default:
        return <Info className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Alertes Locales</span>
            </Link>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Paramètres
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Current Location */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <CardTitle>Position Actuelle</CardTitle>
              </div>
              <Badge variant="secondary">GPS Actif</Badge>
            </div>
            <CardDescription className="text-lg font-medium">{currentLocation}</CardDescription>
          </CardHeader>
        </Card>

        {/* Active Alerts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Alertes Actives</h2>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <Card key={alert.id} className={`border-l-4 ${getPriorityColor(alert.priority)}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{alert.icon}</span>
                      <div>
                        <div className="flex items-center space-x-2">
                          {getPriorityIcon(alert.priority)}
                          <CardTitle className="text-lg">{alert.title}</CardTitle>
                        </div>
                        <CardDescription className="flex items-center space-x-2 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{alert.distance}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{alert.message}</p>
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="outline">
                      Plus d'infos
                    </Button>
                    <Button size="sm" variant="ghost">
                      Masquer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Événements à Venir</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Aujourd'hui</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-gray-600">{event.advice}</div>
                    </div>
                    <Badge variant="outline">{event.time}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CardTitle>Signaler un Problème</CardTitle>
              <CardDescription>Aidez la communauté en signalant des situations</CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CardTitle>Demander des Conseils</CardTitle>
              <CardDescription>Posez une question aux locaux</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
