import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Meet AI
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          AI-powered video call application with real-time agents, 
          meeting summaries, and post-call intelligence.
        </p>

        <div className="flex justify-center gap-4">
          <Button className="text-lg px-6 py-4">
            Get Started
          </Button>
          <Button variant="outline" className="text-lg px-6 py-4">
            Learn More
          </Button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-gray-800 bg-gray-900 hover:bg-gray-800 transition"
            >
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm bg-gray-800 rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-20 space-y-6">
        <h2 className="text-3xl font-semibold">
          Ready to upgrade your meetings?
        </h2>
        <Button className="text-lg px-8 py-5">
          Start Your First AI Call 🚀
        </Button>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "🤖",
    title: "AI Agents",
    desc: "Run smart AI agents during calls to assist and automate workflows.",
  },
  {
    icon: "📞",
    title: "Video & Chat",
    desc: "Real-time communication powered by Stream SDK.",
  },
  {
    icon: "📝",
    title: "Meeting Summaries",
    desc: "Automatic transcripts and concise summaries after every call.",
  },
  {
    icon: "🔍",
    title: "Smart Search",
    desc: "Search through transcripts and replay key moments instantly.",
  },
  {
    icon: "💳",
    title: "Subscriptions",
    desc: "Manage billing and plans with seamless Polar integration.",
  },
  {
    icon: "🔐",
    title: "Secure Auth",
    desc: "Robust authentication powered by Better Auth.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "Works perfectly across mobile, tablet, and desktop.",
  },
  {
    icon: "⚙️",
    title: "Background Jobs",
    desc: "Automate workflows using Inngest background processing.",
  },
];

const techStack = [
  "Next.js 15",
  "React 19",
  "Tailwind v4",
  "shadcn/ui",
  "tRPC",
  "Drizzle ORM",
  "Neon Database",
  "OpenAI",
  "Stream Video & Chat",
  "Better Auth",
  "Inngest",
  "Polar",
];