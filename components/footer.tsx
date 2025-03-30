import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-pink-300 to-pink-500">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">LL</div>
              </div>
              <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
                Lip Lux
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Indulge in luxurious lip care products designed to nourish, protect, and enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-100 hover:text-pink-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-100 hover:text-pink-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-100 hover:text-pink-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/shop" className="text-sm text-gray-600 hover:text-pink-500">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop/lip-balms" className="text-sm text-gray-600 hover:text-pink-500">
                  Lip Balms
                </Link>
              </li>
              <li>
                <Link href="/shop/lip-scrubs" className="text-sm text-gray-600 hover:text-pink-500">
                  Lip Scrubs
                </Link>
              </li>
              <li>
                <Link href="/shop/lip-glosses" className="text-sm text-gray-600 hover:text-pink-500">
                  Lip Glosses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-pink-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-pink-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-pink-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-pink-500">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Subscribe to our newsletter</h3>
            <p className="mt-4 text-sm text-gray-600">Get the latest updates on new products and special promotions.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              />
              <Button className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Lip Lux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

