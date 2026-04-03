export const projects = [
	{
		id: "cinematch",
		title: "CineMatch",
		tagline: "AI-powered movie recommendation platform",
		description:
			"CineMatch is a modern movie discovery and recommendation web app built with Next.js and TypeScript. It enables users to search, filter, and explore movies while receiving personalized recommendations based on their preferences. Features like watchlists, likes, authentication, and a responsive, accessible UI deliver a seamless cross-device experience.",
		highlights: [
			"Personalized recommendation engine",
			"Advanced filtering system",
			"Responsive UI with dark mode",
			"Authentication & watchlist",
		],
		techStack: ["Next.js", "TypeScript", "Tailwind", "RAG", "Qdrant", "Embeddings"],
		links: {
			github: "https://github.com/Arun290799/cinematch",
			live: "https://cinematch-jade.vercel.app/",
		},
	},
	{
		id: "ai-shopping",
		title: "AI Smart Shopping List",
		tagline: "LLM-powered smart grocery planner",
		description:
			"AI-Powered Smart Shopping List is an intelligent web app that transforms natural language and voice input into structured shopping lists using LLM-based parsing. It extracts quantities, units, and prices automatically while ensuring safety through multi-layer content filtering. With real-time updates, offline support, and a responsive UI, it delivers a seamless and secure shopping experience.",
		highlights: ["LLM-based parsing", "Smart categorization", "Fast API handling", "Real-time UX"],
		techStack: ["Next.js", "TypeScript", "Tailwind", "Web Speech API", "Groq", "LLM"],
		links: {
			github: "https://github.com/Arun290799/ai-smart-shopping-list",
			live: "https://ai-smart-shopping-list.vercel.app/",
		},
	},
];
