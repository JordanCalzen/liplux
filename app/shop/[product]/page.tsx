import Image from "next/image"
import { Star, Heart, ShoppingBag, Check, Truck, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from "next/link"

// This is a mock product data - in a real app, this would come from a database or API
const product = {
  id: 1,
  name: "Rose Petal Lip Balm",
  description: "Nourishing lip balm with rose extract and shea butter for soft, hydrated lips all day long.",
  price: "$14.99",
  rating: 4.8,
  reviewCount: 124,
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  colors: [
    { name: "Rose Pink", value: "pink" },
    { name: "Clear", value: "clear" },
    { name: "Soft Peach", value: "peach" },
  ],
  details: {
    ingredients:
      "Butyrospermum Parkii (Shea) Butter, Cocos Nucifera (Coconut) Oil, Beeswax, Rosa Damascena (Rose) Extract, Tocopherol (Vitamin E), Natural Flavor, Rosa Centifolia Flower Extract.",
    howToUse: "Apply to lips as needed throughout the day. For best results, use after exfoliating with our Lip Scrub.",
    benefits: [
      "Deeply hydrates and nourishes dry lips",
      "Provides long-lasting moisture",
      "Contains antioxidants to protect lips",
      "Subtle rose scent for a luxurious experience",
      "Non-sticky formula",
    ],
  },
  relatedProducts: [
    {
      id: 2,
      name: "Honey Sugar Lip Scrub",
      price: "$16.99",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Peach Shimmer Lip Gloss",
      price: "$18.99",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "Mint Revival Lip Mask",
      price: "$22.99",
      image: "/placeholder.svg?height=400&width=400",
    },
  ],
}

export default function ProductPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/shop" className="flex items-center text-sm text-gray-600 hover:text-pink-500">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all products
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product images */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - View ${index + 1}`}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 lg:mt-0 lg:pl-8">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-2xl font-medium text-gray-900">{product.price}</p>
                </div>
                <div className="mt-3">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={`h-5 w-5 ${
                            rating < Math.floor(product.rating)
                              ? "fill-pink-400 text-pink-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-600">
                      {product.rating} ({product.reviewCount} reviews)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <RadioGroup defaultValue={product.colors[0].value} className="mt-2">
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <Label
                          key={color.value}
                          htmlFor={`color-${color.value}`}
                          className="cursor-pointer rounded-md border p-2 flex items-center gap-2 [&:has(:checked)]:bg-pink-50 [&:has(:checked)]:border-pink-500"
                        >
                          <RadioGroupItem id={`color-${color.value}`} value={color.value} />
                          {color.name}
                        </Label>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white"
                    size="lg"
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="border-pink-200 text-pink-500 hover:bg-pink-50">
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </Button>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    In stock and ready to ship
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Truck className="mr-2 h-5 w-5 text-gray-400" />
                    Free shipping on orders over $35
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <Tabs defaultValue="ingredients">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                    <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
                    <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ingredients" className="mt-4 text-sm text-gray-600">
                    <p>{product.details.ingredients}</p>
                  </TabsContent>
                  <TabsContent value="how-to-use" className="mt-4 text-sm text-gray-600">
                    <p>{product.details.howToUse}</p>
                  </TabsContent>
                  <TabsContent value="benefits" className="mt-4 text-sm text-gray-600">
                    <ul className="list-disc pl-5 space-y-2">
                      {product.details.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">You may also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {product.relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      <Link href={`/shop/${relatedProduct.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

