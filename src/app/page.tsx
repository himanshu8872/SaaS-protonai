import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-12">

      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Meet <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">AI</span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          AI-powered video calls with real-time agents, smart summaries, and post-call insights.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Button className="px-6 py-5 text-lg rounded-xl">
            Start Meeting
          </Button>
          <Button variant="outline" className="px-6 py-5 text-lg rounded-xl border-gray-700">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition"
            >
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Built With Modern Tech
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-24 space-y-6">
        <h2 className="text-3xl font-semibold">
          Experience AI Meetings Like Never Before
        </h2>
        <p className="text-gray-400">
          Smarter calls. Better productivity.
        </p>

        <Button className="px-8 py-5 text-lg rounded-xl">
          Try Meet AI 🚀
        </Button>
      </section>
    </main>
  );
}

const features = [
  { icon: "🤖", title: "AI Agents", desc: "Custom agents that assist during meetings." },
  { icon: "📞", title: "Video & Chat", desc: "Real-time communication with Stream SDK." },
  { icon: "📝", title: "Summaries", desc: "Auto-generated transcripts and summaries." },
  { icon: "🔍", title: "Search", desc: "Quickly find key moments in meetings." },
  { icon: "💳", title: "Subscriptions", desc: "Manage plans with Polar integration." },
  { icon: "🔐", title: "Auth", desc: "Secure login powered by Better Auth." },
  { icon: "📱", title: "Responsive", desc: "Optimized for all devices." },
  { icon: "⚙️", title: "Automation", desc: "Background jobs with Inngest." },
];

const techStack = [
  "Next.js 15",
  "React 19",
  "Tailwind v4",
  "shadcn/ui",
  "tRPC",
  "Drizzle ORM",
  "Neon DB",
  "OpenAI",
  "Stream",
  "Better Auth",
  "Inngest",
  "Polar",
];