export interface Experience {
  company: string;
  role: string;
  location: string;
  locationType: string;
  period: string;
  description: string;
  bullets: string[];
  companyUrl?: string;
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  note?: string;
  url?: string;
  logo?: string;
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
  title: "Backend Engineer",
  tagline: "I turned a 50-minute pipeline into a 30-second one. I build backend systems that perform at scale.",
  email: "luca.leporati@outlook.com",
  linkedin: "https://www.linkedin.com/in/luca-leporati",
  github: "https://github.com/Lepo00",
  location: "Brussels, Belgium",
  about: `I'm a backend engineer who ships measurable improvements. At Soda, I optimized a data ingestion pipeline from ~50 minutes down to ~30 seconds — a 102× speedup — and led the migration from MySQL to ClickHouse for analytical workloads. Before that, I built features at the European Parliament (selected from 200+ applicants), designed loan recovery systems at Capgemini, and developed payment and media APIs at Anoki. My stack centers on Java, Spring Boot, SQL databases, and cloud infrastructure. I care about production reliability, clean architecture, and solving problems that move the needle. Currently pursuing an MSc in Data Science at VUB to deepen my understanding of the data systems I build.`,
};

export const experiences: Experience[] = [
  {
    company: "Soda",
    role: "Backend Engineer",
    location: "Brussels",
    locationType: "Onsite",
    period: "Sep 2024 — Present",
    companyUrl: "https://www.soda.io",
    logo: "/portfolio/images/soda.png",
    description:
      "Core backend engineer on a data-quality testing platform used by enterprise clients. Focused on performance-critical systems and infrastructure scalability.",
    bullets: [
      "Achieved a 102× performance improvement on the dataset ingestion pipeline — reducing processing time from ~50 minutes to ~30 seconds through batch optimization, query rewriting, and architectural redesign.",
      "Drove the migration of analytical workloads from MySQL (OLTP) to ClickHouse (OLAP), enabling sub-second query performance on datasets that previously timed out.",
      "Designed and implemented Terraform-based infrastructure scaling to handle variable workloads, reducing cloud costs while maintaining SLA targets.",
      "Owned end-to-end feature delivery from design through production, including on-call support and incident resolution.",
      "Adopted AI-assisted development workflows with Claude Code, accelerating code review cycles and reducing debugging time across the team.",
    ],
  },
  {
    company: "European Parliament",
    role: "Software Engineer",
    location: "Brussels",
    locationType: "Onsite",
    period: "Mar 2024 — Aug 2024",
    companyUrl: "https://www.europarl.europa.eu",
    logo: "/portfolio/images/european-parliament.png",
    description:
      "Selected from 200+ applicants for a competitive traineeship. Built production features for the Parliament's Newsroom platform serving millions of EU citizens.",
    bullets: [
      "Delivered full-stack features end-to-end using Java 15, Spring Boot, Hibernate, and Oracle — from database schema design with Flyway migrations to JSP frontend rendering.",
      "Worked autonomously in an international, English-speaking environment with cross-functional teams across multiple EU institutions.",
    ],
  },
  {
    company: "Capgemini",
    role: "Software Engineer",
    location: "Milan",
    locationType: "Hybrid",
    period: "Jan 2023 — Mar 2024",
    companyUrl: "https://www.capgemini.com",
    logo: "/portfolio/images/capgemini.png",
    description:
      "Consultant for Simest (CDP Group), a state-owned company managing corporate financing for Italian businesses expanding internationally.",
    bullets: [
      "Designed and built the loan recovery module end-to-end — from requirements gathering with product managers to production deployment.",
      "Developed complex business logic in Java and PL/SQL, working with Oracle databases handling sensitive financial data.",
      "Collaborated directly with stakeholders to translate business requirements into technical solutions for a mission-critical government system.",
    ],
  },
  {
    company: "Anoki",
    role: "Backend Developer",
    location: "Milan",
    locationType: "Full remote",
    period: "Sep 2021 — Jan 2023",
    companyUrl: "https://anoki.it",
    logo: "/portfolio/images/anoki.png",
    description:
      "Built backend systems across multiple client projects — from electronic payment processing to media platform APIs.",
    bullets: [
      "Designed and shipped REST APIs with Java 11 and Spring Boot, with comprehensive test coverage using JUnit 5.",
      "Built a serverless GraphQL API with Node.js and AWS Lambda, reducing infrastructure costs compared to the previous always-on architecture.",
      "Containerized services with Docker and managed PostgreSQL databases, establishing deployment patterns reused across projects.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Vrije Universiteit Brussel (VUB)",
    degree: "MSc — Applied Informatics: AI & Data Science",
    period: "2025 — Ongoing",
    url: "https://www.vub.be/en/studying-vub/all-study-programmes-vub/bachelors-and-masters-programmes-vub/master-applied-informatics-artificial-intelligence-data-science",
    logo: "/portfolio/images/vub.png",
    note: "Specializing in big data technology, machine learning, and data management at scale",
  },
  {
    institution: "International Telematic University UNINETTUNO",
    degree: "BSc — Computer Engineering",
    period: "2021 — 2023",
    grade: "94",
    url: "https://www.uninettunouniversity.net/en/corso-laurea-ingegneria-informatica.aspx",
    logo: "/portfolio/images/uninettuno.png",
    note: "Thesis on machine learning with TensorflowJS. Coursework in algorithms, databases, computer networks, and software engineering.",
  },
  {
    institution: "ITS FondazioneJAC (JobsAcademy)",
    degree: "Higher Technical Diploma — Software Development",
    period: "2019 — 2021",
    grade: "97",
    url: "https://jac-its.it/en/courses/software-area/",
    logo: "/portfolio/images/jac.png",
    note: "Italy's largest ITS network. Hands-on training with 30%+ time in companies. Full-stack development with real client projects.",
  },
  {
    institution: "ITIS Marzoli",
    degree: "IT Expert Diploma",
    period: "2014 — 2019",
    note: "Foundations of programming, electronics, and computer science",
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
    title: "102× Pipeline Performance Optimization",
    description:
      "Took a dataset ingestion pipeline from ~50 minutes to ~30 seconds. Identified bottlenecks through profiling, redesigned the batch processing architecture, rewrote critical SQL queries, and eliminated redundant I/O operations. The improvement unblocked customers who were hitting timeout limits on large datasets.",
    technologies: ["Java 21", "MySQL", "ClickHouse", "Profiling"],
  },
  {
    title: "MySQL → ClickHouse OLAP Migration",
    description:
      "Led the migration of analytical query workloads from MySQL to ClickHouse. Designed the data modeling strategy for columnar storage, built the ETL pipeline, and migrated dashboards and reporting queries. Result: queries that previously timed out now return in under a second.",
    technologies: ["MySQL", "ClickHouse", "Terraform", "ETL"],
  },
  {
    title: "Machine Learning in the Browser",
    description:
      "BSc thesis project: built and trained ML models that run entirely client-side using TensorflowJS. Explored the trade-offs between model size, inference speed, and accuracy when moving ML workloads from server to browser.",
    technologies: ["TensorflowJS", "JavaScript", "Machine Learning"],
    link: "https://github.com/Lepo00",
  },
];
