export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
          Welcome to Next.js
        </span>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Build Faster with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Next.js
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
          Create fast, scalable, and modern web applications with React,
          TypeScript, and the power of server-side rendering.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/dashboard"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            Get Started
          </a>

          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700 px-6 py-3 font-medium transition hover:border-slate-500 hover:bg-slate-800"
          >
            Documentation
          </a>
        </div>

        <div className="mt-16 grid w-full max-w-4xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <h3 className="mb-2 text-xl font-semibold">⚡ Fast</h3>
            <p className="text-slate-400">
              Optimized performance with server components and streaming.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <h3 className="mb-2 text-xl font-semibold">🔒 Secure</h3>
            <p className="text-slate-400">
              Built-in security features and best practices by default.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <h3 className="mb-2 text-xl font-semibold">🚀 Scalable</h3>
            <p className="text-slate-400">
              Ready for startups, enterprises, and everything in between.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}