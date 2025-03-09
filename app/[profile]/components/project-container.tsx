import Link from "next/link";

type Projects = {
  title: string;
  link: string;
}

export default function ProjectsSection({ projects }: { projects: Projects[] }) {
  return (
    <section className={`flex flex-col gap-4 mx-4`}>
      {projects.map((project) => {
        if (project.title.length === 0) return
        return (
          <ProjectLink key={project.title} title={project.title} link={project.link} />
        )
      })}
    </section>
  )
}

function ProjectLink ({ title, link }: Projects) {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-slate-800 active:bg-slate-600 active:scale-95 transition-all p-4 rounded-full text-xl text-center link-project"
    >
      {title}
    </Link>
  )
}