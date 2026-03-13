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
            <div className="flex items-start gap-4">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-10 h-10 rounded-md object-contain bg-white p-1 flex-shrink-0 mt-0.5"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm mb-2">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </span>
                  )}
                  <span className="text-gray-500 dark:text-gray-500">
                    {" "}· {exp.location} · {exp.locationType}
                  </span>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
