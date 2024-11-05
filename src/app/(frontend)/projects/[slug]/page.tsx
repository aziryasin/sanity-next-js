import { client } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { Project } from "@/components/Project";
import { notFound } from "next/navigation";

type ProjectIndexProps = Promise<{ params: { slug: string } }>;

const options = { next: { revalidate: 60 } };

export default async function Page(props: { params: ProjectIndexProps }) {
  const project = await client.fetch(PROJECT_QUERY, props.params, options);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Project {...project} />
    </main>
  );
}
