export type Project = {
  id: number;
  name: string;
  slug: string;
  description: string;
  status: "ongoing" | "paused" | "finished";
  media: {
    url: string;
  };
};

export async function generateStaticParams() {
  const res = await fetch("https://cms.ameciclo.org/projects");
  const projects: Project[] = await res.json();

  return projects.map((p) => ({
    params: { slug: p.slug },
  }));
}

async function getProjectBySlug(slug: string): Promise<Project[]> {
  const res = await fetch(`https://cms.ameciclo.org/projects?slug=${slug}`);
  return await res.json();
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const [project] = await getProjectBySlug(params.slug);

  return (
    <>
      <h1>Projeto: {project.name}</h1>
    </>
  );
}
