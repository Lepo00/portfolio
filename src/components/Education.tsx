import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={`${edu.institution}-${edu.period}`}
            className="border-l-2 border-blue-500 dark:border-blue-400 pl-6 relative"
          >
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="font-semibold">{edu.degree}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                {edu.period}
              </span>
            </div>
            <p className="text-blue-500 dark:text-blue-400 text-sm">
              {edu.institution}
              {edu.grade && ` · Grade: ${edu.grade}`}
            </p>
            {edu.note && (
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                {edu.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
