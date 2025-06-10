import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, Camera, ArrowLeft, Recycle } from "lucide-react"
import Link from "next/link"

export default function PostPage() {
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

      <div className="container mx-auto px-6 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post a New Item</h1>
          <p className="text-gray-600">Help a fellow Boilermaker and keep usable items out of the trash!</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="w-5 h-5" />
              <span>Item Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Item Type Dropdown */}
            <div>
              <Label htmlFor="itemType" className="text-base font-medium">
                Item Type *
              </Label>
              <Select>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select item type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="furniture-chair">Chair</SelectItem>
                  <SelectItem value="furniture-desk">Desk</SelectItem>
                  <SelectItem value="furniture-bed">Bed/Mattress</SelectItem>
                  <SelectItem value="furniture-dresser">Dresser</SelectItem>
                  <SelectItem value="furniture-shelf">Shelf/Bookcase</SelectItem>
                  <SelectItem value="electronics-fridge">Mini Fridge</SelectItem>
                  <SelectItem value="electronics-microwave">Microwave</SelectItem>
                  <SelectItem value="electronics-tv">TV/Monitor</SelectItem>
                  <SelectItem value="electronics-laptop">Laptop/Computer</SelectItem>
                  <SelectItem value="electronics-phone">Phone/Tablet</SelectItem>
                  <SelectItem value="books-textbook">Textbook</SelectItem>
                  <SelectItem value="books-novel">Novel/Fiction</SelectItem>
                  <SelectItem value="books-supplies">School Supplies</SelectItem>
                  <SelectItem value="kitchen-cookware">Cookware</SelectItem>
                  <SelectItem value="kitchen-dishes">Dishes/Utensils</SelectItem>
                  <SelectItem value="kitchen-appliance">Kitchen Appliance</SelectItem>
                  <SelectItem value="clothing-casual">Casual Clothing</SelectItem>
                  <SelectItem value="clothing-formal">Formal Wear</SelectItem>
                  <SelectItem value="clothing-shoes">Shoes</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Title */}
            <div>
              <Label htmlFor="title" className="text-base font-medium">
                Title *
              </Label>
              <Input id="title" placeholder="e.g., IKEA Desk Chair - Great Condition" className="mt-2" />
            </div>

            {/* Condition */}
            <div>
              <Label className="text-base font-medium">Condition *</Label>
              <RadioGroup className="mt-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="excellent" id="excellent" />
                  <Label htmlFor="excellent">Excellent - Like new, minimal wear</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="good" id="good" />
                  <Label htmlFor="good">Good - Some wear but fully functional</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fair" id="fair" />
                  <Label htmlFor="fair">Fair - Noticeable wear but still usable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="poor" id="poor" />
                  <Label htmlFor="poor">Poor - Heavy wear, may need repair</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Description (Optional) */}
            <div>
              <Label htmlFor="description" className="text-base font-medium">
                Description (Optional)
              </Label>
              <p className="text-sm text-gray-500 mb-2">Add any additional details, flaws, or special instructions</p>
              <Textarea
                id="description"
                placeholder="e.g., Moving out tomorrow, has a small scratch on the left arm but doesn't affect functionality..."
                className="mt-2 min-h-[100px]"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <Label htmlFor="photos" className="text-base font-medium">
                Photos
              </Label>
              <p className="text-sm text-gray-500 mb-3">Add up to 3 photos to help others see your item</p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-yellow-400 transition-colors cursor-pointer">
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Click to upload photos or drag and drop</p>
                <p className="text-sm text-gray-400">PNG, JPG up to 10MB each</p>
                <input type="file" id="photos" multiple accept="image/*" className="hidden" />
              </div>
            </div>

            {/* Pickup Location */}
            <div>
              <Label className="text-base font-medium">Pickup Location *</Label>
              <p className="text-sm text-gray-500 mb-3">Where can people pick this up?</p>
              <Select>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select pickup location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cary-east">Cary Quad - East</SelectItem>
                  <SelectItem value="cary-west">Cary Quad - West</SelectItem>
                  <SelectItem value="wiley">Wiley Hall</SelectItem>
                  <SelectItem value="harrison">Harrison Hall</SelectItem>
                  <SelectItem value="earhart">Earhart Hall</SelectItem>
                  <SelectItem value="hillenbrand">Hillenbrand Hall</SelectItem>
                  <SelectItem value="shreve">Shreve Hall</SelectItem>
                  <SelectItem value="tarkington">Tarkington Hall</SelectItem>
                  <SelectItem value="third-street">Third Street Suites</SelectItem>
                  <SelectItem value="university-residences">University Residences</SelectItem>
                  <SelectItem value="off-campus-west">Off-Campus West Lafayette</SelectItem>
                  <SelectItem value="off-campus-other">Off-Campus Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Pickup Details */}
            <div>
              <Label htmlFor="pickup-details" className="text-base font-medium">
                Pickup Details
              </Label>
              <Textarea
                id="pickup-details"
                placeholder="e.g., Meet at main entrance, available weekdays after 3pm, call when you arrive..."
                className="mt-2"
              />
            </div>

            {/* Urgency Level */}
            <div>
              <Label className="text-base font-medium">Urgency Level *</Label>
              <p className="text-sm text-gray-500 mb-3">How quickly do you need this item picked up?</p>
              <RadioGroup className="mt-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="low" />
                  <Label htmlFor="low">
                    <div>
                      <div className="font-medium">Flexible (3+ days)</div>
                      <div className="text-sm text-gray-500">No rush, available for a week or more</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">
                    <div>
                      <div className="font-medium">Soon (1-2 days)</div>
                      <div className="text-sm text-gray-500">Would like it gone in the next couple days</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high">
                    <div>
                      <div className="font-medium text-red-600">URGENT (&lt; 24 hours)</div>
                      <div className="text-sm text-gray-500">Moving out today/tomorrow, needs to go ASAP!</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Contact Preferences */}
            <div>
              <Label className="text-base font-medium">Contact Information *</Label>
              <Input placeholder="Your Purdue email or phone number" className="mt-2" />
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t">
              <Button className="w-full bg-yellow-400 text-gray-800 hover:bg-yellow-500 py-3 text-lg">
                Post My Free Item
              </Button>
              <p className="text-sm text-gray-500 text-center mt-3">
                By posting, you agree to our{" "}
                <Link href="/disclaimer" className="text-yellow-600 hover:underline">
                  terms of service
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-lg">💡 Tips for a Great Post</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Take clear, well-lit photos from multiple angles</li>
              <li>• Be honest about any flaws or damage</li>
              <li>• Include dimensions for furniture items</li>
              <li>• Respond quickly to interested students</li>
              <li>• Be flexible with pickup times when possible</li>
              <li>• Consider bundling related items together</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
