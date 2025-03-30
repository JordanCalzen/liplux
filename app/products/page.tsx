import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
	{
		id: 1,
		name: "Lip Balms",
		description: "Nourishing lip balms for soft, hydrated lips",
		image:
			"https://img.freepik.com/premium-psd/cosmetic-lipstick-branding-mockup_439185-9171.jpg",
		href: "/shop/lip-balms",
	},
	{
		id: 2,
		name: "Lip Scrubs",
		description: "Exfoliating lip scrubs for smooth, flake-free lips",
		image:
			"https://media.istockphoto.com/id/455700535/photo/natural-orange-sugar-lip-scrub-on-white.jpg?b=1&s=612x612&w=0&k=20&c=qA_Sd5JuoAro2PaR2d8r-9qt-sclMEjNX3NA_GxKfyg=",
		href: "/shop/lip-scrubs",
	},
	{
		id: 3,
		name: "Lip Glosses",
		description: "Hydrating lip glosses for a subtle shine",
		image:
			"https://media.istockphoto.com/id/887722286/photo/lip-scrub.jpg?b=1&s=612x612&w=0&k=20&c=hw4_OPWWw2a4gwcPSYmAYD9bwaLWqmYPw2mNX3bSmLQ=",
		href: "/shop/lip-glosses",
	},
	{
		id: 4,
		name: "Lip Masks",
		description: "Overnight lip masks for intensive repair",
		image:
			"https://img.freepik.com/free-photo/beauty-product-spreading-out_23-2151427911.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		href: "/shop/lip-masks",
	},
];

const products = [
	{
		id: 1,
		name: "Rose Petal Lip Balm",
		description: "Nourishing lip balm with rose extract and shea butter",
		price: "$14.99",
		image:
			"https://img.freepik.com/premium-photo/african-woman-apply-hygienic-balsam-lipstick-lips-moisturizing-protection-from-cold-wind_165285-4614.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		category: "Lip Balms",
		badge: "Bestseller",
	},
	{
		id: 2,
		name: "Honey Sugar Lip Scrub",
		description: "Exfoliating lip scrub with honey and sugar crystals",
		price: "$16.99",
		image:
			"https://img.freepik.com/premium-psd/lip-balm-mockup_1252549-60.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		category: "Lip Scrubs",
		badge: "New",
	},
	{
		id: 3,
		name: "Peach Shimmer Lip Gloss",
		description: "Hydrating lip gloss with peach extract and subtle shimmer",
		price: "$18.99",
		image:
			"https://img.freepik.com/free-photo/various-colorful-lipsticks-pink-background_23-2147879017.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		category: "Lip Glosses",
		badge: null,
	},
	{
		id: 4,
		name: "Mint Revival Lip Mask",
		description: "Overnight lip mask with mint and hyaluronic acid",
		price: "$22.99",
		image:
			"https://img.freepik.com/free-psd/3d-rendering-bag-accessories-icon_23-2151476555.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		category: "Lip Masks",
		badge: null,
	},
	{
		id: 5,
		name: "Coconut Vanilla Lip Balm",
		description: "Moisturizing lip balm with coconut oil and vanilla scent",
		price: "$14.99",
		image:
			"https://img.freepik.com/free-vector/different-skin-care-products-pack_52683-30938.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		category: "Lip Balms",
		badge: null,
	},
	{
		id: 6,
		name: "Berry Blast Lip Scrub",
		description: "Gentle exfoliating scrub with mixed berry extracts",
		price: "$16.99",
		image:
			"https://img.freepik.com/free-vector/makeup-cosmetics-accessories-shelf-realistic-image_1284-9312.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		category: "Lip Scrubs",
		badge: null,
	},
	{
		id: 7,
		name: "Clear Shine Lip Gloss",
		description: "Non-sticky lip gloss for a natural shine",
		price: "$17.99",
		image:
			"https://img.freepik.com/free-vector/makeup-realistic-composition_1284-18448.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		category: "Lip Glosses",
		badge: null,
	},
	{
		id: 8,
		name: "Honey Repair Lip Mask",
		description: "Intensive repair lip mask with honey and vitamin E",
		price: "$22.99",
		image:
			"https://img.freepik.com/premium-vector/cosmetics-make-up_24908-17886.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		category: "Lip Masks",
		badge: null,
	},
];

export default function ProductsPage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-pink-50 to-white">
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							Our Products
						</h1>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Discover our range of premium lip care products, crafted with the
							finest ingredients to nourish and enhance your lips.
						</p>
					</div>
				</div>
			</section>

			{/* Categories Section */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							Product Categories
						</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Explore our different product categories to find the perfect lip
							care solution for your needs.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{categories.map((category) => (
							<Link key={category.id} href={category.href}>
								<Card className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md h-full">
									<div className="aspect-square overflow-hidden bg-gray-100">
										<Image
											src={category.image || "/placeholder.svg"}
											alt={category.name}
											width={300}
											height={300}
											className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
										/>
									</div>
									<CardContent className="p-4">
										<h3 className="text-lg font-medium text-gray-900">
											{category.name}
										</h3>
										<p className="mt-1 text-sm text-gray-500">
											{category.description}
										</p>
										<div className="mt-3 flex items-center text-pink-500">
											<span className="text-sm font-medium">Shop now</span>
											<ArrowRight className="ml-1 h-4 w-4" />
										</div>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* All Products Section */}
			<section className="bg-gradient-to-r from-pink-50 to-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							All Products
						</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Browse our complete collection of premium lip care products.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{products.map((product) => (
							<Card
								key={product.id}
								className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
							>
								<div className="aspect-square overflow-hidden bg-gray-100">
									<Image
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										width={400}
										height={400}
										className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
									/>
									{product.badge && (
										<Badge className="absolute top-3 right-3 bg-pink-500 hover:bg-pink-600">
											{product.badge}
										</Badge>
									)}
								</div>
								<CardContent className="p-4">
									<div className="mb-2">
										<Badge
											variant="outline"
											className="text-xs font-normal text-gray-500"
										>
											{product.category}
										</Badge>
									</div>
									<h3 className="text-lg font-medium text-gray-900">
										{product.name}
									</h3>
									<p className="mt-1 text-sm text-gray-500">
										{product.description}
									</p>
									<div className="mt-3 flex items-center justify-between">
										<p className="text-lg font-medium text-gray-900">
											{product.price}
										</p>
										<Button
											variant="ghost"
											size="sm"
											className="text-pink-500 hover:text-pink-600 hover:bg-pink-50 p-0"
										>
											<span className="sr-only">
												View details for {product.name}
											</span>
											<ArrowRight className="h-5 w-5" />
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="rounded-2xl bg-gradient-to-r from-pink-100 to-pink-50 px-6 py-10 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:p-20">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Ready to transform your lip care routine?
							</h2>
							<p className="mt-4 max-w-3xl text-lg text-gray-600">
								Explore our complete collection and find the perfect products
								for your lips.
							</p>
						</div>
						<div className="mt-8 lg:mt-0 lg:ml-8">
							<Button
								asChild
								className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white"
								size="lg"
							>
								<Link href="/shop">Shop All Products</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
