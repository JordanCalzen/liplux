import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredProducts = [
	{
		id: 1,
		name: "Rose Petal Lip Balm",
		description: "Nourishing lip balm with rose extract and shea butter",
		price: "$14.99",
		image:
			"https://img.freepik.com/premium-photo/close-up-colorful-lipsticks-table_1048944-8704229.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		badge: "Bestseller",
	},
	{
		id: 2,
		name: "Honey Sugar Lip Scrub",
		description: "Exfoliating lip scrub with honey and sugar crystals",
		price: "$16.99",
		image:
			"https://img.freepik.com/free-photo/hand-holding-pink-lipstick_23-2148978129.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		badge: "New",
	},
	{
		id: 3,
		name: "Peach Shimmer Lip Gloss",
		description: "Hydrating lip gloss with peach extract and subtle shimmer",
		price: "$18.99",
		image:
			"https://img.freepik.com/free-photo/closeup-red-lipstick-isolated-white-background_53876-65275.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid/placeholder.svg?height=400&width=400",
		badge: null,
	},
	{
		id: 4,
		name: "Mint Revival Lip Mask",
		description: "Overnight lip mask with mint and hyaluronic acid",
		price: "$22.99",
		image:
			"https://img.freepik.com/premium-photo/african-woman-apply-hygienic-balsam-lipstick-lips-moisturizing-protection-from-cold-wind_165285-4614.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		badge: null,
	},
];

const testimonials = [
	{
		id: 1,
		content:
			"The Rose Petal Lip Balm is a game-changer! My lips have never felt so soft and hydrated.",
		author: "Emma S.",
		avatar:
			"https://img.freepik.com/free-photo/african-female-soldier-jobs-career-portrait_53876-148048.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		rating: 5,
	},
	{
		id: 2,
		content:
			"I've tried countless lip products, but Lip Lux's formulas are truly luxurious. Worth every penny!",
		author: "Jessica T.",
		avatar:
			"https://img.freepik.com/premium-photo/adult-woman-serene-face-expression-studio-portrait_53876-38911.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		rating: 5,
	},
	{
		id: 3,
		content:
			"The Honey Sugar Lip Scrub leaves my lips incredibly smooth. Perfect prep before applying lipstick.",
		author: "Olivia M.",
		avatar:
			"https://img.freepik.com/free-photo/smiley-african-woman-with-golden-earrings_23-2148747979.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		rating: 4,
	},
];

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative">
				<div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-white opacity-90" />
				<div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
						<div className="flex flex-col gap-6">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block">Indulge in</span>
								<span className="block bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
									Luxurious Lip Care
								</span>
							</h1>
							<p className="max-w-md text-lg text-gray-600">
								Discover premium lip care products designed to nourish, protect,
								and enhance your natural beauty.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 mt-2">
								<Button
									className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white"
									size="lg"
								>
									Explore Products
								</Button>
								<Button variant="outline" size="lg">
									Learn More
								</Button>
							</div>
						</div>
						<div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:h-96">
							<Image
								src="https://img.freepik.com/premium-photo/cosmetics-lipstick-lips-woman-studio-beauty-products-makeup-skincare-cosmetology-smile-closeup-mouth-person-with-shade-shine-red-color-white-background_590464-421803.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								alt="Lip care products"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Products Section */}
			<section className="bg-white py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Featured Products
						</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Explore our bestselling lip care products, crafted with premium
							ingredients for exceptional results.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{featuredProducts.map((product) => (
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

					<div className="mt-12 text-center">
						<Button
							asChild
							className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white"
						>
							<Link href="/shop">View All Products</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-gradient-to-r from-pink-50 to-white py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							What Our Customers Say
						</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Discover why our customers love Lip Lux products and keep coming
							back for more.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.id}
								className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
							>
								<div className="flex items-center space-x-1 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`h-5 w-5 ${
												i < testimonial.rating
													? "fill-pink-400 text-pink-400"
													: "fill-gray-200 text-gray-200"
											}`}
										/>
									))}
								</div>
								<p className="text-gray-600 mb-6">"{testimonial.content}"</p>
								<div className="flex items-center">
									<div className="relative h-10 w-10 overflow-hidden rounded-full">
										<Image
											src={testimonial.avatar || "/placeholder.svg"}
											alt={testimonial.author}
											fill
											className="object-cover"
										/>
									</div>
									<div className="ml-3">
										<p className="text-sm font-medium text-gray-900">
											{testimonial.author}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="bg-white py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="rounded-2xl bg-gradient-to-r from-pink-100 to-pink-50 px-6 py-10 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
						<div className="lg:w-0 lg:flex-1">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Join Our Newsletter
							</h2>
							<p className="mt-4 max-w-3xl text-lg text-gray-600">
								Sign up for our newsletter to receive exclusive offers, beauty
								tips, and be the first to know about new product launches.
							</p>
						</div>
						<div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8">
							<form className="sm:flex">
								<Input
									type="email"
									placeholder="Enter your email"
									className="w-full rounded-md border-gray-300 focus:border-pink-500 focus:ring-pink-500"
								/>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<Button className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white">
										Subscribe
									</Button>
								</div>
							</form>
							<p className="mt-3 text-sm text-gray-600">
								We care about your data. Read our{" "}
								<Link
									href="/privacy-policy"
									className="font-medium text-pink-500 hover:text-pink-600"
								>
									Privacy Policy
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
