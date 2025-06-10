import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Recycle, Upload, Search, MessageCircle, HandHeart, Clock, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Recycle className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-bold">BoilerSwap</span>
          </Link>

          <Link href="/">
            <Button
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How BoilerSwap Works</h1>
          <p className="text-xl text-gray-600">Three simple steps to reduce waste and help fellow Boilermakers</p>
        </div>

        {/* Main Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-xl">1. Post Your Item</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Take a quick photo, add a description, and set your pickup location. It takes less than 2 minutes!
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-xl">2. Students Find & Claim</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Other students browse, search, and claim items they need. They'll contact you directly to arrange
                pickup.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-xl">3. Make the Exchange</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Meet up, hand over the item, and feel good about helping a fellow student while saving the environment!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Process */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">For Item Givers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="w-5 h-5 text-yellow-600" />
                    <span>Posting Items</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Choose from predefined item categories</li>
                    <li>• Rate the condition honestly</li>
                    <li>• Add photos and descriptions</li>
                    <li>• Set pickup location and urgency</li>
                    <li>• Items auto-expire based on urgency</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-yellow-600" />
                    <span>Managing Requests</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Receive notifications when items are claimed</li>
                    <li>• Communicate directly with interested students</li>
                    <li>• Arrange convenient pickup times</li>
                    <li>• Mark items as picked up when complete</li>
                    <li>• Build your community reputation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">For Item Seekers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Search className="w-5 h-5 text-yellow-600" />
                    <span>Finding Items</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Browse by category, location, or urgency</li>
                    <li>• Use search to find specific items</li>
                    <li>• See item condition and photos</li>
                    <li>• Check pickup locations and times</li>
                    <li>• Get notified about urgent items</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HandHeart className="w-5 h-5 text-yellow-600" />
                    <span>Claiming Items</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Click "Claim It!" to express interest</li>
                    <li>• Message the poster to arrange pickup</li>
                    <li>• Coordinate meeting times and locations</li>
                    <li>• Be respectful and punctual</li>
                    <li>• Leave feedback for the community</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety & Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-yellow-600" />
                    <span>Safety First</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Meet in public, well-lit areas</li>
                    <li>• Bring a friend if possible</li>
                    <li>• Trust your instincts</li>
                    <li>• Use Purdue email for verification</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <span>Be Timely</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Respond to messages quickly</li>
                    <li>• Show up on time for pickups</li>
                    <li>• Cancel if plans change</li>
                    <li>• Respect urgency levels</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-yellow-600" />
                    <span>Community Spirit</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Be honest about item conditions</li>
                    <li>• Help fellow Boilermakers</li>
                    <li>• Keep the platform positive</li>
                    <li>• Report any issues</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-yellow-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Swapping?</h2>
          <p className="text-gray-600 mb-6">Join hundreds of Purdue students making campus more sustainable</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/post">
              <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500">Post Your First Item</Button>
            </Link>
            <Link href="/">
              <Button variant="outline">Browse Available Items</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
