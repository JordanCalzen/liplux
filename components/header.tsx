"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Lip Lux</span>
            <div className="flex items-center">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-pink-300 to-pink-500">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">LL</div>
              </div>
              <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
                Lip Lux
              </span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-gray-700" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5 text-gray-700" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5 text-gray-700" />
            <span className="sr-only">Cart</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[10px] font-medium text-white">
              0
            </span>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Lip Lux</span>
              <div className="flex items-center">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-r from-pink-300 to-pink-500">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                    LL
                  </div>
                </div>
                <span className="ml-2 text-lg font-semibold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
                  Lip Lux
                </span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5 text-gray-700" />
                  <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-gray-700" />
                  <span className="sr-only">Account</span>
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5 text-gray-700" />
                  <span className="sr-only">Cart</span>
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[10px] font-medium text-white">
                    0
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

