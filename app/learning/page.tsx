"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Trophy, Star, Clock, Users, BookOpen, Video, Brain } from "lucide-react"
import Link from "next/link"

export default function LearningPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null)
  const [userProgress, setUserProgress] = useState({
    level: 3,
    points: 1250,
    streak: 7,
    completedModules: 12,
  })

  const videoGuides = [
    {
      id: 1,
      title: "Étiquette dans les Mosquées",
      duration: "3:45",
      difficulty: "Débutant",
      thumbnail: "🕌",
      views: 1200,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Marchander dans les Souks",
      duration: "5:20",
      difficulty: "Intermédiaire",
      thumbnail: "🏪",
      views: 890,
      rating: 4.9,
    },
    {
      id: 3,
      title: "Transports Publics à Marrakech",
      duration: "4:15",
      difficulty: "Débutant",
      thumbnail: "🚌",
      views: 650,
      rating: 4.7,
    },
    {
      id: 4,
      title: "Étiquette des Repas Traditionnels",
      duration: "6:30",
      difficulty: "Avancé",
      thumbnail: "🍽️",
      views: 420,
      rating: 4.9,
    },
  ]

  const quizzes = [
    {
      id: 1,
      title: "Règles de Base des Mosquées",
      questions: 10,
      difficulty: "Facile",
      points: 100,
      completed: true,
      score: 85,
    },
    {
      id: 2,
      title: "Négociation dans les Marchés",
      questions: 15,
      difficulty: "Moyen",
      points: 150,
      completed: false,
      score: null,
    },
    {
      id: 3,
      title: "Festivals et Célébrations",
      questions: 12,
      difficulty: "Difficile",
      points: 200,
      completed: false,
      score: null,
    },
  ]

  const dailyChallenge = {
    title: "Salutations Traditionnelles",
    description: "Apprenez 3 façons de saluer en arabe marocain",
    progress: 60,
    reward: 50,
    timeLeft: "4h 23m",
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "débutant":
      case "facile":
        return "bg-green-100 text-green-800"
      case "intermédiaire":
      case "moyen":
        return "bg-yellow-100 text-yellow-800"
      case "avancé":
      case "difficile":
        return "bg-red-100 text-red-800"
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
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Apprentissage Culturel</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">{userProgress.points} pts</span>
              </div>
              <Badge variant="secondary">Niveau {userProgress.level}</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* User Progress */}
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Votre Progression</CardTitle>
            <CardDescription className="text-blue-100">Continuez votre apprentissage culturel !</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{userProgress.level}</div>
                <div className="text-sm opacity-90">Niveau</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userProgress.points}</div>
                <div className="text-sm opacity-90">Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userProgress.streak}</div>
                <div className="text-sm opacity-90">Jours consécutifs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userProgress.completedModules}</div>
                <div className="text-sm opacity-90">Modules terminés</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Challenge */}
        <Card className="mb-8 border-l-4 border-l-orange-500">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-orange-500" />
                <CardTitle>Défi Quotidien</CardTitle>
              </div>
              <Badge variant="outline" className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{dailyChallenge.timeLeft}</span>
              </Badge>
            </div>
            <CardDescription className="text-lg font-medium">{dailyChallenge.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{dailyChallenge.description}</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Progression</span>
              <span className="text-sm font-medium">{dailyChallenge.progress}%</span>
            </div>
            <Progress value={dailyChallenge.progress} className="mb-4" />
            <div className="flex items-center justify-between">
              <Button>
                <Play className="h-4 w-4 mr-2" />
                Continuer
              </Button>
              <div className="flex items-center space-x-1 text-orange-600">
                <Star className="h-4 w-4" />
                <span className="font-medium">+{dailyChallenge.reward} points</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Content */}
        <Tabs defaultValue="videos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="videos" className="flex items-center space-x-2">
              <Video className="h-4 w-4" />
              <span>Guides Vidéo</span>
            </TabsTrigger>
            <TabsTrigger value="quizzes" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span>Quiz Interactifs</span>
            </TabsTrigger>
            <TabsTrigger value="scenarios" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Scénarios</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoGuides.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-4xl">{video.thumbnail}</span>
                      <Badge className={getDifficultyColor(video.difficulty)}>{video.difficulty}</Badge>
                    </div>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center justify-between text-sm">
                        <span>{video.duration}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{video.rating}</span>
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{video.views} vues</span>
                      <Button size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Regarder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quizzes">
            <div className="space-y-4">
              {quizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <Brain className="h-5 w-5 text-blue-600" />
                          <span>{quiz.title}</span>
                        </CardTitle>
                        <CardDescription>
                          {quiz.questions} questions • {quiz.points} points
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
                        {quiz.completed && <div className="mt-2 text-green-600 font-medium">Score: {quiz.score}%</div>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {quiz.completed ? (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Terminé
                          </Badge>
                        ) : (
                          <Badge variant="outline">Nouveau</Badge>
                        )}
                      </div>
                      <Button size="sm">{quiz.completed ? "Refaire" : "Commencer"}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scenarios">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="text-2xl">🍽️</span>
                    <span>Dîner en Famille Marocaine</span>
                  </CardTitle>
                  <CardDescription>Simulez un repas traditionnel et apprenez l'étiquette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-100 text-blue-800">Interactif</Badge>
                    <Button size="sm">Commencer</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="text-2xl">🚌</span>
                    <span>Transport Public</span>
                  </CardTitle>
                  <CardDescription>Naviguez dans les transports locaux avec confiance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-100 text-green-800">Pratique</Badge>
                    <Button size="sm">Commencer</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
