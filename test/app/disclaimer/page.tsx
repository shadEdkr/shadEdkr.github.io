import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Recycle, Shield, AlertTriangle, FileText, Users } from "lucide-react"
import Link from "next/link"

export default function DisclaimerPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service & Disclaimer</h1>
          <p className="text-xl text-gray-600">Important information about using BoilerSwap</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: December 2024</p>
        </div>

        <div className="space-y-8">
          {/* Important Notice */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-yellow-800">
                <AlertTriangle className="w-5 h-5" />
                <span>Important Notice</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-800">
                By using BoilerSwap, you agree to these terms and acknowledge that you understand the risks involved in
                meeting strangers and exchanging items. Please read this document carefully.
              </p>
            </CardContent>
          </Card>

          {/* Platform Purpose */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Platform Purpose</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                BoilerSwap is a free platform designed to facilitate the exchange of items between Purdue University
                students. Our goal is to reduce waste, save money, and build community connections.
              </p>
              <p className="text-gray-700">This platform is intended for:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Giving away items you no longer need</li>
                <li>Finding items you need for free</li>
                <li>Reducing waste and promoting sustainability</li>
                <li>Building connections within the Purdue community</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-600" />
                <span>User Responsibilities</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-gray-900">As a BoilerSwap user, you agree to:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Use only your valid @purdue.edu email address</li>
                <li>Provide accurate descriptions of items</li>
                <li>Be honest about item conditions and any defects</li>
                <li>Respond promptly to messages and inquiries</li>
                <li>Show up on time for arranged pickups</li>
                <li>Treat other users with respect and courtesy</li>
                <li>Report any safety concerns or inappropriate behavior</li>
                <li>Only post items that are legal to possess and transfer</li>
                <li>Not use the platform for commercial purposes</li>
              </ul>
            </CardContent>
          </Card>

          {/* Safety Disclaimer */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-red-800">
                <Shield className="w-5 h-5" />
                <span>Safety Disclaimer</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-800 font-semibold">
                IMPORTANT: BoilerSwap does not verify the identity, background, or intentions of users.
              </p>
              <div className="text-red-700 space-y-2">
                <p>
                  <strong>You meet and interact with other users at your own risk.</strong>
                </p>
                <p>Safety recommendations:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Always meet in public, well-lit areas</li>
                  <li>Consider bringing a friend to exchanges</li>
                  <li>Trust your instincts - if something feels wrong, leave</li>
                  <li>Don't share personal information beyond what's necessary</li>
                  <li>Use campus locations when possible</li>
                  <li>Inform someone about your meeting plans</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Liability Limitations */}
          <Card>
            <CardHeader>
              <CardTitle>Liability Limitations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>BoilerSwap and its creators are not responsible for:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>The quality, safety, or legality of items posted</li>
                <li>The accuracy of item descriptions</li>
                <li>Failed exchanges or no-shows</li>
                <li>Disputes between users</li>
                <li>Any injuries, damages, or losses during exchanges</li>
                <li>Theft, fraud, or other criminal activity</li>
                <li>Technical issues or platform downtime</li>
                <li>Loss of data or account information</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Use of this platform is entirely at your own risk.</strong>
              </p>
            </CardContent>
          </Card>

          {/* Prohibited Items */}
          <Card>
            <CardHeader>
              <CardTitle>Prohibited Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">The following items are strictly prohibited on BoilerSwap:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Weapons of any kind</li>
                <li>Illegal drugs or substances</li>
                <li>Alcohol (users under 21)</li>
                <li>Stolen or counterfeit items</li>
                <li>Items that violate copyright or intellectual property</li>
                <li>Hazardous materials or chemicals</li>
                <li>Live animals</li>
                <li>Items requiring special licenses or permits</li>
                <li>Adult content or materials</li>
                <li>Items that violate Purdue University policies</li>
              </ul>
            </CardContent>
          </Card>

          {/* Account Termination */}
          <Card>
            <CardHeader>
              <CardTitle>Account Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">We reserve the right to suspend or terminate accounts for:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Violation of these terms</li>
                <li>Posting prohibited items</li>
                <li>Harassment or inappropriate behavior</li>
                <li>Fraudulent activity</li>
                <li>Repeated no-shows or unreliable behavior</li>
                <li>Use of non-Purdue email addresses</li>
                <li>Commercial use of the platform</li>
              </ul>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">We collect minimal personal information necessary for platform operation:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Purdue email address for account verification</li>
                <li>Name for user identification</li>
                <li>Item posts and messages</li>
                <li>Basic usage analytics</li>
              </ul>
              <p className="text-gray-700">
                We do not sell or share your personal information with third parties. Your email address is only visible
                to users you're actively communicating with about exchanges.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We may update these terms periodically. Continued use of BoilerSwap after changes constitutes acceptance
                of the new terms. We will notify users of significant changes via email or platform announcements.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Questions or Concerns?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">
                If you have questions about these terms or need to report an issue, please contact us.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Support</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Acknowledgment */}
          <Card className="bg-gray-100">
            <CardContent className="p-6">
              <p className="text-center text-gray-700 font-medium">
                By using BoilerSwap, you acknowledge that you have read, understood, and agree to these terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
