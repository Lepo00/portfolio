import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">About</h2>
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {profile.about}
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden ring-2 ring-blue-500/20 dark:ring-blue-400/20">
            <img
              src="/portfolio/images/profile.jpg"
              alt="Luca Leporati"
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
