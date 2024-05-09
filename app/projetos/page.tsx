import Link from "next/link";
import Image from "next/image";
import { Project } from "./[slug]/page";

async function getProjects(): Promise<Project[]> {
  const res = await fetch(`https://cms.ameciclo.org/projects`);
  return await res.json();
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <h1>Projetos</h1>
      <div className="mt-5 mx-3 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {projects
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((project) => (
            <div
              className="bg-white rounded-lg shadow duration-300 hover:-translate-y-1 max-w-sm h-[450px]"
              key={project.id}
            >
              <Link href={`/projetos/${project.slug}`}>
                <div className="relative">
                  <Image
                    className="rounded-t-lg"
                    src={project.media.url}
                    alt={project.name}
                    fill
                  />
                </div>
              </Link>
              <div className="px-4 py-5 lg:p-6">
                <div className="pb-6">
                  <Link href={`/projetos/${project.slug}`} passHref>
                    <span className="mt-1 text-3xl font-semibold leading-9  cursor-pointer">
                      {project.name}
                    </span>
                  </Link>
                </div>
                <div className="text-sm text-gray-600">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
