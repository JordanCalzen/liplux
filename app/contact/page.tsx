import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-pink-50 to-white">
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							Contact Us
						</h1>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Have questions or feedback? We'd love to hear from you. Get in
							touch with our team.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Form and Info */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
						{/* Contact Form */}
						<div>
							<h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
							<form className="space-y-6">
								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
									<div>
										<label
											htmlFor="first-name"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											First Name
										</label>
										<Input
											type="text"
											id="first-name"
											placeholder="Your first name"
											className="w-full"
										/>
									</div>
									<div>
										<label
											htmlFor="last-name"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Last Name
										</label>
										<Input
											type="text"
											id="last-name"
											placeholder="Your last name"
											className="w-full"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Email
									</label>
									<Input
										type="email"
										id="email"
										placeholder="Your email address"
										className="w-full"
									/>
								</div>
								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Subject
									</label>
									<Input
										type="text"
										id="subject"
										placeholder="What is this regarding?"
										className="w-full"
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Message
									</label>
									<Textarea
										id="message"
										placeholder="Your message"
										rows={6}
										className="w-full"
									/>
								</div>
								<Button
									type="submit"
									className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white"
								>
									Send Message
								</Button>
							</form>
						</div>

						{/* Contact Information */}
						<div className="lg:pl-10">
							<h2 className="text-2xl font-bold mb-6">Contact Information</h2>
							<p className="text-gray-600 mb-8">
								We're here to help! If you have any questions about our products
								or need assistance with your order, please don't hesitate to
								reach out.
							</p>

							<div className="space-y-6">
								<Card>
									<CardContent className="p-6 flex items-start">
										<Mail className="h-6 w-6 text-pink-500 mr-4 mt-0.5" />
										<div>
											<h3 className="font-medium text-gray-900">Email</h3>
											<p className="text-gray-600 mt-1">info@liplux.com</p>
											<p className="text-gray-600">support@liplux.com</p>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6 flex items-start">
										<Phone className="h-6 w-6 text-pink-500 mr-4 mt-0.5" />
										<div>
											<h3 className="font-medium text-gray-900">Phone</h3>
											<p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
											<p className="text-gray-600">
												Monday to Friday, 9am to 5pm EST
											</p>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6 flex items-start">
										<MapPin className="h-6 w-6 text-pink-500 mr-4 mt-0.5" />
										<div>
											<h3 className="font-medium text-gray-900">Office</h3>
											<p className="text-gray-600 mt-1">123 Beauty Lane</p>
											<p className="text-gray-600">New York, NY 10001</p>
											<p className="text-gray-600">United States</p>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6 flex items-start">
										<Clock className="h-6 w-6 text-pink-500 mr-4 mt-0.5" />
										<div>
											<h3 className="font-medium text-gray-900">
												Business Hours
											</h3>
											<p className="text-gray-600 mt-1">
												Monday to Friday: 9am - 5pm EST
											</p>
											<p className="text-gray-600">Saturday: 10am - 2pm EST</p>
											<p className="text-gray-600">Sunday: Closed</p>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="bg-gradient-to-r from-pink-50 to-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-10">
						<h2 className="text-2xl font-bold">Find Us</h2>
						<p className="text-gray-600 mt-2">
							Visit our office or flagship store
						</p>
					</div>
					<div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
						{/* This would be replaced with an actual map component in a real application */}
						<div className="h-full w-full flex items-center justify-center">
							<p className="text-gray-500">
								Map placeholder - would integrate Google Maps or similar here
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-10">
						<h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
						<p className="text-gray-600 mt-2">
							Find quick answers to common questions
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
						<Card>
							<CardContent className="p-6">
								<h3 className="font-medium text-lg text-gray-900">
									What are your shipping times?
								</h3>
								<p className="text-gray-600 mt-2">
									We process orders within 1-2 business days. Standard shipping
									takes 3-5 business days, while express shipping takes 1-2
									business days.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="p-6">
								<h3 className="font-medium text-lg text-gray-900">
									Do you offer international shipping?
								</h3>
								<p className="text-gray-600 mt-2">
									Yes, we ship to most countries worldwide. International
									shipping typically takes 7-14 business days depending on the
									destination.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="p-6">
								<h3 className="font-medium text-lg text-gray-900">
									What is your return policy?
								</h3>
								<p className="text-gray-600 mt-2">
									We offer a 30-day return policy for unused and unopened
									products. Please contact our customer service team to initiate
									a return.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="p-6">
								<h3 className="font-medium text-lg text-gray-900">
									Are your products cruelty-free?
								</h3>
								<p className="text-gray-600 mt-2">
									Yes, all Lip Lux products are cruelty-free and never tested on
									animals. We are committed to ethical beauty practices.
								</p>
							</CardContent>
						</Card>
					</div>

					<div className="text-center mt-10">
						<p className="text-gray-600">
							Can't find the answer you're looking for? Contact our customer
							support team.
						</p>
						<Button className="mt-4 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white">
							Contact Support
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
