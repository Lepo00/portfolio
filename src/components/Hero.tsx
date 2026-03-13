import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">{profile.name}</h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
        {profile.title}
      </p>
      <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
        {profile.tagline}
      </p>
      <a
        href="#about"
        className="animate-bounce text-gray-400 dark:text-gray-600"
        aria-label="Scroll down"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
