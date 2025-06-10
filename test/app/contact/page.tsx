import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Recycle, Mail, MessageCircle, Bug, Lightbulb, HelpCircle, Shield } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We're here to help! Reach out with any questions or feedback.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-yellow-600" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john.doe@purdue.edu" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="safety">Safety Concern</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="Brief description of your inquiry" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-yellow-400 text-gray-800 hover:bg-yellow-500">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 24-48 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & FAQ */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">support@boilerswap.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-gray-600">24-48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Inquiries */}
            <Card>
              <CardHeader>
                <CardTitle>Common Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Bug className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Technical Issues</p>
                    <p className="text-gray-600 text-sm">Problems with posting, claiming, or using the platform</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Feature Requests</p>
                    <p className="text-gray-600 text-sm">Ideas for improving BoilerSwap</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Safety Concerns</p>
                    <p className="text-gray-600 text-sm">Report inappropriate behavior or safety issues</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-medium">General Questions</p>
                    <p className="text-gray-600 text-sm">How BoilerSwap works, account issues, etc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium mb-1">How do I verify my Purdue email?</p>
                  <p className="text-gray-600 text-sm">
                    We send a verification link to your @purdue.edu email address during signup.
                  </p>
                </div>

                <div>
                  <p className="font-medium mb-1">What if someone doesn't show up for pickup?</p>
                  <p className="text-gray-600 text-sm">
                    Contact us and we'll help resolve the issue. Repeated no-shows may result in account restrictions.
                  </p>
                </div>

                <div>
                  <p className="font-medium mb-1">Can I edit my post after submitting?</p>
                  <p className="text-gray-600 text-sm">
                    Currently, you'll need to delete and repost. We're working on an edit feature!
                  </p>
                </div>

                <div>
                  <p className="font-medium mb-1">Is BoilerSwap only for Purdue students?</p>
                  <p className="text-gray-600 text-sm">
                    Yes, you need a valid @purdue.edu email address to create an account.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Safety Emergency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm mb-2">If you feel unsafe during a BoilerSwap exchange:</p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Call Purdue Police: (765) 494-8221</li>
                  <li>• Emergency: 911</li>
                  <li>• Report to us immediately</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
