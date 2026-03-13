import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-1/3 -right-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
          {profile.title}
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl">
          {profile.tagline}
        </p>
        <a
          href="#about"
          className="animate-bounce text-blue-500 dark:text-blue-400"
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
