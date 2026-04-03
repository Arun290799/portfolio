"use client";

import { motion } from "framer-motion";
import { modernVariants } from "@/lib/modern-animations";
import { Phone, Mail, Send } from "lucide-react";
import { ClientOnly } from "@/components/ui/client-only/client-only";

export function Contact() {
	return (
		<section id="contact" className="relative py-32 px-6 overflow-hidden">
			<div className="mx-auto max-w-6xl relative z-10">
				{/* Section Header */}
				<motion.div className="text-center mb-20" variants={modernVariants.fadeInUp}>
					<motion.h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-primary">
						Get In Touch
					</motion.h2>
				</motion.div>

				{/* Two Column Layout */}
				<div className="grid lg:grid-cols-2 gap-16 items-start">
					{/* Left Column - Contact Info */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						{/* Let's Connect Section */}
						<div>
							<h3 className="text-2xl font-semibold text-primary mb-4">Let's Connect</h3>
							<p className="text-secondary leading-relaxed">
								I'm always interested in hearing about new projects and opportunities.
							</p>
						</div>

						{/* Phone Card */}
						<motion.div
							className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-50"
							whileHover={{ scale: 1.02, y: -4 }}
						>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
									<Phone className="w-6 h-6 text-primary" />
								</div>
								<div>
									<h4 className="text-lg font-medium text-primary mb-1">Phone</h4>
									<p className="text-secondary">+91 8142403666</p>
								</div>
							</div>
						</motion.div>

						{/* Email Card */}
						<motion.div
							className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-50"
							whileHover={{ scale: 1.02, y: -4 }}
						>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
									<Mail className="w-6 h-6 text-primary" />
								</div>
								<div>
									<h4 className="text-lg font-medium text-primary mb-1">Email</h4>
									<p className="text-secondary">polojuarunkumar2@gmail.com</p>
								</div>
							</div>
						</motion.div>

						{/* Connect with me */}
						<div className="pt-4">
							<h4 className="text-lg font-medium text-primary mb-4">Connect with me</h4>
							<div className="flex gap-4">
								<motion.a
									href="https://github.com/Arun290799"
									target="_blank"
									rel="noopener noreferrer"
									className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-50 cursor-pointer"
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
										<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.76.4-1.27.72-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.82 0c2.22-1.48 3.2-1.17 3.2-1.17.63 1.65.23 2.87.11 3.17.75.8 1.2 1.82 1.2 3.07 0 4.41-2.69 5.38-5.25 5.67.41.36.77 1.08.77 2.17v3.22c0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
									</svg>
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/arun-p-530246146/"
									target="_blank"
									rel="noopener noreferrer"
									className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-50 cursor-pointer"
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
										<path d="M4.98 3.5C4.98 5 3.77 6.2 2.27 6.2 0.77 6.2-.44 5 -.44 3.5 -.44 2 0.77.8 2.27.8c1.5 0 2.71 1.2 2.71 2.7zM.24 8.98h4.07V24H.24zM7.98 8.98h3.9v2.05h.05c.54-1.03 1.86-2.12 3.83-2.12 4.1 0 4.86 2.7 4.86 6.2V24h-4.07v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24H7.98z" />
									</svg>
								</motion.a>
							</div>
						</div>
					</motion.div>

					{/* Right Column - Form */}
					<motion.div
						className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<ClientOnly
							fallback={
								<div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
									<div className="animate-pulse space-y-6">
										<div className="h-4 bg-white/10 rounded w-20"></div>
										<div className="h-12 bg-white/10 rounded"></div>
										<div className="h-4 bg-white/10 rounded w-20"></div>
										<div className="h-12 bg-white/10 rounded"></div>
										<div className="h-4 bg-white/10 rounded w-20"></div>
										<div className="h-32 bg-white/10 rounded"></div>
										<div className="h-12 bg-white/10 rounded"></div>
									</div>
								</div>
							}
						>
							<form className="space-y-6">
								{/* Name Input */}
								<div>
									<label className="block text-primary font-medium mb-2">Name</label>
									<input
										type="text"
										placeholder="Enter your name"
										className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-primary placeholder-text-secondary focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-50"
									/>
								</div>

								{/* Email Input */}
								<div>
									<label className="block text-primary font-medium mb-2">Email</label>
									<input
										type="email"
										placeholder="Enter your email"
										className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-primary placeholder-text-secondary focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-50"
									/>
								</div>

								{/* Message Textarea */}
								<div>
									<label className="block text-primary font-medium mb-2">Message</label>
									<textarea
										placeholder="Enter your message"
										rows={5}
										className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-primary placeholder-text-secondary focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-50 resize-none"
									/>
								</div>

								{/* Submit Button */}
								<motion.button
									type="submit"
									className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-on-primary font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-50 flex items-center justify-center gap-2"
									whileHover={{ scale: 1.02, y: -2 }}
									whileTap={{ scale: 0.98 }}
								>
									Send Message
									<Send className="w-5 h-5" />
								</motion.button>
							</form>
						</ClientOnly>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
