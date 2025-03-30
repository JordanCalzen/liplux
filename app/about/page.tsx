import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
	{
		year: "2018",
		title: "The Beginning",
		description:
			"Lip Lux was founded with a vision to create premium lip care products using only the finest natural ingredients.",
	},
	{
		year: "2019",
		title: "First Collection",
		description:
			"We launched our first collection of lip balms, which quickly gained popularity for their nourishing properties.",
	},
	{
		year: "2020",
		title: "Expanding the Range",
		description:
			"We expanded our product range to include lip scrubs and lip glosses, offering a complete lip care solution.",
	},
	{
		year: "2021",
		title: "Going Global",
		description:
			"Lip Lux products became available internationally, reaching customers across Europe and Asia.",
	},
	{
		year: "2022",
		title: "Award-Winning Formulas",
		description:
			"Our Rose Petal Lip Balm won the 'Best Natural Lip Care Product' award at the Beauty Innovation Awards.",
	},
	{
		year: "2023",
		title: "Sustainable Packaging",
		description:
			"We transitioned to fully recyclable and eco-friendly packaging for all our products.",
	},
];

const team = [
	{
		name: "Sophia Chen",
		role: "Founder & CEO",
		bio: "With a background in cosmetic chemistry, Sophia founded Lip Lux with a vision to create lip care products that combine luxury with effectiveness.",
		image:
			"https://img.freepik.com/premium-photo/happy-black-lady-applying-lip-balm-moisturizing-care-skin_116547-73441.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
	},
	{
		name: "Emma Rodriguez",
		role: "Head of Product Development",
		bio: "Emma brings over 15 years of experience in beauty product formulation, ensuring that every Lip Lux product meets our high standards.",
		image:
			"https://img.freepik.com/free-photo/front-view-smiley-woman-with-lollipop_23-2148850932.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
	},
	{
		name: "Michael Kim",
		role: "Creative Director",
		bio: "Michael oversees the brand's visual identity, ensuring that Lip Lux's aesthetic reflects its premium positioning and appeals to our target audience.",
		image:
			"https://img.freepik.com/premium-photo/woman-studio-secret-with-skincare-glow-cosmetics-treatment-model-texture-beauty-self-care-health-wellness-with-confidence-satisfaction-isolated-white-background_590464-349708.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
	},
	{
		name: "Olivia Taylor",
		role: "Sustainability Officer",
		bio: "Olivia leads our initiatives to minimize environmental impact, from sourcing ingredients to developing eco-friendly packaging solutions.",
		image:
			"https://img.freepik.com/premium-photo/portrait-beauty-lip-balm-with-black-woman-studio-blue-background-skincare-cosmetics-face-hydration-moisture-with-happy-young-female-model-holding-makeup-product-care_590464-202439.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid",
	},
];

export default function AboutPage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-pink-50 to-white">
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
						<div className="flex flex-col gap-6">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
								Our Story
							</h1>
							<p className="text-lg text-gray-600">
								At Lip Lux, we believe that lip care should be a luxurious
								experience. Founded in 2018, we set out to create premium lip
								care products that not only nourish and protect but also elevate
								your daily routine.
							</p>
							<p className="text-lg text-gray-600">
								Our commitment to quality is unwavering. We use only the finest
								natural ingredients, carefully selected for their beneficial
								properties. Every product is crafted with attention to detail,
								ensuring a truly indulgent experience.
							</p>
						</div>
						<div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:h-96">
							<Image
								src="https://img.freepik.com/free-photo/person-eating-sweet-candy-desert_23-2149675140.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								alt="Lip Lux founder"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
						<div className="order-2 lg:order-1 relative h-64 overflow-hidden rounded-xl sm:h-80 lg:h-96">
							<Image
								src="https://img.freepik.com/premium-photo/woman-with-red-lip-black-lip_1254829-3009.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								alt="Lip care products"
								fill
								className="object-cover"
							/>
						</div>
						<div className="order-1 lg:order-2 flex flex-col gap-6">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900">
								Our Mission
							</h2>
							<p className="text-lg text-gray-600">
								Our mission is to transform lip care from a necessity into a
								luxurious ritual. We believe that everyone deserves to
								experience the joy of healthy, beautiful lips.
							</p>
							<p className="text-lg text-gray-600">
								We are committed to creating products that not only deliver
								exceptional results but also bring a moment of indulgence to
								your day. From the carefully selected ingredients to the elegant
								packaging, every aspect of our products is designed to elevate
								your lip care routine.
							</p>
							<p className="text-lg text-gray-600">
								Sustainability is also at the heart of what we do. We are
								constantly working to minimize our environmental impact, from
								sourcing ingredients responsibly to developing eco-friendly
								packaging solutions.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Timeline Section */}
			<section className="bg-gradient-to-r from-pink-50 to-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							Our Journey
						</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							From a small startup to a beloved lip care brand, explore the key
							milestones in our journey.
						</p>
					</div>

					<div className="relative">
						<div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-pink-200"></div>
						<div className="space-y-12">
							{timeline.map((item, index) => (
								<div key={index} className="relative">
									<div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
										<div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white">
											{item.year.substring(2)}
										</div>
									</div>
									<div
										className={`flex flex-col ${
											index % 2 === 0 ? "items-end pr-12" : "items-start pl-12"
										} md:w-1/2 ${
											index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
										}`}
									>
										<Card className="w-full">
											<CardContent className="p-6">
												<div className="flex flex-col gap-2">
													<div className="text-sm font-medium text-pink-500">
														{item.year}
													</div>
													<h3 className="text-lg font-bold">{item.title}</h3>
													<p className="text-gray-600">{item.description}</p>
												</div>
											</CardContent>
										</Card>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							Meet Our Team
						</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							The passionate individuals behind Lip Lux, dedicated to creating
							exceptional lip care products.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
						{team.map((member, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-center"
							>
								<div className="relative h-64 w-64 overflow-hidden rounded-full mb-6">
									<Image
										src={member.image || "/placeholder.svg"}
										alt={member.name}
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-xl font-bold">{member.name}</h3>
								<p className="text-pink-500 mb-2">{member.role}</p>
								<p className="text-gray-600">{member.bio}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-pink-100 to-pink-50 py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							Join the Lip Lux Family
						</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Experience the luxury of premium lip care and become part of our
							growing community.
						</p>
						<div className="mt-8 flex justify-center">
							<Button
								className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white"
								size="lg"
							>
								Shop Now
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
