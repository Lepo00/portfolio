import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="rounded-lg p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="font-semibold text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
