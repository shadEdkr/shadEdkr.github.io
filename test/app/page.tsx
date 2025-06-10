import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, MapPin, Clock, Recycle } from "lucide-react"
import Link from "next/link"

const featuredItems = [
  {
    id: 1,
    title: "Desk Chair - Great Condition",
    description: "Moving out tomorrow! Comfortable office chair, barely used. Perfect for studying.",
    category: "Furniture",
    location: "Cary Quad - East",
    timeLeft: "Expires in 8 hours",
    image: "/placeholder.svg?height=200&width=300",
    urgent: true,
    urgencyLevel: "high",
  },
  {
    id: 2,
    title: "Mini Fridge - Works Perfect",
    description: "Compact fridge, great for dorm rooms. Clean and in excellent working condition.",
    category: "Electronics",
    location: "Wiley Hall",
    timeLeft: "Available",
    image: "/placeholder.svg?height=200&width=300",
    urgent: false,
    urgencyLevel: "medium",
  },
  {
    id: 3,
    title: "CS 180 Textbook + Notes",
    description: "Java programming textbook with my handwritten notes. Great for future CS students!",
    category: "Books",
    location: "Harrison Hall",
    timeLeft: "Available",
    image: "/placeholder.svg?height=200&width=300",
    urgent: false,
    urgencyLevel: "low",
  },
]

const stats = [
  { label: "Items Saved from Trash", value: "1,247" },
  { label: "Active Students", value: "892" },
  { label: "Money Saved", value: "$15,430" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Recycle className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-bold">BoilerSwap</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/how-it-works" className="hover:text-yellow-400 transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link href="/auth">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-800"
              >
                Login with Purdue Email
              </Button>
            </Link>
            <Link href="/post">
              <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500">
                <Plus className="w-4 h-4 mr-2" />
                Post Item
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Give Away, Grab, Save Money!</h1>
          <p className="text-xl text-gray-600 mb-12">
            The sustainable way for Purdue students to share, reuse, and reduce waste
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <Input placeholder="Search for items (e.g., desk, microwave, textbooks...)" className="w-full" />
              </div>
              <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="cary">Cary Quad</SelectItem>
                  <SelectItem value="wiley">Wiley Hall</SelectItem>
                  <SelectItem value="harrison">Harrison Hall</SelectItem>
                  <SelectItem value="earhart">Earhart</SelectItem>
                  <SelectItem value="hillenbrand">Hillenbrand</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Urgency</SelectItem>
                  <SelectItem value="high">Urgent (&lt; 24h)</SelectItem>
                  <SelectItem value="medium">Soon (1-2 days)</SelectItem>
                  <SelectItem value="low">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <Card
                key={item.id}
                className={`overflow-hidden hover:shadow-lg transition-shadow ${
                  item.urgencyLevel === "high"
                    ? "border-l-4 border-l-red-500"
                    : item.urgencyLevel === "medium"
                      ? "border-l-4 border-l-yellow-500"
                      : "border-l-4 border-l-green-500"
                }`}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">
                    {item.category === "Furniture" && "🪑"}
                    {item.category === "Electronics" && "📱"}
                    {item.category === "Books" && "📚"}
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <Badge className="bg-yellow-100 text-yellow-800">{item.category}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardHeader>

                <CardContent className="pt-0 pb-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                  {item.urgent && (
                    <div className="flex items-center text-sm text-red-600 font-medium">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.timeLeft}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <Link href="/post">
        <Button
          size="lg"
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-yellow-400 text-gray-800 hover:bg-yellow-500 shadow-lg"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </Link>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Recycle className="w-6 h-6 text-yellow-400" />
                <span className="text-xl font-bold">BoilerSwap</span>
              </div>
              <p className="text-gray-400">Making Purdue more sustainable, one swap at a time.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/how-it-works" className="hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-white">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/?category=furniture" className="hover:text-white">
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/?category=electronics" className="hover:text-white">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link href="/?category=books" className="hover:text-white">
                    Books
                  </Link>
                </li>
                <li>
                  <Link href="/?category=kitchen" className="hover:text-white">
                    Kitchen
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/auth" className="hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/auth?mode=signup" className="hover:text-white">
                    Create Account
                  </Link>
                </li>
                <li>
                  <Link href="/auth?mode=forgot" className="hover:text-white">
                    Forgot Password
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BoilerSwap. Made with ❤️ by Purdue students, for Purdue students.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
