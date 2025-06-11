"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mic, Volume2, Copy, BookOpen, Globe, ImageIcon, MessageSquare, MicIcon } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function TranslationPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("text")
  const [sourceText, setSourceText] = useState("")
  const [translatedText, setTranslatedText] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [sourceLang, setSourceLang] = useState("fr")
  const [targetLang, setTargetLang] = useState("ar")

  // Handle tab selection from URL
  useEffect(() => {
    const tab = searchParams?.get("tab")
    if (tab && ["text", "voice", "image", "phrases"].includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ar", name: "العربية", flag: "🇲🇦" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ]

  const commonPhrases = [
    {
      category: "Salutations",
      phrases: [
        {
          fr: "Bonjour",
          ar: "السلام عليكم",
          pronunciation: "As-salāmu ʿalaykum",
          context: "Salutation formelle respectueuse",
        },
        { fr: "Bonsoir", ar: "مساء الخير", pronunciation: "Masā' al-khayr", context: "Utilisé après 18h" },
        {
          fr: "Comment allez-vous ?",
          ar: "كيف حالك؟",
          pronunciation: "Kayf ḥālak?",
          context: "Question polie sur le bien-être",
        },
      ],
    },
    {
      category: "Shopping",
      phrases: [
        {
          fr: "Combien ça coûte ?",
          ar: "بكم هذا؟",
          pronunciation: "Bikam hādhā?",
          context: "Question de prix dans les souks",
        },
        {
          fr: "C'est trop cher",
          ar: "هذا غالي جداً",
          pronunciation: "Hādhā ghālī jiddan",
          context: "Pour négocier le prix",
        },
        { fr: "Prix final ?", ar: "آخر سعر؟", pronunciation: "Ākhir siʿr?", context: "Demande du meilleur prix" },
      ],
    },
  ]

  const recentTranslations = [
    { original: "Où est la mosquée ?", translated: "أين المسجد؟", time: "Il y a 5 min" },
    { original: "Je voudrais du thé", translated: "أريد شاي", time: "Il y a 12 min" },
    { original: "Merci beaucoup", translated: "شكراً جزيلاً", time: "Il y a 20 min" },
  ]

  const handleTranslate = () => {
    // Simulation de traduction
    if (sourceText.toLowerCase().includes("bonjour")) {
      setTranslatedText("السلام عليكم")
    } else if (sourceText.toLowerCase().includes("merci")) {
      setTranslatedText("شكراً")
    } else {
      setTranslatedText("Traduction simulée: " + sourceText)
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // Simulation d'enregistrement vocal
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        setSourceText("Bonjour, comment allez-vous ?")
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Traduction Intelligente</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">IA Avancée</Badge>
              <Button variant="outline" size="sm">
                Historique
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="text" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Texte</span>
            </TabsTrigger>
            <TabsTrigger value="voice" className="flex items-center space-x-2">
              <Mic className="h-4 w-4" />
              <span>Vocal</span>
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center space-x-2">
              <ImageIcon className="h-4 w-4" />
              <span>Image</span>
            </TabsTrigger>
            <TabsTrigger value="phrases" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Phrases</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text">
            <Card>
              <CardHeader>
                <CardTitle>Traduction Textuelle</CardTitle>
                <CardDescription>Traduisez instantanément avec contexte culturel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Language Selection */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">De</label>
                    <Select value={sourceLang} onValueChange={setSourceLang}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            <span className="flex items-center space-x-2">
                              <span>{lang.flag}</span>
                              <span>{lang.name}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Vers</label>
                    <Select value={targetLang} onValueChange={setTargetLang}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            <span className="flex items-center space-x-2">
                              <span>{lang.flag}</span>
                              <span>{lang.name}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Translation Interface */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Texte source</label>
                    <Textarea
                      placeholder="Tapez votre texte ici..."
                      value={sourceText}
                      onChange={(e) => setSourceText(e.target.value)}
                      className="min-h-32"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Traduction</label>
                    <div className="relative">
                      <Textarea
                        placeholder="La traduction apparaîtra ici..."
                        value={translatedText}
                        readOnly
                        className="min-h-32 bg-gray-50"
                      />
                      {translatedText && (
                        <div className="absolute top-2 right-2 flex space-x-1">
                          <Button size="sm" variant="ghost">
                            <Volume2 className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Button onClick={handleTranslate} className="w-full" disabled={!sourceText}>
                  Traduire
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="voice">
            <Card>
              <CardHeader>
                <CardTitle>Traduction Vocale</CardTitle>
                <CardDescription>Parlez et obtenez une traduction instantanée</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    onClick={toggleRecording}
                    className={`w-32 h-32 rounded-full ${
                      isRecording ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
                    }`}
                  >
                    <MicIcon className={`h-12 w-12 ${isRecording ? "animate-pulse" : ""}`} />
                  </Button>
                </div>

                <div className="text-lg font-medium">{isRecording ? "Écoute en cours..." : "Appuyez pour parler"}</div>

                {sourceText && (
                  <div className="space-y-4">
                    <Card className="bg-blue-50">
                      <CardContent className="p-4">
                        <div className="text-sm text-gray-600 mb-1">Vous avez dit:</div>
                        <div className="font-medium">{sourceText}</div>
                      </CardContent>
                    </Card>

                    {translatedText && (
                      <Card className="bg-green-50">
                        <CardContent className="p-4">
                          <div className="text-sm text-gray-600 mb-1">Traduction:</div>
                          <div className="font-medium text-lg">{translatedText}</div>
                          <Button size="sm" variant="outline" className="mt-2">
                            <Volume2 className="h-4 w-4 mr-2" />
                            Écouter
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="image">
            <Card>
              <CardHeader>
                <CardTitle>Traduction d'Images</CardTitle>
                <CardDescription>Photographiez du texte pour une traduction instantanée</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
                  <ImageIcon className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <div className="text-lg font-medium mb-2">Prenez une photo</div>
                  <div className="text-gray-600 mb-4">Panneaux, menus, documents - nous traduisons tout !</div>
                  <Button>
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Ouvrir l'appareil photo
                  </Button>
                </div>

                <div className="text-sm text-gray-500">
                  Formats supportés: Panneaux de rue, menus de restaurant, documents, etc.
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="phrases">
            <div className="space-y-6">
              {commonPhrases.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                    <CardDescription>Phrases essentielles avec contexte culturel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.phrases.map((phrase, phraseIndex) => (
                        <div key={phraseIndex} className="border rounded-lg p-4 hover:bg-gray-50">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <div className="font-medium">{phrase.fr}</div>
                              <div className="text-sm text-gray-600">Français</div>
                            </div>
                            <div>
                              <div className="font-medium text-lg" dir="rtl">
                                {phrase.ar}
                              </div>
                              <div className="text-sm text-gray-600">{phrase.pronunciation}</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="outline">
                                <Volume2 className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-blue-600 bg-blue-50 p-2 rounded">💡 {phrase.context}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Recent Translations */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Traductions Récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTranslations.map((translation, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">{translation.original}</div>
                    <div className="text-gray-600" dir="rtl">
                      {translation.translated}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{translation.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
