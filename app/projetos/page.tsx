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
            <div className="bg-gray-400 rounded-lg shadow" key={project.id}>
              <span> {project.name}</span>
            </div>
          ))}
      </div>
    </>
  );
}
