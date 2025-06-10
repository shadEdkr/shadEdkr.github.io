"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Recycle, Mail, Lock, User } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login")

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

      <div className="container mx-auto px-6 py-16 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to BoilerSwap</h1>
          <p className="text-gray-600">Join the Purdue community of sustainable sharing</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="forgot">Reset</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login with Purdue Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Purdue Email Address</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="email" type="email" placeholder="yourname@purdue.edu" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="password" type="password" className="pl-10" />
                  </div>
                </div>

                <Button className="w-full bg-yellow-400 text-gray-800 hover:bg-yellow-500">Login</Button>

                <div className="text-center">
                  <button onClick={() => setActiveTab("forgot")} className="text-yellow-600 hover:underline text-sm">
                    Forgot your password?
                  </button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="fullName" placeholder="John Doe" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="signupEmail">Purdue Email Address</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="signupEmail" type="email" placeholder="yourname@purdue.edu" className="pl-10" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Must be a valid @purdue.edu email address</p>
                </div>

                <div>
                  <Label htmlFor="signupPassword">Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="signupPassword" type="password" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="confirmPassword" type="password" className="pl-10" />
                  </div>
                </div>

                <Button className="w-full bg-yellow-400 text-gray-800 hover:bg-yellow-500">Create Account</Button>

                <p className="text-xs text-gray-500 text-center">
                  By creating an account, you agree to our{" "}
                  <Link href="/disclaimer" className="text-yellow-600 hover:underline">
                    Terms of Service
                  </Link>
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forgot">
            <Card>
              <CardHeader>
                <CardTitle>Reset Password</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Enter your Purdue email address and we'll send you a link to reset your password.
                </p>

                <div>
                  <Label htmlFor="resetEmail">Purdue Email Address</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="resetEmail" type="email" placeholder="yourname@purdue.edu" className="pl-10" />
                  </div>
                </div>

                <Button className="w-full bg-yellow-400 text-gray-800 hover:bg-yellow-500">Send Reset Link</Button>

                <div className="text-center">
                  <button onClick={() => setActiveTab("login")} className="text-yellow-600 hover:underline text-sm">
                    Back to login
                  </button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
