import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Recycle, Heart, Users, Leaf, Target, Award, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About BoilerSwap</h1>
          <p className="text-xl text-gray-600">Building a sustainable community at Purdue, one swap at a time</p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center space-x-2">
                <Target className="w-6 h-6 text-yellow-600" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                BoilerSwap exists to reduce waste, save money, and build community among Purdue students. We believe
                that one person's unwanted item can be another's treasure, and by facilitating these exchanges, we're
                making our campus more sustainable and our community stronger.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              BoilerSwap was born from a simple observation: every semester, especially during move-out periods, tons of
              perfectly good items end up in dumpsters around campus. Meanwhile, other students are spending money on
              the same items at stores.
            </p>
            <p className="mb-4">
              Created by Purdue students for Purdue students, BoilerSwap bridges this gap by providing a platform where
              students can easily give away items they no longer need and find items they do need - all for free.
            </p>
            <p>
              What started as a solution to reduce waste has grown into a community-building platform that embodies the
              Boilermaker spirit of helping one another and making a positive impact.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span>Sustainability</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're committed to reducing waste and promoting reuse. Every item shared through BoilerSwap is one
                  less item in a landfill and one less new item that needs to be manufactured.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Community</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in the power of community. BoilerSwap connects students, builds relationships, and fosters
                  the spirit of mutual aid that makes Purdue special.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-600" />
                  <span>Accessibility</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Everyone deserves access to the items they need. BoilerSwap makes essential items available to all
                  students, regardless of their financial situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Recycle className="w-5 h-5 text-yellow-600" />
                  <span>Environmental Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Items Saved from Trash</span>
                    <span className="font-bold text-2xl text-yellow-600">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Estimated CO₂ Saved</span>
                    <span className="font-bold text-2xl text-green-600">2.3 tons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Landfill Waste Prevented</span>
                    <span className="font-bold text-2xl text-blue-600">5.8 tons</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Community Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Students</span>
                    <span className="font-bold text-2xl text-blue-600">892</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Money Saved</span>
                    <span className="font-bold text-2xl text-green-600">$15,430</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Successful Exchanges</span>
                    <span className="font-bold text-2xl text-yellow-600">1,089</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="mb-16">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center space-x-2">
                <Award className="w-6 h-6 text-yellow-600" />
                <span>Recognition</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Purdue Sustainability Office</strong> - Featured as a student-led sustainability initiative
                </p>
                <p className="text-gray-600">
                  <strong>Residence Hall Association</strong> - Promoted as a move-out resource
                </p>
                <p className="text-gray-600">
                  <strong>Student Government</strong> - Recognized for community impact
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Team</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 text-center">
                BoilerSwap is developed and maintained by a dedicated team of Purdue students who are passionate about
                sustainability and community building. We're always looking for feedback and new ideas to make the
                platform better for everyone.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Mail className="w-6 h-6 text-yellow-600" />
                <span>Get in Touch</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Have questions, suggestions, or want to get involved? We'd love to hear from you!
              </p>
              <Link href="/contact">
                <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500">Contact Us</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
