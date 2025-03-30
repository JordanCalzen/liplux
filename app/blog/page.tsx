import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
	{
		id: 1,
		title: "The Ultimate Guide to Winter Lip Care",
		excerpt:
			"Learn how to keep your lips soft and hydrated during the harsh winter months with these expert tips.",
		date: "January 15, 2023",
		category: "Lip Care Tips",
		image:
			"https://img.freepik.com/free-vector/aloe-vera-cosmetics-with-tubes-different-shape-colour-with-water-dispensers-text_1284-27019.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		author: {
			name: "Emma Rodriguez",
			avatar: "/placeholder.svg?height=100&width=100",
		},
	},
	{
		id: 2,
		title: "5 Ingredients to Look for in Your Lip Products",
		excerpt:
			"Discover the key ingredients that make a difference in lip care and why they should be in your products.",
		date: "February 3, 2023",
		category: "Ingredients",
		image:
			"https://img.freepik.com/free-vector/snails-cosmetics-composition_1284-36060.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		author: {
			name: "Sophia Chen",
			avatar:
				"https://img.freepik.com/free-photo/young-woman-applying-natural-face-mask_23-2148883860.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		},
	},
	{
		id: 3,
		title: "How to Create the Perfect Lip Care Routine",
		excerpt:
			"A step-by-step guide to building a lip care routine that will keep your lips looking and feeling their best.",
		date: "March 12, 2023",
		category: "Routines",
		image:
			"https://img.freepik.com/free-vector/concept-poster-organic-natural-cream_88138-47.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		author: {
			name: "Olivia Taylor",
			avatar:
				"https://img.freepik.com/premium-photo/lip-care-unrecognizable-black-woman-applying-moisturising-chapstick-lips-cropped-image-closeup_922936-36858.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		},
	},
	{
		id: 4,
		title: "The Science Behind Lip Hydration",
		excerpt:
			"A deep dive into the science of lip hydration and why your lips need special care compared to the rest of your skin.",
		date: "April 5, 2023",
		category: "Science",
		image:
			"https://img.freepik.com/free-vector/spa-realistic-rose-composition_1284-22101.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		author: {
			name: "Michael Kim",
			avatar:
				"https://img.freepik.com/free-photo/vertical-image-cheerful-happy-woman-applies-sea-salt-scrub-absorbing-dirt-cleaning-dark-dotes-face-maintains-well-hydration-holds-heart-shaped-sponge-near-cheek-reverses-skin-cells_273609-30851.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		},
	},
	{
		id: 5,
		title: "Summer Lip Care: Protecting Your Lips from the Sun",
		excerpt:
			"Essential tips for keeping your lips protected and hydrated during the hot summer months.",
		date: "May 20, 2023",
		category: "Seasonal Care",
		image:
			"https://img.freepik.com/free-photo/pink-himalayan-salt-jar-rose-essential-oil-coffee-ground-spoon-against-green-textured-backdrop_23-2148087682.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		author: {
			name: "Emma Rodriguez",
			avatar:
				"https://img.freepik.com/free-photo/healthy-smiling-female-model-wrapped-bath-towel-wears-green-beauty-patches-eyes_273609-48082.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		},
	},
	{
		id: 6,
		title: "The History of Lip Care: From Ancient Times to Today",
		excerpt:
			"Explore the fascinating history of lip care products and how they've evolved over centuries.",
		date: "June 8, 2023",
		category: "History",
		image:
			"https://img.freepik.com/premium-photo/high-angle-view-food-table_1048944-11856245.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		author: {
			name: "Sophia Chen",
			avatar:
				"https://img.freepik.com/premium-photo/this-photo-shows-young-african-american-woman-with-curly-hair-applying-lip-balm-her-lips-she-is_116547-121388.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
		},
	},
];

const categories = [
	"All",
	"Lip Care Tips",
	"Ingredients",
	"Routines",
	"Science",
	"Seasonal Care",
	"History",
];

export default function BlogPage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-pink-50 to-white">
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							Lip Lux Blog
						</h1>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Discover expert tips, insights, and the latest trends in lip care
							to keep your lips looking and feeling their best.
						</p>
					</div>
				</div>
			</section>

			{/* Blog Content */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{/* Categories */}
					<div className="mb-12 overflow-x-auto">
						<div className="flex space-x-2 min-w-max">
							{categories.map((category, index) => (
								<Button
									key={index}
									variant={index === 0 ? "default" : "outline"}
									className={index === 0 ? "bg-pink-500 hover:bg-pink-600" : ""}
								>
									{category}
								</Button>
							))}
						</div>
					</div>

					{/* Featured Post */}
					<div className="mb-16">
						<Card className="overflow-hidden">
							<div className="grid md:grid-cols-2">
								<div className="relative aspect-[16/9] md:aspect-auto md:h-full">
									<Image
										src={blogPosts[0].image || "/placeholder.svg"}
										alt={blogPosts[0].title}
										fill
										className="object-cover"
									/>
								</div>
								<CardContent className="p-6 md:p-10 flex flex-col justify-center">
									<Badge className="w-fit mb-4 bg-pink-100 text-pink-800 hover:bg-pink-200">
										{blogPosts[0].category}
									</Badge>
									<h2 className="text-2xl md:text-3xl font-bold mb-4">
										{blogPosts[0].title}
									</h2>
									<p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
									<div className="flex items-center mb-6">
										<div className="relative h-10 w-10 overflow-hidden rounded-full mr-3">
											<Image
												src={blogPosts[0].author.avatar || "/placeholder.svg"}
												alt={blogPosts[0].author.name}
												fill
												className="object-cover"
											/>
										</div>
										<div>
											<p className="text-sm font-medium">
												{blogPosts[0].author.name}
											</p>
											<p className="text-sm text-gray-500">
												{blogPosts[0].date}
											</p>
										</div>
									</div>
									<Button
										asChild
										className="w-fit bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white"
									>
										<Link href={`/blog/${blogPosts[0].id}`}>Read More</Link>
									</Button>
								</CardContent>
							</div>
						</Card>
					</div>

					{/* Blog Posts Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.slice(1).map((post) => (
							<Card
								key={post.id}
								className="overflow-hidden flex flex-col h-full"
							>
								<div className="relative aspect-[16/9]">
									<Image
										src={post.image || "/placeholder.svg"}
										alt={post.title}
										fill
										className="object-cover"
									/>
									<div className="absolute top-4 left-4">
										<Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200">
											{post.category}
										</Badge>
									</div>
								</div>
								<CardContent className="p-6 flex flex-col flex-grow">
									<h3 className="text-xl font-bold mb-3">{post.title}</h3>
									<p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
									<div className="flex items-center justify-between mt-auto">
										<div className="flex items-center">
											<div className="relative h-8 w-8 overflow-hidden rounded-full mr-2">
												<Image
													src={post.author.avatar || "/placeholder.svg"}
													alt={post.author.name}
													fill
													className="object-cover"
												/>
											</div>
											<p className="text-sm font-medium">{post.author.name}</p>
										</div>
										<p className="text-sm text-gray-500">{post.date}</p>
									</div>
									<Button
										asChild
										variant="ghost"
										className="w-full mt-4 text-pink-500 hover:text-pink-600 hover:bg-pink-50"
									>
										<Link href={`/blog/${post.id}`}>Read More</Link>
									</Button>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Pagination */}
					<div className="mt-16 flex justify-center">
						<div className="flex items-center space-x-2">
							<Button variant="outline" disabled>
								Previous
							</Button>
							<Button
								variant="outline"
								className="bg-pink-50 text-pink-500 border-pink-200"
							>
								1
							</Button>
							<Button variant="outline">2</Button>
							<Button variant="outline">3</Button>
							<Button variant="outline">Next</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="bg-gradient-to-r from-pink-100 to-pink-50 py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							Subscribe to Our Blog
						</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Get the latest lip care tips, product updates, and exclusive
							content delivered straight to your inbox.
						</p>
						<div className="mt-8 flex justify-center">
							<div className="flex w-full max-w-md flex-col sm:flex-row gap-3">
								<input
									type="email"
									placeholder="Enter your email"
									className="rounded-md border-gray-300 px-4 py-2 flex-grow focus:border-pink-500 focus:ring-pink-500"
								/>
								<Button className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white">
									Subscribe
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
