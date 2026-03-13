import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-6 py-4 pr-4 rounded-r-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm"
          >
            <div className="absolute -left-[5px] top-5 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="font-semibold text-lg">{exp.role}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                {exp.period}
              </span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
              {exp.company} · {exp.location} · {exp.locationType}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              {exp.description}
            </p>
            <ul className="list-disc list-inside space-y-1">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-gray-600 dark:text-gray-400 text-sm"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
