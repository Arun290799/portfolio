"use client";

import { motion } from "framer-motion";
import { modernVariants, StaggerContainer, StaggerItem } from "@/lib/modern-animations";
import { gradients } from "@/lib/design-system";

export function About() {
	const skills = [
		"React",
		"Next.js",
		"TypeScript",
		"Node.js",
		"Python",
		"Tailwind CSS",
		"PostgreSQL",
		"MongoDB",
		"Docker",
		"AWS",
	];

	const stats = [
		{ number: "4+", label: "Years Experience" },
		{ number: "10+", label: "Projects Completed" },
		{ number: "15+", label: "Technologies Mastered" },
		{ number: "24/7", label: "Available" },
	];

	return (
		<section id="about" className="relative py-32 px-6 overflow-hidden">
			<div className="mx-auto max-w-6xl relative z-10">
				<StaggerContainer>
					{/* Section Header */}
					<motion.div className="text-center mb-20" variants={modernVariants.fadeInUp}>
						<motion.h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-primary">
							About Me
						</motion.h2>
						<motion.p className="text-lg text-secondary max-w-3xl mx-auto">
							Passionate full-stack developer with a love for creating exceptional digital experiences and
							solving complex problems with elegant solutions.
						</motion.p>
					</motion.div>

					{/* Main Content */}
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Left Column - Text Content */}
						<StaggerItem className="space-y-6">
							<motion.div variants={modernVariants.fadeInUp}>
								<h3 className="text-2xl font-semibold text-wcag-primary mb-4">
									Building the Future of Web
								</h3>
								<p className="text-secondary leading-relaxed mb-6">
									Hi, I'm Arun Poloju, a passionate full-stack developer with expertise in modern web
									technologies. I specialize in creating scalable, performant applications that
									deliver exceptional user experiences.
								</p>
								<p className="text-secondary leading-relaxed mb-6">
									With a strong foundation in both frontend and backend development, I bring ideas to
									life by combining beautiful design with powerful functionality. My approach focuses
									on clean code, best practices, and continuous learning.
								</p>
								<p className="text-secondary leading-relaxed">
									When I'm not coding, you'll find me exploring new technologies, contributing to
									open-source projects, or sharing knowledge with the developer community.
								</p>
							</motion.div>

							{/* Skills Grid */}
							<motion.div variants={modernVariants.fadeInUp}>
								<h4 className="text-xl font-semibold text-primary mb-4">Tech Stack</h4>
								<div className="flex flex-wrap gap-3">
									{skills.map((skill, index) => (
										<motion.span
											key={skill}
											className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium text-secondary hover:bg-white/20 transition-all duration-50"
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ delay: index * 0.05 }}
											whileHover={{ scale: 1.05, y: -2 }}
										>
											{skill}
										</motion.span>
									))}
								</div>
							</motion.div>
						</StaggerItem>

						{/* Right Column - Stats and Visual */}
						<StaggerItem className="space-y-8">
							{/* Stats Grid */}
							<motion.div className="grid grid-cols-2 gap-6" variants={modernVariants.fadeInUp}>
								{stats.map((stat, index) => (
									<motion.div
										key={index}
										className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-center"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										whileHover={{ scale: 1.05, y: -4 }}
									>
										<div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
										<div className="text-sm text-secondary">{stat.label}</div>
									</motion.div>
								))}
							</motion.div>

							{/* Profile Card */}
							<motion.div
								className="relative p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/20 rounded-2xl"
								variants={modernVariants.fadeInUp}
								whileHover={{ scale: 1.02 }}
							>
								<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
								<div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />

								<div className="relative z-10">
									<h4 className="text-lg font-bold text-wcag-primary mb-4">Why Work With Me?</h4>
									<ul className="space-y-3 text-wcag-secondary">
										<li className="flex items-start gap-3">
											<div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
											<span className="text-base">
												Committed to writing clean, maintainable code
											</span>
										</li>
										<li className="flex items-start gap-3">
											<div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
											<span className="text-base">
												Strong problem-solving and analytical skills
											</span>
											<span>Strong problem-solving and analytical skills</span>
										</li>
										<li className="flex items-start gap-3">
											<div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
											<span>Excellent communication and collaboration</span>
										</li>
										<li className="flex items-start gap-3">
											<div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
											<span>Always learning and adapting to new technologies</span>
										</li>
									</ul>
								</div>
							</motion.div>
						</StaggerItem>
					</div>
				</StaggerContainer>
			</div>
		</section>
	);
}
