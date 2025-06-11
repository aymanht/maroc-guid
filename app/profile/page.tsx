"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Settings, Bell, Download, Trophy, Globe } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [notifications, setNotifications] = useState({
    locationAlerts: true,
    culturalTips: true,
    communityUpdates: false,
    dailyChallenges: true,
  })

  const [alertFrequency, setAlertFrequency] = useState([3])
  const [offlineContent, setOfflineContent] = useState({
    basicPhrases: true,
    culturalGuides: false,
    videoContent: false,
  })

  const userStats = {
    level: 3,
    points: 1250,
    streak: 7,
    completedChallenges: 23,
    helpfulVotes: 45,
    questionsAnswered: 12,
  }

  const achievements = [
    { id: 1, title: "Premier Pas", description: "Première connexion", icon: "🎯", unlocked: true },
    { id: 2, title: "Explorateur", description: "10 lieux visités", icon: "🗺️", unlocked: true },
    { id: 3, title: "Linguiste", description: "100 traductions", icon: "🌍", unlocked: true },
    { id: 4, title: "Mentor", description: "Aider 5 voyageurs", icon: "🤝", unlocked: false },
    { id: 5, title: "Expert Local", description: "50 conseils partagés", icon: "⭐", unlocked: false },
    { id: 6, title: "Polyglotte", description: "5 langues maîtrisées", icon: "🗣️", unlocked: false },
  ]

  const recentActivity = [
    { type: "challenge", description: "Défi quotidien terminé", points: 50, time: "Il y a 2h" },
    { type: "translation", description: "Phrase traduite", points: 10, time: "Il y a 4h" },
    { type: "tip", description: "Conseil partagé", points: 25, time: "Il y a 1j" },
    { type: "quiz", description: "Quiz culture terminé", points: 75, time: "Il y a 2j" },
  ]

  const downloadableContent = [
    { title: "Guide Culturel Marrakech", size: "15 MB", downloaded: true },
    { title: "Phrases Essentielles Arabe", size: "8 MB", downloaded: true },
    { title: "Vidéos Étiquette Mosquées", size: "45 MB", downloaded: false },
    { title: "Guide Transport Casablanca", size: "12 MB", downloaded: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <User className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Mon Profil</span>
            </Link>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Paramètres
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Card */}
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="text-2xl">MV</AvatarFallback>
                </Avatar>
                <CardTitle>Marie Voyageuse</CardTitle>
                <CardDescription>Exploratrice Culturelle</CardDescription>
                <div className="flex justify-center space-x-2 mt-2">
                  <Badge className="bg-blue-100 text-blue-800">Niveau {userStats.level}</Badge>
                  <Badge variant="outline">{userStats.points} points</Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Statistiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Série actuelle</span>
                  <span className="font-medium">{userStats.streak} jours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Défis terminés</span>
                  <span className="font-medium">{userStats.completedChallenges}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Votes utiles</span>
                  <span className="font-medium">{userStats.helpfulVotes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Questions répondues</span>
                  <span className="font-medium">{userStats.questionsAnswered}</span>
                </div>
              </CardContent>
            </Card>

            {/* Achievements Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Succès Récents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements
                    .filter((a) => a.unlocked)
                    .slice(0, 3)
                    .map((achievement) => (
                      <div key={achievement.id} className="flex items-center space-x-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div>
                          <div className="font-medium">{achievement.title}</div>
                          <div className="text-sm text-gray-600">{achievement.description}</div>
                        </div>
                      </div>
                    ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Trophy className="h-4 w-4 mr-2" />
                  Voir tous les succès
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="activity" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="activity">Activité</TabsTrigger>
                <TabsTrigger value="preferences">Préférences</TabsTrigger>
                <TabsTrigger value="offline">Hors ligne</TabsTrigger>
                <TabsTrigger value="achievements">Succès</TabsTrigger>
              </TabsList>

              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Activité Récente</CardTitle>
                    <CardDescription>Vos dernières actions dans l'application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div>
                              <div className="font-medium">{activity.description}</div>
                              <div className="text-sm text-gray-600">{activity.time}</div>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            +{activity.points} pts
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <div className="space-y-6">
                  {/* Notification Settings */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Bell className="h-5 w-5" />
                        <span>Notifications</span>
                      </CardTitle>
                      <CardDescription>Personnalisez vos alertes et notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Alertes de localisation</div>
                            <div className="text-sm text-gray-600">Conseils basés sur votre position</div>
                          </div>
                          <Switch
                            checked={notifications.locationAlerts}
                            onCheckedChange={(checked) =>
                              setNotifications((prev) => ({ ...prev, locationAlerts: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Conseils culturels</div>
                            <div className="text-sm text-gray-600">Apprentissage quotidien</div>
                          </div>
                          <Switch
                            checked={notifications.culturalTips}
                            onCheckedChange={(checked) =>
                              setNotifications((prev) => ({ ...prev, culturalTips: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Mises à jour communauté</div>
                            <div className="text-sm text-gray-600">Nouvelles réponses et mentions</div>
                          </div>
                          <Switch
                            checked={notifications.communityUpdates}
                            onCheckedChange={(checked) =>
                              setNotifications((prev) => ({ ...prev, communityUpdates: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Défis quotidiens</div>
                            <div className="text-sm text-gray-600">Rappels d'apprentissage</div>
                          </div>
                          <Switch
                            checked={notifications.dailyChallenges}
                            onCheckedChange={(checked) =>
                              setNotifications((prev) => ({ ...prev, dailyChallenges: checked }))
                            }
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-medium">Fréquence des alertes</label>
                        <div className="px-3">
                          <Slider
                            value={alertFrequency}
                            onValueChange={setAlertFrequency}
                            max={5}
                            min={1}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Minimal</span>
                            <span>Modéré</span>
                            <span>Fréquent</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Language & Region */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Globe className="h-5 w-5" />
                        <span>Langue et Région</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Langue de l'interface</label>
                          <Select defaultValue="fr">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fr">🇫🇷 Français</SelectItem>
                              <SelectItem value="en">🇺🇸 English</SelectItem>
                              <SelectItem value="ar">🇲🇦 العربية</SelectItem>
                              <SelectItem value="es">🇪🇸 Español</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Région principale</label>
                          <Select defaultValue="morocco">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morocco">🇲🇦 Maroc</SelectItem>
                              <SelectItem value="france">🇫🇷 France</SelectItem>
                              <SelectItem value="spain">🇪🇸 Espagne</SelectItem>
                              <SelectItem value="other">🌍 Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="offline">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Download className="h-5 w-5" />
                      <span>Contenu Hors Ligne</span>
                    </CardTitle>
                    <CardDescription>Téléchargez du contenu pour l'utiliser sans connexion</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Auto-download settings */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Téléchargement automatique</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Phrases de base</div>
                            <div className="text-sm text-gray-600">Expressions essentielles</div>
                          </div>
                          <Switch
                            checked={offlineContent.basicPhrases}
                            onCheckedChange={(checked) =>
                              setOfflineContent((prev) => ({ ...prev, basicPhrases: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Guides culturels</div>
                            <div className="text-sm text-gray-600">Conseils détaillés par région</div>
                          </div>
                          <Switch
                            checked={offlineContent.culturalGuides}
                            onCheckedChange={(checked) =>
                              setOfflineContent((prev) => ({ ...prev, culturalGuides: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Contenu vidéo</div>
                            <div className="text-sm text-gray-600">Guides vidéo (Wi-Fi uniquement)</div>
                          </div>
                          <Switch
                            checked={offlineContent.videoContent}
                            onCheckedChange={(checked) =>
                              setOfflineContent((prev) => ({ ...prev, videoContent: checked }))
                            }
                          />
                        </div>
                      </div>
                    </div>

                    {/* Downloaded content */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Contenu téléchargé</h4>
                      <div className="space-y-3">
                        {downloadableContent.map((content, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-medium">{content.title}</div>
                              <div className="text-sm text-gray-600">{content.size}</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {content.downloaded ? (
                                <Badge className="bg-green-100 text-green-800">Téléchargé</Badge>
                              ) : (
                                <Button size="sm" variant="outline">
                                  <Download className="h-4 w-4 mr-1" />
                                  Télécharger
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5" />
                      <span>Succès et Récompenses</span>
                    </CardTitle>
                    <CardDescription>Vos accomplissements dans l'apprentissage culturel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className={`p-4 rounded-lg border ${
                            achievement.unlocked
                              ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"
                              : "bg-gray-50 border-gray-200 opacity-60"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl">{achievement.icon}</span>
                            <div>
                              <div
                                className={`font-medium ${achievement.unlocked ? "text-gray-900" : "text-gray-500"}`}
                              >
                                {achievement.title}
                              </div>
                              <div className={`text-sm ${achievement.unlocked ? "text-gray-600" : "text-gray-400"}`}>
                                {achievement.description}
                              </div>
                            </div>
                          </div>
                          {achievement.unlocked && (
                            <Badge className="mt-2 bg-yellow-100 text-yellow-800">Débloqué</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
