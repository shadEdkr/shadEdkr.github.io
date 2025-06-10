import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Clock, Grid, List } from "lucide-react"
import Link from "next/link"

const items = [
  {
    id: 1,
    title: "IKEA Desk Chair",
    description: "Great condition, moving out tomorrow! Adjustable height, comfortable for long study sessions.",
    category: "Furniture",
    location: "Wiley Hall",
    timeLeft: "2 hours left",
    image: "/placeholder.svg?height=200&width=300",
    urgent: true,
    poster: "Sarah M.",
  },
  {
    id: 2,
    title: "Microwave & Mini Fridge",
    description: "Both work perfectly, pick up ASAP. Microwave is 0.7 cu ft, fridge is 1.7 cu ft.",
    category: "Appliances",
    location: "Cary Quad",
    timeLeft: "6 hours left",
    image: "/placeholder.svg?height=200&width=300",
    urgent: false,
    poster: "Mike R.",
  },
  {
    id: 3,
    title: "Textbooks Bundle",
    description: "CS 180, MATH 161, ENGL 106. All in good condition with minimal highlighting.",
    category: "Books",
    location: "Harrison Hall",
    timeLeft: "1 day left",
    image: "/placeholder.svg?height=200&width=300",
    urgent: false,
    poster: "Alex K.",
  },
  {
    id: 4,
    title: "Kitchen Supplies Set",
    description: "Pots, pans, utensils - everything you need! Perfect for apartment cooking.",
    category: "Kitchen",
    location: "Third Street Suites",
    timeLeft: "3 hours left",
    image: "/placeholder.svg?height=200&width=300",
    urgent: true,
    poster: "Emma L.",
  },
  {
    id: 5,
    title: 'Gaming Monitor 24"',
    description: "1080p, 144Hz, perfect for gaming or studying. No dead pixels, works great!",
    category: "Electronics",
    location: "Hillenbrand Hall",
    timeLeft: "5 hours left",
    image: "/placeholder.svg?height=200&width=300",
    urgent: false,
    poster: "Jake P.",
  },
  {
    id: 6,
    title: "Dorm Room Decorations",
    description: "Posters, fairy lights, plants, and more. Make your room feel like home!",
    category: "Decor",
    location: "Earhart Hall",
    timeLeft: "8 hours left",
    image: "/placeholder.svg?height=200&width=300",
    urgent: false,
    poster: "Lily C.",
  },
]

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BS</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">BoilerSwap</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/browse" className="text-yellow-600 font-medium">
                Browse
              </Link>
              <Link href="/post" className="text-gray-600 hover:text-gray-900">
                Post Item
              </Link>
              <Link href="/map" className="text-gray-600 hover:text-gray-900">
                Dumpster Map
              </Link>
              <Button variant="outline">Sign In</Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search for items..." className="pl-10 pr-4 py-3" />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="appliances">Appliances</SelectItem>
                  <SelectItem value="decor">Decor</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="wiley">Wiley Hall</SelectItem>
                  <SelectItem value="cary">Cary Quad</SelectItem>
                  <SelectItem value="harrison">Harrison Hall</SelectItem>
                  <SelectItem value="third-street">Third Street Suites</SelectItem>
                  <SelectItem value="hillenbrand">Hillenbrand Hall</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="urgent">Most Urgent</SelectItem>
                  <SelectItem value="location">By Location</SelectItem>
                  <SelectItem value="category">By Category</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <p className="text-gray-600">{items.length} items available</p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border hover:border-yellow-200"
            >
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                {item.urgent && <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">URGENT</Badge>}
                <Badge className="absolute top-2 left-2 bg-black/70 text-white">{item.category}</Badge>
              </div>

              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                  <div className="flex items-center text-sm text-orange-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.timeLeft}
                  </div>
                  <div className="text-sm text-gray-500">Posted by {item.poster}</div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600">
                  Claim Item
                </Button>
                <Button variant="outline" size="sm">
                  Message
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-yellow-400">
            Load More Items
          </Button>
        </div>
      </div>
    </div>
  )
}
