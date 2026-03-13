import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={`${edu.institution}-${edu.period}`}
            className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-6 py-3 pr-4 rounded-r-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm"
          >
            <div className="absolute -left-[5px] top-4 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
            <div className="flex items-start gap-4">
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-10 h-10 rounded-md object-contain bg-white p-1 flex-shrink-0 mt-0.5"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm">
                  {edu.url ? (
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      {edu.institution}
                    </a>
                  ) : (
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.institution}
                    </span>
                  )}
                  {edu.grade && (
                    <span className="text-gray-500 dark:text-gray-500">
                      {" "}· Grade: {edu.grade}
                    </span>
                  )}
                </p>
                {edu.note && (
                  <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                    {edu.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
