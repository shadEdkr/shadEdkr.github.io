import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, AlertTriangle, Users, Trash2 } from "lucide-react"
import Link from "next/link"

const dumpsterSpots = [
  {
    id: 1,
    name: "Wiley Hall Dumpsters",
    location: "Behind Wiley Hall",
    lastUpdated: "2 hours ago",
    itemCount: 12,
    hotItems: ["Desk chair", "Mini fridge", "Textbooks"],
    urgency: "high",
    coordinates: { x: 25, y: 30 },
  },
  {
    id: 2,
    name: "Cary Quad Collection",
    location: "Cary Quad East Side",
    lastUpdated: "45 minutes ago",
    itemCount: 8,
    hotItems: ["Kitchen supplies", "Decorations"],
    urgency: "medium",
    coordinates: { x: 60, y: 45 },
  },
  {
    id: 3,
    name: "Third Street Suites",
    location: "Third Street Parking Lot",
    lastUpdated: "1 hour ago",
    itemCount: 15,
    hotItems: ["Furniture", "Electronics", "Clothes"],
    urgency: "high",
    coordinates: { x: 40, y: 70 },
  },
  {
    id: 4,
    name: "Harrison Hall Area",
    location: "Harrison Hall South",
    lastUpdated: "3 hours ago",
    itemCount: 5,
    hotItems: ["Books", "School supplies"],
    urgency: "low",
    coordinates: { x: 75, y: 25 },
  },
]

export default function MapPage() {
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
              <Link href="/browse" className="text-gray-600 hover:text-gray-900">
                Browse
              </Link>
              <Link href="/post" className="text-gray-600 hover:text-gray-900">
                Post Item
              </Link>
              <Link href="/map" className="text-yellow-600 font-medium">
                Dumpster Map
              </Link>
              <Button variant="outline">Sign In</Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🗺️ Dumpster Radar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time map of where students are finding and dropping off free items around campus. Help fellow
            Boilermakers by reporting good finds!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Campus Hotspots</span>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>High Activity</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Medium</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Low</span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Simplified Campus Map */}
                <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-green-200 rounded-b-lg overflow-hidden">
                  {/* Campus Buildings (simplified rectangles) */}
                  <div className="absolute inset-4">
                    {/* Buildings */}
                    <div
                      className="absolute bg-gray-300 rounded"
                      style={{ left: "20%", top: "25%", width: "15%", height: "20%" }}
                    ></div>
                    <div
                      className="absolute bg-gray-300 rounded"
                      style={{ left: "55%", top: "40%", width: "20%", height: "15%" }}
                    ></div>
                    <div
                      className="absolute bg-gray-300 rounded"
                      style={{ left: "35%", top: "65%", width: "18%", height: "20%" }}
                    ></div>
                    <div
                      className="absolute bg-gray-300 rounded"
                      style={{ left: "70%", top: "20%", width: "15%", height: "18%" }}
                    ></div>

                    {/* Roads */}
                    <div className="absolute bg-gray-400 h-1" style={{ left: "0%", top: "50%", width: "100%" }}></div>
                    <div className="absolute bg-gray-400 w-1" style={{ left: "50%", top: "0%", height: "100%" }}></div>

                    {/* Dumpster Spots */}
                    {dumpsterSpots.map((spot) => (
                      <div
                        key={spot.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{
                          left: `${spot.coordinates.x}%`,
                          top: `${spot.coordinates.y}%`,
                        }}
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
                            spot.urgency === "high"
                              ? "bg-red-500"
                              : spot.urgency === "medium"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          }`}
                        >
                          <Trash2 className="w-3 h-3 text-white" />
                        </div>

                        {/* Tooltip */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {spot.name} - {spot.itemCount} items
                        </div>
                      </div>
                    ))}

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 text-xs">
                      <div className="font-semibold mb-2">Purdue Campus</div>
                      <div className="space-y-1">
                        <div>🏢 Residence Halls</div>
                        <div>🗑️ Active Dumpster Spots</div>
                        <div>📍 Click markers for details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📊 Today's Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Items Spotted</span>
                    <span className="font-semibold">40</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Active Locations</span>
                    <span className="font-semibold">4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Students Helped</span>
                    <span className="font-semibold">23</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Report Button */}
            <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
              <CardContent className="p-6 text-center">
                <Trash2 className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Spotted Good Items?</h3>
                <p className="text-sm text-gray-600 mb-4">Help other students by reporting your finds!</p>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600">
                  Report Items
                </Button>
              </CardContent>
            </Card>

            {/* Active Spots List */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">🔥 Hot Spots Right Now</h3>
              {dumpsterSpots.map((spot) => (
                <Card key={spot.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{spot.name}</h4>
                      <Badge
                        className={
                          spot.urgency === "high"
                            ? "bg-red-500"
                            : spot.urgency === "medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                        }
                      >
                        {spot.itemCount} items
                      </Badge>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {spot.location}
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4 mr-1" />
                      Updated {spot.lastUpdated}
                    </div>

                    <div className="text-sm">
                      <span className="text-gray-600">Hot items: </span>
                      <span className="font-medium">{spot.hotItems.join(", ")}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>🤔 How Dumpster Radar Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-medium mb-2">Students Report</h4>
                <p className="text-sm text-gray-600">
                  Students spot good items near dumpsters and report them on the map
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-medium mb-2">Real-Time Updates</h4>
                <p className="text-sm text-gray-600">
                  The map updates in real-time showing where the best finds are happening
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-medium mb-2">Quick Action</h4>
                <p className="text-sm text-gray-600">
                  Get notified about urgent finds and help save items from the trash
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
