export interface Experience {
  company: string;
  role: string;
  location: string;
  locationType: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  note?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const profile = {
  name: "Luca Leporati",
  title: "Backend Developer",
  tagline: "Building data-intensive systems at scale",
  email: "luca.leporati@outlook.com",
  linkedin: "https://www.linkedin.com/in/luca-leporati",
  github: "https://github.com/Lepo00",
  location: "Brussels, Belgium",
  about: `Backend engineer with experience in building and operating data-intensive backend systems, including high-throughput ingestion pipelines and OLAP migrations at scale. Focused on production reliability, performance optimization, scalability, and hands-on architectural decisions across both OLTP and OLAP systems. Background mainly in Java, databases, and cloud infrastructure, with a track record of delivering impactful backend improvements. Currently expanding into data science with an MSc at VUB.`,
};

export const experiences: Experience[] = [
  {
    company: "Soda",
    role: "Backend Engineer",
    location: "Brussels",
    locationType: "Onsite",
    period: "Sep 2024 — Present",
    description:
      "Backend development of a data-quality testing platform using Java 21, JUnit 5 and MySQL, with a focus on performance and scalability.",
    bullets: [
      "Developed and maintained backend features, handling bug fixing and production issues.",
      "Optimized the dataset ingestion pipeline, achieving a ~102× performance improvement.",
      "Worked on the migration of analytical workloads from MySQL (OLTP) to ClickHouse (OLAP) to improve performance and scalability.",
      "Managed infrastructure scalability using Terraform, adapting the system to variable workloads.",
      "Contributed to product delivery using the Shape Up framework.",
      "Leveraged AI-assisted development with Claude Code to accelerate feature delivery, debugging, and code review.",
    ],
  },
  {
    company: "European Parliament",
    role: "Software Engineer",
    location: "Brussels",
    locationType: "Onsite",
    period: "Mar 2024 — Aug 2024",
    description:
      "5-month traineeship selected from 200 applicants. Developed new features for the Newsroom website.",
    bullets: [
      "Java 15, Spring Boot, Hibernate, Flyway, JSP",
      "SQL Oracle",
    ],
  },
  {
    company: "Capgemini",
    role: "Software Engineer",
    location: "Milan",
    locationType: "Hybrid",
    period: "Jan 2023 — Mar 2024",
    description:
      "Consultant for Simest, a state-owned company in the CDP group involved in corporate financing. Worked on the loan recovery module — from brainstorming with product managers to implementation.",
    bullets: [
      "Feature development with Java, JSP",
      "SQL Oracle, PL/SQL",
    ],
  },
  {
    company: "Anoki",
    role: "Backend Developer",
    location: "Milan",
    locationType: "Full remote",
    period: "Sep 2021 — Jan 2023",
    description:
      "Consultant on several backend projects: an electronic payments app and a journalistic REST API platform.",
    bullets: [
      "REST API development with Java 11 Spring Boot, tested with JUnit 5",
      "GraphQL API with NodeJS and AWS Lambda",
      "Containerized applications with Docker, SQL database management with PostgreSQL",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "VUB",
    degree: "MSc — Data Science",
    period: "2025 — Ongoing",
  },
  {
    institution: "University UNINETTUNO",
    degree: "BSc — Computer Engineering",
    period: "2021 — 2023",
    grade: "94",
    note: "University thesis on machine learning with TensorflowJS",
  },
  {
    institution: "ITS FondazioneJAC",
    degree: "Software Development",
    period: "2019 — 2021",
    grade: "97",
  },
  {
    institution: "Marzoli High School",
    degree: "IT Expert",
    period: "2014 — 2019",
  },
];

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["Java", "JavaScript", "SQL"] },
  { category: "Frameworks", skills: ["Spring Boot", "Node.js", "Hibernate"] },
  {
    category: "Databases",
    skills: ["Oracle", "PostgreSQL", "MySQL", "ClickHouse", "DynamoDB"],
  },
  { category: "Cloud & Infra", skills: ["AWS", "Terraform", "Docker"] },
  { category: "Tools", skills: ["Git", "Jira", "Linear"] },
  { category: "API", skills: ["REST", "GraphQL"] },
];

export const projects: Project[] = [
  {
    title: "Data Ingestion Pipeline Optimization",
    description:
      "Optimized a dataset ingestion pipeline at Soda, achieving a ~102× performance improvement through batching, query optimization, and architectural changes.",
    technologies: ["Java 21", "MySQL", "ClickHouse"],
  },
  {
    title: "OLTP to OLAP Migration",
    description:
      "Led the migration of analytical workloads from MySQL to ClickHouse, improving query performance for large-scale data analysis.",
    technologies: ["MySQL", "ClickHouse", "Terraform"],
  },
  {
    title: "ML with TensorflowJS",
    description:
      "University thesis project implementing machine learning models in the browser using TensorflowJS.",
    technologies: ["TensorflowJS", "JavaScript"],
    link: "https://github.com/Lepo00",
  },
];
