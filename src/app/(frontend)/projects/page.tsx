import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Title } from "@/components/Title";
import { ProjectCard } from "@/components/ProjectCard";

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const projects = await client.fetch(PROJECTS_QUERY, {}, options);

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Project Index</Title>
      <div className="flex flex-col gap-24 py-12">
        {projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
    </main>
  );
}
