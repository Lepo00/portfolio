import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-400/5 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
          >
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded-full bg-blue-100/60 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
