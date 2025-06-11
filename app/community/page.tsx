"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, MessageSquare, ThumbsUp, Star, MapPin, Clock, Plus, Search } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  const [newQuestion, setNewQuestion] = useState("")
  const [newTip, setNewTip] = useState("")

  const localTips = [
    {
      id: 1,
      author: "Ahmed_Local",
      avatar: "A",
      location: "Marrakech",
      title: "Meilleur moment pour visiter la place Jemaa el-Fnaa",
      content:
        "Évitez les heures de pointe (18h-20h) si vous voulez prendre de belles photos. Le matin vers 9h est parfait !",
      likes: 24,
      comments: 8,
      tags: ["photographie", "tourisme"],
      verified: true,
      timeAgo: "2h",
    },
    {
      id: 2,
      author: "Fatima_Guide",
      avatar: "F",
      location: "Fès",
      title: "Négociation dans les souks - conseils d'une locale",
      content:
        "Commencez toujours à 30% du prix demandé. Si le vendeur refuse immédiatement, c'est qu'il y a de la marge. Soyez patient et souriez !",
      likes: 45,
      comments: 12,
      tags: ["shopping", "négociation"],
      verified: true,
      timeAgo: "5h",
    },
    {
      id: 3,
      author: "Youssef_Taxi",
      avatar: "Y",
      location: "Casablanca",
      title: "Transport depuis l'aéroport Mohammed V",
      content:
        "Le train est le plus économique (43 DH) et rapide. Les taxis officiels ont des compteurs, méfiez-vous des 'taxis' non officiels.",
      likes: 67,
      comments: 15,
      tags: ["transport", "aéroport"],
      verified: true,
      timeAgo: "1j",
    },
  ]

  const forumQuestions = [
    {
      id: 1,
      author: "Marie_Voyageuse",
      avatar: "M",
      question: "Quelle tenue porter pour visiter la mosquée Hassan II ?",
      description:
        "Je visite Casablanca demain et j'aimerais visiter la mosquée. Quelles sont les règles vestimentaires exactes ?",
      answers: 6,
      views: 234,
      tags: ["religion", "vêtements"],
      timeAgo: "3h",
      status: "answered",
    },
    {
      id: 2,
      author: "Pierre_Backpacker",
      avatar: "P",
      question: "Budget quotidien réaliste pour Marrakech ?",
      description:
        "Premier voyage au Maroc, j'aimerais avoir une idée du budget quotidien pour manger, dormir et visiter.",
      answers: 12,
      views: 456,
      tags: ["budget", "conseils"],
      timeAgo: "6h",
      status: "active",
    },
    {
      id: 3,
      author: "Sophie_Foodie",
      avatar: "S",
      question: "Où manger le meilleur tajine à Fès ?",
      description: "Je cherche des adresses authentiques, pas touristiques. Merci !",
      answers: 8,
      views: 189,
      tags: ["nourriture", "restaurants"],
      timeAgo: "1j",
      status: "answered",
    },
  ]

  const topContributors = [
    { name: "Ahmed_Local", points: 2450, badge: "Expert Local", avatar: "A" },
    { name: "Fatima_Guide", points: 1890, badge: "Guide Certifié", avatar: "F" },
    { name: "Hassan_Culture", points: 1650, badge: "Ambassadeur Culturel", avatar: "H" },
    { name: "Aicha_Food", points: 1420, badge: "Expert Gastronomie", avatar: "AI" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "answered":
        return "bg-green-100 text-green-800"
      case "active":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Communauté</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Rechercher..." className="pl-10 w-64" />
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Contribuer
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">12,450</div>
              <div className="text-sm text-gray-600">Membres actifs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">3,280</div>
              <div className="text-sm text-gray-600">Questions résolues</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-2xl font-bold">8,950</div>
              <div className="text-sm text-gray-600">Conseils partagés</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold">45</div>
              <div className="text-sm text-gray-600">Villes couvertes</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="tips" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tips">Conseils Locaux</TabsTrigger>
                <TabsTrigger value="forum">Forum Q&A</TabsTrigger>
              </TabsList>

              <TabsContent value="tips">
                <div className="space-y-6">
                  {/* Add New Tip */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Partager un Conseil</CardTitle>
                      <CardDescription>Aidez les voyageurs avec vos connaissances locales</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input placeholder="Titre de votre conseil..." />
                      <Textarea
                        placeholder="Partagez votre conseil détaillé..."
                        value={newTip}
                        onChange={(e) => setNewTip(e.target.value)}
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Badge variant="outline">transport</Badge>
                          <Badge variant="outline">nourriture</Badge>
                          <Badge variant="outline">culture</Badge>
                        </div>
                        <Button>Publier</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tips List */}
                  {localTips.map((tip) => (
                    <Card key={tip.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>{tip.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">{tip.author}</span>
                                {tip.verified && (
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                    Vérifié
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <MapPin className="h-4 w-4" />
                                <span>{tip.location}</span>
                                <Clock className="h-4 w-4" />
                                <span>{tip.timeAgo}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{tip.content}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {tip.tags.map((tag, index) => (
                              <Badge key={index} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {tip.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              {tip.comments}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="forum">
                <div className="space-y-6">
                  {/* Ask Question */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Poser une Question</CardTitle>
                      <CardDescription>La communauté est là pour vous aider</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input placeholder="Votre question..." />
                      <Textarea
                        placeholder="Décrivez votre situation en détail..."
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Badge variant="outline">urgent</Badge>
                          <Badge variant="outline">conseil</Badge>
                          <Badge variant="outline">culture</Badge>
                        </div>
                        <Button>Publier la Question</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Questions List */}
                  {forumQuestions.map((question) => (
                    <Card key={question.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>{question.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <span className="font-medium">{question.author}</span>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Clock className="h-4 w-4" />
                                <span>{question.timeAgo}</span>
                              </div>
                            </div>
                          </div>
                          <Badge className={getStatusColor(question.status)}>
                            {question.status === "answered" ? "Résolu" : "Actif"}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{question.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{question.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {question.tags.map((tag, index) => (
                              <Badge key={index} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{question.answers} réponses</span>
                            <span>{question.views} vues</span>
                            <Button size="sm">Répondre</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle>Top Contributeurs</CardTitle>
                <CardDescription>Les membres les plus actifs ce mois</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback>{contributor.avatar}</AvatarFallback>
                          </Avatar>
                          {index < 3 && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                              {index + 1}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{contributor.name}</div>
                          <div className="text-sm text-gray-600">{contributor.badge}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{contributor.points}</div>
                        <div className="text-sm text-gray-600">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Règles de la Communauté</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="text-sm">Respectez les différences culturelles</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="text-sm">Partagez des informations vérifiées</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="text-sm">Soyez bienveillant et constructif</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="text-sm">Évitez le spam et la publicité</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un lieu
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  Recommander un restaurant
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Signaler un problème
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
